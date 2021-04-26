import axios from 'axios';

export default class API {
    static async get(path){
        return await axios.get(path).then(response=>response.data)
    }
    static async post(path,param){
        return await axios.post(path,param).then(response=>response.data);
    }
}