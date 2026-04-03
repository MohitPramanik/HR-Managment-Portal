import { Router } from "express";
import { getHolidays, upComingHolidays } from "../controllers/holiday.controller";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const holidayRouter = Router();

holidayRouter.route("/")
    .get(isLoggedInUser, getHolidays);

holidayRouter.route("/upcoming")
    .get(isLoggedInUser, upComingHolidays);

export default holidayRouter;

