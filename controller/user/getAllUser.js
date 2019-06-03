const User=require('../../model/user')


async function getAllUser(req,res){
    try{
     if(req.params.phone){
         let phone=req.params.phone
         let users=await User.find({phone:new RegExp(phone,'i')})
         if(users.length<0)return res.status(404).send(false);
         res.status(200).send(users)
     }
     else{
        let users=await User.find()
        if(users.length<0)return res.status(404).send(false);
        res.status(200).send(users)
     }
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=getAllUser;