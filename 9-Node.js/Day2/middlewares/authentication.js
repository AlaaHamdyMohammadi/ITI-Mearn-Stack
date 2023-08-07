const jwt = require('jsonwebtoken');

//promisify: take a function and return promise function
const {promisify} = require('util');

async function authentication(req, res, next){
    if(!req.header.authorization){
        return res.status(401).json({status: 'Faild'})
    }
    //Verify a token : (header, Secret)
    //jwt.verify(req.header.authorization, process.env.SECRET);
    try{

        const decode = await promisify(jwt.verify(req.header.authorization, process.env.SECRET));
        //req.id = decode.id
        console.log(decode);
    }catch(err){
        return res.status(401).json({ status: "Faild" });
    }
    next();
}

module.exports = authentication;

