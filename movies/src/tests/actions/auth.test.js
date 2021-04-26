import { login, logout } from '../../actions/auth'

test ('should generate login action object', ()=>{
    const jwt = 'abc123';
    const action = login(jwt);
    expect(action).toEqual({
        type: 'LOGIN',
        jwt:'abc123'
    });
});

test ('should clear generate logout action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});