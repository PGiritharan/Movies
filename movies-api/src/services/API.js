const axios = require('axios');

class API {
    get = async (path)=>{
        return await axios.get(path).then(response=>response.data)
    }
    post=async (path,param)=>{
        return await axios.post(path,param).then(response=>response.data);
    }
}

module.exports = new API();
