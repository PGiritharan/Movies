import api from './API';
export const authenticate = async (uri,param)=>{
    const auth = await api.post(uri,param);
    return auth;
}