const Admin=require('../../model/admin');
const bcrypt=require('bcrypt');


async function adminRegistration(req,res){
    try{
    const newUser=new Admin({
        phone:req.body.phone,
        password:req.body.password

    });
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(newUser.password,salt)
    newUser.password=hash;

    const saveUser=await newUser.save()
    if(!saveUser)return res.status(400).send(false);
     res.status(200).send(true);
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=adminRegistration;