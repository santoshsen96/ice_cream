const express=require("express")
const {iceCreamModel}=require('../model/iceCream.model')
const {auth}=require("../middleware/auth.middleware")

const iceCreamRouter=express.Router()
//iceCreamRouter.use(auth)

iceCreamRouter.post("/add",async(req,res)=>{
    try{
        const note=new iceCreamModel(req.body)
        await note.save()
        res.json({msg:"new item added",note:req.body})
    }catch(err){
        res.json({error:err.message})
    }
})

iceCreamRouter.get("/",async(req,res)=>{
    try{
        const iceCream=await iceCreamModel.find()
        res.send(iceCream)
    }catch(err){
        res.json({error:err.message})
    }
})

iceCreamRouter.get("/:ID",async(req,res)=>{
    const {ID}=req.params
    try{
        const iceCream=await iceCreamModel.findById({_id:ID})
        res.send(iceCream)
    }catch(err){
        res.json({error:err.message})
    }
})

iceCreamRouter.patch("/update/:ID", async (req, res) => {
    const { ID } = req.params;
    console.log(ID)
    try {
        // Remove the unnecessary findOne operation
        await iceCreamModel.findByIdAndUpdate({ _id: ID }, req.body);
        res.json({ msg: `${ID} has been updated` });
    } catch (err) {

        res.json({ error: err.message });
    }
});

module.exports={
    iceCreamRouter
}