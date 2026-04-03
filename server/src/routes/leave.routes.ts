import { Router } from "express";
import { applyLeaveRequest, getLeaveRequest } from "../controllers/leave.controllers";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const leaveRouter = Router();

leaveRouter.route("/")
    .post(isLoggedInUser, getLeaveRequest);

leaveRouter.route("/apply")
    .post(isLoggedInUser, applyLeaveRequest);

export default leaveRouter;