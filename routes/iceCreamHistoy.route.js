const express=require("express")

const {auth}=require("../middleware/auth.middleware")
const { iceCreamHistoryModel } = require("../model/iceCreamHistory.model")

const iceCreamHistoryRouter=express.Router()
//iceCreamRouter.use(auth)

iceCreamHistoryRouter.post("/post",async(req,res)=>{
    try{
        const history=new iceCreamHistoryModel(req.body)
        await history.save()
        res.json({msg:"new history added",history:req.body})
    }catch(err){
        res.json({error:err.message})
    }
})

iceCreamHistoryRouter.get("/",async(req,res)=>{
    try{
        const iceCream=await iceCreamHistoryModel.find()
        res.send(iceCream)
    }catch(err){
        res.json({error:err.message})
    }
})


// iceCreamRouter.patch("/update/:ID", async (req, res) => {
//     const { ID } = req.params;
//     console.log(ID)
//     try {
//         // Remove the unnecessary findOne operation
//         await iceCreamModel.findByIdAndUpdate({ _id: ID }, req.body);
//         res.json({ msg: `${ID} has been updated` });
//     } catch (err) {

//         res.json({ error: err.message });
//     }
// });

module.exports={
    iceCreamHistoryRouter
}