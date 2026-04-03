import { Router } from "express";
import { getDashboardCardData } from "../controllers/dashboard.controllers";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const dashboardCardRouter = Router();

dashboardCardRouter.route("/")
    .post(isLoggedInUser, getDashboardCardData)

export default dashboardCardRouter;