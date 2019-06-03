const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema;

const userSchema=new Schema({
name:{
    type:String
},
    phone:{
        type:String
    },
    password:{
        type:String
    },
    amount:{
        type:Number,
        default:0
    },
    isUser:{
        type:Boolean,
        default:true
    }
}) 

userSchema.methods.generateToken=function(){
    //degital signature should not declare here it's a security issue
let token= jwt.sign({userid:this._id,isUser:true},'paydemo');
return token;
}

userSchema.index({phone:'text'})

const User=mongoose.model('User',userSchema);

module.exports=User;