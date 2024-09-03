// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file payment.proto (package api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PaymentIntentCreateRequest, PaymentIntentCreateResponse } from "./payment_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.PaymentIntentService
 */
export const PaymentIntentService = {
  typeName: "api.PaymentIntentService",
  methods: {
    /**
     * @generated from rpc api.PaymentIntentService.Create
     */
    create: {
      name: "Create",
      I: PaymentIntentCreateRequest,
      O: PaymentIntentCreateResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

