import express from "express";
import { login, logout, register, userData} from "../controller/userControler.js";
import { isAuth } from "../middlewares/auth.js";

const router =express.Router()

router.post("/login",login),
router.post("/register",register)
router.get("/me",isAuth,userData)
router.get("/logout",logout)

export default router