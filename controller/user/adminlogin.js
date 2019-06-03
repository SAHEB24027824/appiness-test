const Admin=require('../../model/admin');
const bcrypt=require('bcrypt');

async function adminLogin(req,res){

        try{
         const admin= await Admin.findOne({phone:req.body.phone});
        if(!admin) return res.status(400).send(false);
       
        const result=await bcrypt.compare(req.body.password,admin.password);    
        if(!result)return res.status(400).send(false);
    

    
        return res.status(200).send(true);
    
    
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    
}

module.exports=adminLogin;

