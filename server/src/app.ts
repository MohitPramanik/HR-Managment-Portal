import express, {Express, Request, Response} from "express";
import router from "./routes";
import { errorHandler } from "./utils/ExpressError";
import { config } from "dotenv";
import { dbConnect } from "./utils/db";
import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
    origin: "https://vertex-fe-loll.onrender.com/"
}

config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

dbConnect();

app.use("/api", router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})