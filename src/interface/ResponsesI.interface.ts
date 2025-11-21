export interface IResponseOptions {
    statusCode: number;     
    success: boolean;        
    message: string;        
    data?: any;             
    [key: string]: any;     
}
