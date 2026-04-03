import { Router } from "express";
import { addEmployee, getAllEmployees } from "../controllers/employee.controller";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const employeeRouter: Router = Router();

employeeRouter.route("/")
    .get(isLoggedInUser, getAllEmployees)
    .post(isLoggedInUser, addEmployee);

export default employeeRouter;