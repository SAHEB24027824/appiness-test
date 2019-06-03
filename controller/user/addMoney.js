const User=require('../../model/user')




async function addMoney(req,res){
    try{
     let id=req.user.userid 
   let user=await User.updateOne({_id:id},{$set:{amount:req.body.amount}})
   if(!user) return res.status(400).send(false);
   res.status(200).send(true);
   
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=addMoney;