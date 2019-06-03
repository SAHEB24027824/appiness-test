const User=require('../../model/user')


async function getSingleUser(req,res){
    try{
     let id=req.user.userid   
   let user=await User.findOne({_id:id})
   if(!user) return res.status(404).send(false);
    res.status(200).send(user);
   
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=getSingleUser;