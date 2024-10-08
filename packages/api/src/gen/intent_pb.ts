// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file intent.proto (package api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.Intent
 */
export class Intent extends Message<Intent> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string status = 2;
   */
  status = "";

  /**
   * @generated from field: string client_secret = 3;
   */
  clientSecret = "";

  /**
   * @generated from field: string related_user = 4;
   */
  relatedUser = "";

  constructor(data?: PartialMessage<Intent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.Intent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "related_user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Intent {
    return new Intent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Intent {
    return new Intent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Intent {
    return new Intent().fromJsonString(jsonString, options);
  }

  static equals(a: Intent | PlainMessage<Intent> | undefined, b: Intent | PlainMessage<Intent> | undefined): boolean {
    return proto3.util.equals(Intent, a, b);
  }
}

/**
 * @generated from message api.IntentGetStatusRequest
 */
export class IntentGetStatusRequest extends Message<IntentGetStatusRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<IntentGetStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.IntentGetStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntentGetStatusRequest {
    return new IntentGetStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntentGetStatusRequest {
    return new IntentGetStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntentGetStatusRequest {
    return new IntentGetStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: IntentGetStatusRequest | PlainMessage<IntentGetStatusRequest> | undefined, b: IntentGetStatusRequest | PlainMessage<IntentGetStatusRequest> | undefined): boolean {
    return proto3.util.equals(IntentGetStatusRequest, a, b);
  }
}

/**
 * @generated from message api.IntentGetStatusResponse
 */
export class IntentGetStatusResponse extends Message<IntentGetStatusResponse> {
  /**
   * @generated from field: api.IntentGetStatusResponse.Result result = 1;
   */
  result = IntentGetStatusResponse_Result.OK;

  /**
   * @generated from field: string status = 2;
   */
  status = "";

  constructor(data?: PartialMessage<IntentGetStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.IntentGetStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(IntentGetStatusResponse_Result) },
    { no: 2, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntentGetStatusResponse {
    return new IntentGetStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntentGetStatusResponse {
    return new IntentGetStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntentGetStatusResponse {
    return new IntentGetStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: IntentGetStatusResponse | PlainMessage<IntentGetStatusResponse> | undefined, b: IntentGetStatusResponse | PlainMessage<IntentGetStatusResponse> | undefined): boolean {
    return proto3.util.equals(IntentGetStatusResponse, a, b);
  }
}

/**
 * @generated from enum api.IntentGetStatusResponse.Result
 */
export enum IntentGetStatusResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * @generated from enum value: INVALID_REQUEST = 1;
   */
  INVALID_REQUEST = 1,

  /**
   * @generated from enum value: UNKNOWN_ERROR = 2;
   */
  UNKNOWN_ERROR = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(IntentGetStatusResponse_Result)
proto3.util.setEnumType(IntentGetStatusResponse_Result, "api.IntentGetStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_REQUEST" },
  { no: 2, name: "UNKNOWN_ERROR" },
]);

