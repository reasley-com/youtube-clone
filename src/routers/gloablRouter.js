import express from "express"

import { watach } from "../controllers/videoController";

const globalRouter = express.Router()

globalRouter.get("/", watach)

export default globalRouter