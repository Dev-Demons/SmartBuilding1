/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "foo";

export interface Foo {
  bar: string;
  baz: string;
}

function createBaseFoo(): Foo {
  return { bar: "", baz: "" };
}

export namespace Foo {
  export function encode(message: Foo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bar !== "") {
      writer.uint32(10).string(message.bar);
    }
    if (message.baz !== "") {
      writer.uint32(18).string(message.baz);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Foo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bar = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.baz = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Foo {
    return { bar: isSet(object.bar) ? String(object.bar) : "", baz: isSet(object.baz) ? String(object.baz) : "" };
  }

  export function toJSON(message: Foo): unknown {
    const obj: any = {};
    message.bar !== undefined && (obj.bar = message.bar);
    message.baz !== undefined && (obj.baz = message.baz);
    return obj;
  }

  export function create(base?: DeepPartial<Foo>): Foo {
    return Foo.fromPartial(base ?? {});
  }

  export function fromPartial(object: DeepPartial<Foo>): Foo {
    const message = createBaseFoo();
    message.bar = object.bar ?? "";
    message.baz = object.baz ?? "";
    return message;
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
