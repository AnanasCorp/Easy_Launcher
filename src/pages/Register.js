import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpwd: '',
            redirect: false
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentWillMount() {
        if (sessionStorage.getItem('userData')) {
            this.setState({ redirect: true })
        }
    }

    async handleRegister() {
        if (this.state.username && this.state.email && this.state.password && this.state.confirmpwd) {
            if (this.state.password === this.state.confirmpwd) {
                const settings = {
                    method: 'POST',
                    headers: {
                        mode: 'no-cors',
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        mail: this.state.email,
                        pass: this.state.password,
                        username: this.state.username
                    })
                };
                const response = await fetch('http://localhost:5000/createUser', settings)
                const registerStatus = await response.json()
                
                if (!registerStatus.success) {
                    console.log('error when registering')
                } else {
                    console.log(registerStatus.success)
                    this.handleGoBack()
                }
            }
        }
    }

    handleGoBack() {
        this.props.history.push('/')
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect to={'/'}/>)
        }

        return (
            <div className="register">
                <label htmlFor="username">username</label>
                <input type="text" id="username" name="username" placeholder="John Doe" onChange={this.onChange}/>
                <br/>
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" placeholder="test@example.com" onChange={this.onChange}/>
                <br/>
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" placeholder="******" onChange={this.onChange}/>
                <br/>
                <label htmlFor="confirmpwd">confirm password</label>
                <input type="password" id="confirmpwd" name="confirmpwd" placeholder="******" onChange={this.onChange}/>
                <br/>
                <button id="login" type="submit" onClick={this.handleRegister}>Register</button>
                <button id="register" onClick={this.handleGoBack}>Back</button>
            </div>
        )
    }

}

export default Register