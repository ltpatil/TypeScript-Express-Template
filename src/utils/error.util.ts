import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/app.error"

export const AppErrorHandler = (err : AppError, req: Request, res: Response, next : NextFunction) =>{
        console.log(err);
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
}