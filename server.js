// All Module Imports
const {database}=require('./dbConnection/dbConnection');
const express=require('express');
 const bodyParser=require('body-parser')
 const router=require('./router');

 const cors=require('cors');



//server setup
const app=express();
const port=8080||process.env.PORT;
app.listen(port,()=>{console.log(`Server listening ${port}`)});


//DB Initilize 
database();


//======Middlewares=========
app.use(cors());
 app.use(bodyParser.json());
 app.use(router);


module.exports=app;

