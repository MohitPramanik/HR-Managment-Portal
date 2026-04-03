import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler";

export const isLoggedInUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.replace("Bearer ", "");

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
})