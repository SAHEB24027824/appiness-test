const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const adminSchema=new Schema({

    phone:{
        type:String
    },
    password:{
        type:String
    }
}) 


const Admin=mongoose.model('Admin',adminSchema);

module.exports=Admin;