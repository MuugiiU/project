import { Request,Response } from "express";
import User from "../models/User"

export const getAllUsers =async (req:Request,res:Response) => {
    try {
        const users = await User.find()
        if(!users){
            return res.status(201).json({ message:"no users"})
        }
        res.status(200).json({message:"found users",users})
    } catch(error: any){
        res.status(400).json({
            message:"error users",
            error: error.message,
        })
    }
    
}

export const getUser = async (req: Request, res: Response) => {
    try{
        const {id}= req.params
        console.log(req.params)
        const user = await User.findById({id})
        res.status(200).json({success:true, user})
    }catch(error:any){
        console.log("error",error.message)
    }
}


export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body

    try{
        const user = await User.create(newUser)
        res.status(200).json({success:"user uusle", user})
    }catch(error:any){
        res.status(400).json({ message: "user uushed aldaa garla", error: error.message });
    }
}


export const updateUser = async (req: Request, res: Response) => {
    const {id}= req.params
    if (!id){
        res.status(400).json({message:`${id} not found`})
    }
    try{
        const user = await User.findByIdAndUpdate(id, req.body,{
            new:true,
        })
        if(!user){
            res.status(400).json({success:`${id}user not found`})
        }
        res.status(201).json({
            message:`${id} succesfully changed`,
            user
        })
    }catch(error){
        console.log("error",error)
    }
}


export const deleteUser = async (req: Request, res: Response) => {
    const {id}= req.params
    if (!id){
        res.status(400).json({message:`${id} user not found`})
    }
    try{
        const user = await User.findByIdAndDelete({id})
        res.status(201).json({message:`${id} user deleted`, user})
    }catch(error){
        console.log("error",error)
    }
}
