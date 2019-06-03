const User=require('../../model/user');
const bcrypt=require('bcrypt');


async function userLogin(req,res){

        try{
         const user= await User.findOne({phone:req.body.phone});
        if(!user) return res.status(400).send({success:false,result:'Invalid Phone No or Password'});
       
        const result=await bcrypt.compare(req.body.password,user.password);    
        if(!result)return res.status(400).send({success:false,result:'Invalid Phone No or Password'});
    
        const token=user.generateToken();
    
        return res.header('x-auth-token',token).status(200).send({token:token});
    
    
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    
}

module.exports=userLogin;