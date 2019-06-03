const User=require('../../model/user');
const bcrypt=require('bcrypt');


async function userRegistration(req,res){
    try{
    const newUser=new User({
        name:req.body.name,
        phone:req.body.phone,
        password:req.body.password

    });
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(newUser.password,salt)
    newUser.password=hash;

    const saveUser=await newUser.save()
    if(!saveUser)return res.status(400).send(false);

    let token=saveUser.generateToken();
     res.status(200).send({token:token});
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports=userRegistration;