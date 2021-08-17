import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.scss'

import LoadingSpinner from '../components/LoadingSpinner/'

const utils = require('../utils')

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpwd: '',
            redirect: false,
            loading: false
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentWillMount() {
        if (utils.getCookie('userData')) {
            this.setState({ redirect: true })
        }
    }

    async handleRegister() {
        if (this.state.username && this.state.email && this.state.password && this.state.confirmpwd) {
            if (this.state.password === this.state.confirmpwd) {
                this.setState({ loading: true })
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
                const response = await fetch(`${getServerUrl().REACT_APP_API_URL}/createUser`, settings)
                const registerStatus = await response.json()
                
                if (!registerStatus.success) {
                    console.log('error when registering')
                } else {
                    console.log(registerStatus.success)
                    this.handleGoBack()
                }
                this.setState({ loading: false })
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
            <div className="Register">
                <h1>Register</h1>
                <div className="form">
                    <div className="inputs">
                        <div className="form__group field">
                            <input className="form__field" type="text" id="username" name="username" placeholder="John Doe" onChange={this.onChange}/>
                            <label className="form__label" htmlFor="username">username</label>
                        </div>
                        <div className="form__group field">
                            <input className="form__field" type="email" id="email" name="email" placeholder="test@example.com" onChange={this.onChange}/>
                            <label className="form__label" htmlFor="email">email</label>
                        </div>
                        <div className="form__group field">
                            <input className="form__field" type="password" id="password" name="password" placeholder="******" onChange={this.onChange}/>
                            <label className="form__label" htmlFor="password">password</label>
                        </div>
                        <div className="form__group field">
                            <input className="form__field" type="password" id="confirmpwd" name="confirmpwd" placeholder="******" onChange={this.onChange}/>
                            <label className="form__label" htmlFor="confirmpwd">confirm password</label>
                        </div>
                    </div>
                    <button className="button" id="login" type="submit" onClick={this.handleRegister}>
                        <span>Register</span>
                    </button>
                    <button className="button" id="register" onClick={this.handleGoBack}>
                        <span>Back</span>
                    </button>
                    {this.state.loading && <LoadingSpinner />}
                </div>
            </div>
        )
    }

}

export default Register