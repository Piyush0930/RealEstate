import express from "express"
import { login, logOut, sighUp } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.get("/", (req, res) => {
  res.send("Auth API is running...");
})

authRouter.post("/signup",sighUp)
authRouter.post("/login",login)
authRouter.post("/logout",logOut)
export default authRouter