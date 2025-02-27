import {Request, Response, NextFunction, RequestHandler} from "express";
import {body, validationResult} from "express-validator";


export const validateTitleMiddleware: RequestHandler = async (req, res, next) => {
    await Promise.all([
        body('title').trim().isLength({ min: 3, max: 10 }).
        withMessage('Title length should be from 3 to 10 sumbols').run(req),
    ]);
    next();
};

export const imputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }else{
        next()
    }
}