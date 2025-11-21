import { Request, Response, NextFunction } from "express";
import { IResponseOptions } from "./interface/ResponsesI.interface";
export declare function asyncHandler(asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<any>): (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare function apiResponse(res: Response, options: IResponseOptions): Response<any, Record<string, any>>;
//# sourceMappingURL=index.d.ts.map