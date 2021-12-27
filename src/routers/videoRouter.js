import express from "express"

import { watach } from "../controllers/videoController";

const videoRouter  = express.Router()

videoRouter.get("/watch", watach)

export default videoRouter