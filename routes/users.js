import express from "express";
import { findbyparams, register, statingpage, userData } from "../controller/userControler.js";

const router =express.Router()


router.get("/",statingpage)
router.post("/register",register)
router.get("/user/data",userData) 
router.get("/user/:id",findbyparams)


export default router