const express=require('express');
const router=express.Router();

//=============auth===========//
const auth =require('./middleware/auth');

//==========import controllers====
const userRegistration=require('./controller/user/user_registration');
const getSingleUser=require('./controller/user/getSingleUser');
const addMoney=require('./controller/user/addMoney');
const getAllUser=require('./controller/user/getAllUser');
const transection=require('./controller/user/transection');
const getAllTransction=require('./controller/user/getAllTransction');
const userLogin=require('./controller/user/userlogin');
const adminLogin=require('./controller/user/adminlogin')
const adminRegistration=require('./controller/user/adminreg')
//===User Registration=======//
router.post('/user',userRegistration);
router.get('/user',[auth],getSingleUser);
router.put('/amount',[auth],addMoney)
router.get('/alluser/:phone?',getAllUser)
router.put('/transection',[auth],transection);
router.get('/transection',[auth],getAllTransction);
router.post('/userlogin',userLogin);
router.post('/adminlogin',adminLogin);
router.post('/adminregistration',adminRegistration);

module.exports=router;