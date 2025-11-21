import { Request, Response, NextFunction } from "express";
export declare class HandleTryCatch {
    static wrap(asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<any>): (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=TryCatch.d.ts.map