using System;
using System.Collections.Generic;

namespace Example.Experimental
{
    using QuickJS;
    using QuickJS.Native;
    using QuickJS.Experimental;

    public class CustomApiBridgeImpl : IJSApiBridge
    {
        public const string KeyForCSharpIdentity = "__csharp_host_identity__";

        public JSPayloadHeader GetPayloadHeader(ScriptContext context, JSValue val)
        {
            JSContext ctx = context;
            bool valueDuplicated = false;

            if (val.IsObject())
            {
                var identityAtom = context.GetAtom(KeyForCSharpIdentity);
                var identity = JSApi.JS_GetProperty(ctx, val, identityAtom);
                if (!identity.IsNullish())
                {
                    val = identity;
                    valueDuplicated = true;
                }
            }

            var header = JSApi.jsb_get_payload_header(ctx, val);

            if (valueDuplicated)
            {
                JSApi.JS_FreeValue(ctx, val);
            }
            return header;
        }

        public JSValue NewBridgeObject(ScriptContext context, object o, JSValue proto)
        {
            var cache = context.GetObjectCache();
            var object_id = cache.AddObject(o, false);
            var val = JSApi.jsb_new_bridge_object(context, proto, object_id);

            if (val.IsException())
            {
                cache.RemoveObject(object_id);
            }
            else
            {
                if (typeof(IDictionary<string, object>).IsAssignableFrom(o.GetType()))
                {
                    var proxy = CreateDictionaryProxy(context, val);
                    if (proxy.IsException())
                    {
                        JSApi.JS_FreeValue(context, proxy);
                        cache.RemoveObject(object_id);
                        return proxy;
                    }
                    val = proxy;
                }
                cache.AddJSValue(o, val);
            }

            return val;
        }

        private static unsafe JSValue CreateDictionaryProxy(ScriptContext _context, JSValue target)
        {
            var ctx = (JSContext)_context;

            var createDictionaryProxy = _context.EvalSource<ScriptFunction>(@"
function createDictionaryProxy (targetProxy, contains, getter, setter, remover, keys) {
    return new Proxy(targetProxy, {
        get(target, key, receiver) {
            if(key === '" + KeyForCSharpIdentity + @"') return target;

            if(typeof key === 'string' && contains(target, key)) return getter(target, key);
            var res = target[key];
            return res;
        },
        set(target, key, value) {
            if(typeof key === 'string') setter(target, key, value);
            else target[key] = value;
            return true;
        },
        has(target, key) {
            return contains(target, key);
        },
        deleteProperty(target, key) {
            remover(target, key);
            return true;
        },
        ownKeys(target) {
            return keys(target);
        },
        getOwnPropertyDescriptor(target, key) {
            if(typeof key === 'string' && contains(target, key)) {
                return {
                  value: getter(target, key),
                  enumerable: true,
                  configurable: true
                };
            }
            return undefined;
        },
    });
}

createDictionaryProxy;
", "createDictionaryProxy");

            var contains = new Func<IDictionary<string, object>, string, bool>(
                (IDictionary<string, object> dc, string key) =>
                {
                    return key != null && dc.ContainsKey(key);
                });

            var getter = new Func<IDictionary<string, object>, string, object>(
                (IDictionary<string, object> dc, string key) =>
                {
                    return dc[key];
                });

            var setter = new Action<IDictionary<string, object>, string, object>(
                (IDictionary<string, object> dc, string key, object value) =>
                {
                    dc[key] = value;
                });

            var remover = new Action<IDictionary<string, object>, string>(
                (IDictionary<string, object> dc, string key) =>
                {
                    dc.Remove(key);
                });

            var keys = new Func<IDictionary<string, object>, object>(
                (IDictionary<string, object> dc) =>
                {
                    var items = dc.Keys;
                    var len = items.Count;
                    var arr = new string[len];
                    var i = 0;
                    foreach (var item in items)
                        arr[i++] = item;
                    return arr;
                });

            var prs = new object[] {
                target,
                contains,
                getter,
                setter,
                remover,
                keys,
            };

            var _proxy = createDictionaryProxy.Invoke<ScriptValue>(prs);

            var res = JSApi.JS_DupValue(ctx, _proxy);
            _proxy.Dispose();
            createDictionaryProxy.Dispose();
            JSApi.JS_FreeValue(ctx, target);
            return res;
        }
    }
}
