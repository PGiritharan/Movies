import React from 'react';
import { connect } from 'react-redux';
import api from '../services/API';
import { login } from '../actions/auth';
import { authenticate } from '../services/auth';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }
    onUserNameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.username || !this.state.password) {
            this.setState(() => ({ error: 'Please provide username and password.' }));
        } else {
            this.setState(() => ({ error: '' }));
            try{
                const response = await authenticate('users/login', {
                    username: this.state.username,
                    password: this.state.password
                });
                if(response.error){
                    const error=response.error
                    return this.setState(() => ({ error }));
                }
                this.props.login(response.token);
                sessionStorage.setItem('token',response.token)
                window.location.href='/'
            }catch(error){
                console.log(error)
            }
        }
    }

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Movies.</h1>
                    <p className="box-layout__sub-title">Lets Relax together...</p>
                    <form className="form" onSubmit={this.onSubmit}>
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <input
                            type="text"
                            placeholder="Enter the username"
                            autoFocus
                            className="box-layout__text-input"
                            value={this.state.username}
                            onChange={this.onUserNameChange}
                        />
                        <input
                            type="password"
                            placeholder="Enter the password"
                            className="box-layout__text-input"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        <div>
                            <button className="button" >Login to Movies</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    login: (token) => dispatch(login(token))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
