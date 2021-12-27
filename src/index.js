import express from "express"
import morgan from "morgan"

import globalRouter from "./routers/gloablRouter"
import videoRouter from "./routers/videoRouter"
import userRouter from "./routers/userRouter"


const app = express()
app.use(morgan("dev"))
// app.use(morgan("combined"))

app.use("/", globalRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)


const handleListening = () => console.log("Server Start")
app.listen(80 , handleListening)
