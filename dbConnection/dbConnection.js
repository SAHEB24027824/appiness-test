const mongoose=require('mongoose');

async function database(){
    try{
        const db_string='mongodb://localhost/demopay';
        const result=await mongoose.connect(db_string,{useNewUrlParser:true,useCreateIndex: true});
        if(result)console.log('Database Connected')
        return;
    }
    catch(error){
        consol.log(error.message)
    }
}

module.exports={
    database:database
}