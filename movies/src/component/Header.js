import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { startLogin, startLogout } from '../actions/auth'

export const Header=(props)=>{
    const history = useHistory();
    const [isHeader, setHeader] = useState(true);
    const isLoggedIn = useSelector((state)=>!!state.auth.uid);

    useEffect(()=>{
        return history.listen((location) => { 
            if(location.pathname==='/login'){
                setHeader(false)
            }else{
                setHeader(true)
            }
         })
    },[history]);

    return (isHeader ? (<header className='header'>
        <div className='content-container'>
            <div className='header__content'>
                <Link className='header__title' to='/'>
                    <h1>Movies</h1>
                </Link>
                {
                    isLoggedIn ? (
                        <button className="button button--link" onClick={startLogout}>Logout</button>
                    ) : (
                        <button className="button button--link" onClick={startLogin}>Login</button>
                    )
                }
            </div>
        </div>
    </header>): null)
}

export default Header;
