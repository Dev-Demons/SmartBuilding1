using QuickJS;
using System;

namespace Example
{
    [JSType]
    public class Jankfest
    {
        // the generated glue code for this function will use the given cast operation functions in ValueTest below
        // it means you could extend your custom type cast operations out of jsb's assembly
        public static Jankfest DoNothing(Jankfest jankfest)
        {
            return jankfest;
        }
    }

    [JSType]
    public class ValueTest
    {
        // test for external definition of type cast operation
        public static QuickJS.Native.JSValue js_push_classvalue(QuickJS.Native.JSContext ctx, Jankfest o)
        {
            return QuickJS.Native.JSApi.JS_NewInt32(ctx, 1);
        }

        public static bool js_get_classvalue(QuickJS.Native.JSContext ctx, QuickJS.Native.JSValue val, out Jankfest o)
        {
            o = new Jankfest();
            return true;
        }

        public static void TakeStringWithCache([JSUseStringCache] string v)
        {
        }

        public static void TakeString(string v)
        {
        }

        public override string ToString()
        {
            throw new Exception("the intentionally thrown error");
        }

        [return: JSUseStringCache]
        public static string Foo([JSUseStringCache] string v)
        {
            return v;
        }

        public static bool CheckArgs(int a, out float b, ref string c)
        {
            b = 1f;
            return true;
        }

        public static bool CheckArgs(int a, out float b, ref UnityEngine.GameObject c)
        {
            b = 1f;
            return true;
        }

        public static void MakeTrouble()
        {
            throw new InvalidOperationException();
        }

        public static int[] values1 = new int[6] { 0, 1, 2, 3, 5, 6 };

        public static int[,] values2 = new int[2, 3] {
            { 0, 1, 2 },
            { 3, 4, 5 },
        };
    }

#if CUSTOM_DEF_FOO && UNITY_EDITOR
    /// <summary>
    /// If the target type is defined only with specific define-symbols, you can export it with ```AddRequiredDefines```. 
    /// <see href="https://github.com/ialex32x/unity-jsb/blob/c584aec2f2721faf0c76f0f80fc45f05ffd4cb26/Assets/Examples/Source/Editor/CustomBinding.cs">Example in CustomBinding</see>
    /// </summary>
    public class FOO
    {
#if CUSTOM_DEF_PROP
        public string propValue {get; set;}
#endif
        
        public static string value = "FOO";

#if CUSTOM_DEF_METHOD
        public static void Exclusive()
        {
        }
#endif
        public static void Exclusive(int i32)
        {
        }
    }
#endif

#if CUSTOM_DEF_BAR
    public class BAR
    {
        public static string value = "BAR";
    }
#endif
}
