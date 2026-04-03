import { Router } from "express";
import { addNewJob, getAllJobs } from "../controllers/job.controller";
import { isLoggedInUser } from "../middlewares/auth.middleware";

const jobRouter = Router();

jobRouter.route("/")
    .get(isLoggedInUser, getAllJobs)
    .post(isLoggedInUser, addNewJob);


export default jobRouter;