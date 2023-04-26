import express from "express"
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController"



const router = express.Router()

router.get('/',getAllUsers)
router.post('/',createUser)
router.get('/users/:id',getUser)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)


export default router