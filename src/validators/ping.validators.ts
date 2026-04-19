import {z } from "zod";
import { NextFunction, Request, Response} from "express";

export const pingValidator = (bodyModel : z.ZodType) =>{
    return async (req : Request, res : Response, next : NextFunction) =>{
        try {
            await bodyModel.parseAsync(req.body);
            console.log("BODY VALIDATED !!");
            next();
        } catch (error) {
            res.status(422).json({
                message : "INVALID BODY",
                success : false,
                error : error
            })
        }
    }
}

