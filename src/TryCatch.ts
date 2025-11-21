import { Request, Response, NextFunction } from "express";

export class HandleTryCatch {
    static wrap(
        asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<any>
    ) {

        if (typeof asyncFn !== "function") {
            throw new TypeError("HandleTryCatch.wrap requires a function");
        }

        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = asyncFn(req, res, next);
                if (!(result instanceof Promise)) {
                    console.warn("WARNING: Function passed to HandleTryCatch.wrap is not async");
                }
                await result;
            } catch (error) {
                console.error("Error caught:", error);
                next(error);
            }
        };
    }
}
