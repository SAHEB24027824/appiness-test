const jwt = require('jsonwebtoken');

 function auth(req,res,next) {
    try {
        if (req.header('x-auth-token') == null)
            return res.status(401).send('no token');
        const token = req.header('x-auth-token');
        if(!token) return res.status(401).send('Access Denied')
        //degital signature should not declare here it's a security issue
        const user = jwt.verify(token,'paydemo');
            req.user = user;
        next();
      
    }
    catch (error) {
        res.status(400).send('Invalid Token')
    }

}
module.exports=auth;