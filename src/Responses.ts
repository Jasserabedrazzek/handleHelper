import { Response } from "express";
import { IResponseOptions } from "./interface/ResponsesI.interface";

export class HandleResponse {
    static send(res: Response, options: IResponseOptions) {

        if (!res || typeof res.status !== "function" || typeof res.json !== "function") {
            throw new Error("Invalid Express Response object");
        }

        const {
            statusCode = 200,
            success = true,
            message = "",
            data = null,
            ...rest
        } = options;

        if (typeof statusCode !== "number") {
            throw new TypeError("statusCode must be a number");
        }
        if (typeof success !== "boolean") {
            throw new TypeError("success must be a boolean");
        }
        if (typeof message !== "string") {
            throw new TypeError("message must be a string");
        }

        let safeData;
        try {
            safeData = JSON.parse(JSON.stringify(data));
        } catch (err) {
            console.warn("Data contains circular references, sending null instead");
            safeData = null;
        }

        return res.status(statusCode).json({
            success,
            message,
            data: safeData,
            ...rest
        });
    }
}
