/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Record {
}

function createBaseRecord(): Record {
  return {};
}

export namespace Record {
  export function encode(_: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(_: any): Record {
    return {};
  }

  export function toJSON(_: Record): unknown {
    const obj: any = {};
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Record>, I>>(base?: I): Record {
    return Record.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Record>, I>>(_: I): Record {
    const message = createBaseRecord();
    return message;
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };