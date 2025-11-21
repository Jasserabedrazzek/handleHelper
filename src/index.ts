import { Request, Response, NextFunction } from "express";
import { HandleTryCatch } from "./TryCatch";
import { HandleResponse } from "./Responses";
import { IResponseOptions } from "./interface/ResponsesI.interface";


export function asyncHandler(
    asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
    return HandleTryCatch.wrap(asyncFn);
}

export function apiResponse(res: Response, options: IResponseOptions) {
    return HandleResponse.send(res, options);
}