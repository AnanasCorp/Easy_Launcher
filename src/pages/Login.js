import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async handleLogin() {
        if(this.state.email && this.state.password) {
            const settings = {
                method: 'POST',
                headers: {
                    mode: 'no-cors',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mail: this.state.email,
                    pass: this.state.password
                })
            };
            const response = await fetch('http://localhost:5000/loginUser', settings)
            const userData = await response.json()
            
            if (!userData.user) {
                console.log('error when logging in')
            } else {
                console.log(userData.user)
                sessionStorage.setItem('userData', JSON.stringify(userData.user))
                this.setState({ redirect: true })
            }
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect to={'/'}/>)
        }

        return (
            <div className="login">
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" placeholder="test@example.com" onChange={this.onChange}/>
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" onChange={this.onChange}/>
                <button id="submit" type="submit" onClick={this.handleLogin}>Submit</button>
            </div>
        )
    }
}

export default Login