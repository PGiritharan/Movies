import {history} from '../routers/AppRouter';
export const login = (jwt) => ({
    type: 'LOGIN',
    jwt
});

export const startLogin = ()=>{
    history.push('/login');
}

export const logout = () =>({
    type: 'LOGOUT'
})

export const startLogout = () =>{
    sessionStorage.removeItem('token');
    window.location.href='/' 
}