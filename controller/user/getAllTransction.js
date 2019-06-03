const Transection = require('../../model/transection');
const User=require('../../model/user');



async function getAllTransction(req,res){
    try{
    let id=req.user.userid   
   let details=await Transection.find({unique:id})
console.log(details)
   if(details.length<0) return res.status(404).send(false);
    res.status(200).send(details);
  
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=getAllTransction;