import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import App from "../../App";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            email: '',
            password: '',
            errors: '',
            message: ""
        }
        this.onSubmitForm = this.onSubmitForm.bind(this)
    }
    OnHandelChange = (event) => {
        var target = event.target
        var value = target.value
        var name = target.name
        this.setState({
            [name]: value
        })
    }
    async onSubmitForm(event) {
        event.preventDefault();
        try {
            const { data } = await Axios.post('http://localhost:4000/api/user/sign-in', {
                email: this.state.email,
                password: this.state.password
            })
            //* test token/
            // const token = localStorage.getItem('userToken')
            // const { dataToken } = await Axios.post('http://localhost:4000/api/user/checkLogged', { token })
            // let isLogged = dataToken.status
            if (data.status) {
                this.setToken(data.token)
                this.setState({ isLogged: true })
                alert("login susccess")
            } else {
                this.setState({
                    message: "login fail"
                })
            }
        } catch (e) {
            console.log(event)
        }
    }
    setToken = (token) => {
        localStorage.setItem('userToken', token);
    }
    render() {
        const { message, isLogged } = this.state
        return (
            <div>
                <Switch>
                    {isLogged ?
                        <div><Redirect from='/sign-in' to='/' />
                            <Route path='/' component={App} /></div> : <div className="col-md-6">
                            <label><h1>Login</h1></label>
                            <form onSubmit={this.onSubmitForm}>
                                {message}
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control"
                                        onChange={event => this.OnHandelChange(event)}
                                        name='email'
                                        value={this.state.value}
                                        id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control"
                                        onChange={event => this.OnHandelChange(event)}
                                        name="password"
                                        value={this.state.value}
                                        id="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    }
                </Switch>
            </div>
        )
    }
}

export default Login

