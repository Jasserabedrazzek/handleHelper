import { Response } from "express";
import { IResponseOptions } from "./interface/ResponsesI.interface";
export declare class HandleResponse {
    static send(res: Response, options: IResponseOptions): Response<any, Record<string, any>>;
}
//# sourceMappingURL=Responses.d.ts.map