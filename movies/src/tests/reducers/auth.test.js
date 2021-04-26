import authReucer from '../../reducers/auth';

test ('should set uid for login', ()=>{
    const action = {
        type: 'LOGIN',
        jwt: 'abc123'
    };
    const state = authReucer({},action);
    expect(state.uid).toBe(action.jwt);
});

test ('should clear uid for logout', ()=>{
    const action = {
        type: 'LOGOUT'
    };
    const state = authReucer({uid:'anything'},action);
    expect(state).toEqual({});
});