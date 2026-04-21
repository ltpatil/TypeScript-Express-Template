import { Request, Response } from "express";
import fs from 'fs/promises';
import { NotFoundError } from "../errors/app.error";


export async  function readFileHandler (req : Request, res : Response){
    try {
        await fs.readFile('dumb');
        res.status(200).json({
            success : true,
            message : "FILE READ SUCCESSFULLY !"
        })
    } catch (error) {
        throw new NotFoundError("FILE NOT FOUND !!");
    }
}
