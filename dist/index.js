"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = asyncHandler;
exports.apiResponse = apiResponse;
const TryCatch_1 = require("./TryCatch");
const Responses_1 = require("./Responses");
function asyncHandler(asyncFn) {
    return TryCatch_1.HandleTryCatch.wrap(asyncFn);
}
function apiResponse(res, options) {
    return Responses_1.HandleResponse.send(res, options);
}
