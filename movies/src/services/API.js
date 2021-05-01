import axios from 'axios';
const basePath = 'http://localhost:3030/'
export default class API {
    static async get(path){
        return await axios.get(`${basePath}${path}`).then(response=>response.data)
    }
    static async post(path,param){
        return await axios.post(`${basePath}${path}`,param).then(response=>response.data);
    }
}