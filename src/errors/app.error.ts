export interface AppError extends Error{
    statusCode : number;

}

export class InternalServerError implements AppError{
    statusCode : number;
    name : string;
    message: string; 
    constructor(message : string){
        this.statusCode = 500;
        this.name = "Internal Server Error";
        this.message = message;

    }
}

export class NotFoundError implements AppError{
    statusCode : number;
    name : string;
    message: string; 
    constructor(message : string){
        this.statusCode = 404;
        this.name = "Not Found";
        this.message = message;

    }
}


export class BadRequest implements AppError{
    statusCode : number;
    name : string;
    message: string; 
    constructor(message : string){
        this.statusCode = 404;
        this.name = "BadRequest";
        this.message = message;

    }
}

export class UnImplemented implements AppError{
    statusCode : number;
    name : string;
    message: string; 
    constructor(message : string){
        this.statusCode = 501;
        this.name = "Resource UnImplemented";
        this.message = message;

    }
}