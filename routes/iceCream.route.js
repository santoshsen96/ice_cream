const express=require("express")
const {iceCreamModel}=require('../model/iceCream.model')
const {auth}=require("../middleware/auth.middleware")

const iceCreamRouter=express.Router()
//iceCreamRouter.use(auth)

// iceCreamRouter.post("/create",async(req,res)=>{
//     try{
//         const note=new NoteModel(req.body)
//         await note.save()
//         res.json({msg:"new note added",note:req.body})
//     }catch(err){
//         res.json({error:err.message})
//     }
// })

iceCreamRouter.get("/",async(req,res)=>{
    try{
        const iceCream=await iceCreamModel.find()
        res.send(iceCream)
    }catch(err){
        res.json({error:err.message})
    }
})
module.exports={
    iceCreamRouter
}