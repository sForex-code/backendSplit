import express from 'express'
import { addTask, allTask, deleteTask, updateTask } from '../controller/usertasj.js'
import { isAuth } from '../middlewares/auth.js'

const router =express.Router()

router.post("/addtask",isAuth,addTask)
router.get("/all",isAuth,allTask)
router.route("/:id").put(isAuth,updateTask).delete(isAuth,deleteTask)


export default router