import React, { Component } from 'react'

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
            console.log('TODO: login')
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
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