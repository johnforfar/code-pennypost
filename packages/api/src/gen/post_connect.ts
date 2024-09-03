// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file post.proto (package api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PostCreateRequest, PostCreateResponse, PostGetPaginatedRequest, PostGetPaginatedResponse, PostGetRequest, PostGetResponse } from "./post_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.PostService
 */
export const PostService = {
  typeName: "api.PostService",
  methods: {
    /**
     * @generated from rpc api.PostService.Create
     */
    create: {
      name: "Create",
      I: PostCreateRequest,
      O: PostCreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.PostService.Get
     */
    get: {
      name: "Get",
      I: PostGetRequest,
      O: PostGetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.PostService.GetPaginated
     */
    getPaginated: {
      name: "GetPaginated",
      I: PostGetPaginatedRequest,
      O: PostGetPaginatedResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

