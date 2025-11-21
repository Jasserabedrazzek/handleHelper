"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleTryCatch = void 0;
class HandleTryCatch {
    static wrap(asyncFn) {
        if (typeof asyncFn !== "function") {
            throw new TypeError("HandleTryCatch.wrap requires a function");
        }
        return async (req, res, next) => {
            try {
                const result = asyncFn(req, res, next);
                if (!(result instanceof Promise)) {
                    console.warn("WARNING: Function passed to HandleTryCatch.wrap is not async");
                }
                await result;
            }
            catch (error) {
                console.error("Error caught:", error);
                next(error);
            }
        };
    }
}
exports.HandleTryCatch = HandleTryCatch;
