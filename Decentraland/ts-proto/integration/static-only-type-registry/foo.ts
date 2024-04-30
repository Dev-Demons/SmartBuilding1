/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Struct } from "./google/protobuf/struct";
import { Timestamp } from "./google/protobuf/timestamp";
import { messageTypeRegistry } from "./typeRegistry";

export const protobufPackage = "foo";

export interface Foo {
  timestamp: Date | undefined;
}

export interface Foo2 {
  timestamp: Date | undefined;
}

export interface WithStruct {
  struct: { [key: string]: any } | undefined;
}

function createBaseFoo(): Foo {
  return { timestamp: undefined };
}

export namespace Foo {
  export const $type = "foo.Foo";

  export function encode(message: Foo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
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

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    return { timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined };
  }

  export function toJSON(message: Foo): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Foo>, I>>(base?: I): Foo {
    return Foo.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Foo>, I>>(object: I): Foo {
    const message = createBaseFoo();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }
}

messageTypeRegistry.set(Foo.$type, Foo);

function createBaseFoo2(): Foo2 {
  return { timestamp: undefined };
}

export namespace Foo2 {
  export const $type = "foo.Foo2";

  export function encode(message: Foo2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Foo2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoo2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Foo2 {
    return { timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined };
  }

  export function toJSON(message: Foo2): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Foo2>, I>>(base?: I): Foo2 {
    return Foo2.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Foo2>, I>>(object: I): Foo2 {
    const message = createBaseFoo2();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }
}

messageTypeRegistry.set(Foo2.$type, Foo2);

function createBaseWithStruct(): WithStruct {
  return { struct: undefined };
}

export namespace WithStruct {
  export const $type = "foo.WithStruct";

  export function encode(message: WithStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.struct !== undefined) {
      Struct.encode(Struct.wrap(message.struct), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): WithStruct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struct = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): WithStruct {
    return { struct: isObject(object.struct) ? object.struct : undefined };
  }

  export function toJSON(message: WithStruct): unknown {
    const obj: any = {};
    message.struct !== undefined && (obj.struct = message.struct);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<WithStruct>, I>>(base?: I): WithStruct {
    return WithStruct.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<WithStruct>, I>>(object: I): WithStruct {
    const message = createBaseWithStruct();
    message.struct = object.struct ?? undefined;
    return message;
  }
}

messageTypeRegistry.set(WithStruct.$type, WithStruct);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
