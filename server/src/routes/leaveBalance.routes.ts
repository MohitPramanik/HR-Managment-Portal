import { Router } from "express";
import { getLeaveBalance, updateLeaveBalance } from "../controllers/leaveBalance.controllers";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const leaveBalanceRouter = Router();

leaveBalanceRouter.route("/")
    .post(isLoggedInUser, getLeaveBalance);

leaveBalanceRouter.route("/update")
    .post(isLoggedInUser, updateLeaveBalance);

export default leaveBalanceRouter;