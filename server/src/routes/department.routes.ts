import { Router } from "express";
import { addDepartment, getAllDepartment } from "../controllers/department.controller";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const departmentRouter = Router();

departmentRouter.route("/")
    .get(isLoggedInUser, getAllDepartment)
    .post(isLoggedInUser, addDepartment)

export default departmentRouter;