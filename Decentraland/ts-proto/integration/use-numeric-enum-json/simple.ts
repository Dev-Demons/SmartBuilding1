/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "./google/protobuf/struct";

export const protobufPackage = "simple";

export enum StateEnum {
  UNKNOWN = 0,
  ON = 2,
  OFF = 3,
  UNRECOGNIZED = -1,
}

export function stateEnumFromJSON(object: any): StateEnum {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return StateEnum.UNKNOWN;
    case 2:
    case "ON":
      return StateEnum.ON;
    case 3:
    case "OFF":
      return StateEnum.OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StateEnum.UNRECOGNIZED;
  }
}

export function stateEnumToJSON(object: StateEnum): number {
  switch (object) {
    case StateEnum.UNKNOWN:
      return 0;
    case StateEnum.ON:
      return 2;
    case StateEnum.OFF:
      return 3;
    case StateEnum.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Simple {
  name: string;
  state: StateEnum;
  states: StateEnum[];
  nullValue: NullValue;
  stateMap: { [key: string]: StateEnum };
}

export interface Simple_StateMapEntry {
  key: string;
  value: StateEnum;
}

function createBaseSimple(): Simple {
  return { name: "", state: 0, states: [], nullValue: 0, stateMap: {} };
}

export namespace Simple {
  export function encode(message: Simple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    writer.uint32(42).fork();
    for (const v of message.states) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.nullValue !== 0) {
      writer.uint32(48).int32(message.nullValue);
    }
    Object.entries(message.stateMap).forEach(([key, value]) => {
      Simple_StateMapEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Simple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag === 40) {
            message.states.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.states.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.nullValue = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Simple_StateMapEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.stateMap[entry7.key] = entry7.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Simple {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      state: isSet(object.state) ? stateEnumFromJSON(object.state) : 0,
      states: Array.isArray(object?.states) ? object.states.map((e: any) => stateEnumFromJSON(e)) : [],
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : 0,
      stateMap: isObject(object.stateMap)
        ? Object.entries(object.stateMap).reduce<{ [key: string]: StateEnum }>((acc, [key, value]) => {
          acc[key] = stateEnumFromJSON(value);
          return acc;
        }, {})
        : {},
    };
  }

  export function toJSON(message: Simple): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.state !== undefined && (obj.state = stateEnumToJSON(message.state));
    if (message.states) {
      obj.states = message.states.map((e) => stateEnumToJSON(e));
    } else {
      obj.states = [];
    }
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    obj.stateMap = {};
    if (message.stateMap) {
      Object.entries(message.stateMap).forEach(([k, v]) => {
        obj.stateMap[k] = stateEnumToJSON(v);
      });
    }
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Simple>, I>>(base?: I): Simple {
    return Simple.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Simple>, I>>(object: I): Simple {
    const message = createBaseSimple();
    message.name = object.name ?? "";
    message.state = object.state ?? 0;
    message.states = object.states?.map((e) => e) || [];
    message.nullValue = object.nullValue ?? 0;
    message.stateMap = Object.entries(object.stateMap ?? {}).reduce<{ [key: string]: StateEnum }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as StateEnum;
        }
        return acc;
      },
      {},
    );
    return message;
  }
}

function createBaseSimple_StateMapEntry(): Simple_StateMapEntry {
  return { key: "", value: 0 };
}

export namespace Simple_StateMapEntry {
  export function encode(message: Simple_StateMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Simple_StateMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimple_StateMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Simple_StateMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? stateEnumFromJSON(object.value) : 0,
    };
  }

  export function toJSON(message: Simple_StateMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = stateEnumToJSON(message.value));
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Simple_StateMapEntry>, I>>(base?: I): Simple_StateMapEntry {
    return Simple_StateMapEntry.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Simple_StateMapEntry>, I>>(object: I): Simple_StateMapEntry {
    const message = createBaseSimple_StateMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}