const jwt = require('jsonwebtoken');

const generateAuthToken = function() {
    const token = jwt.sign({ _id: this.username },process.env.JWT_SECRET);
    return token;
}

class User{
    constructor(){
        this.username= '';
        this.generateAuthToken = generateAuthToken.bind(this)
        this.token = '';
    }
    login = function(username,password){
        this.username = username;
        if(username==="system" && password==="System@123"){
           return this.generateAuthToken();
        }
        return {message:'Unauthorized user, Please contact admin'}
    }

    setToken(token){
        this.token=token
    }

    validateUser(jwt){
        return jwt._id==="system" && this.token===jwt.token;
    }
}

module.exports = new User;
