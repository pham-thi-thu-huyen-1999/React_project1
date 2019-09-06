import React from 'react';
import Axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
            userNameError: "",
            emailError: "",
            passwordError: ""
        }
    }
    OnRegister = (event) => {
        var target = event.target;
        var value = target.value
        var name = target.name
        this.setState({
            [name]: value
        })
    }
    validSignup = () => {
        var emailError = "email is empty"
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email'
        }
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        return true
    }
    submitRegister = async (event) => {
        event.preventDefault();
        await Axios.post("/sign-up", {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        })
            .then(data => {
                console.log(data)
                this.props.history.replace("/sign-in")

            })

        console.log(this.state)

    }
    render() {
        return (
            <div className="col-md-8">
                <label><h1>Register</h1></label>
                <form onSubmit={this.submitRegister}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control"
                            id="username"
                            onChange={this.OnRegister}
                            value={this.state.userName}
                            name="userName"
                            placeholder="Enter Username" />
                    </div>
                    <div>{this.state.userNameError}</div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"
                            onChange={this.OnRegister}
                            value={this.state.email}
                            name="email"
                            id="email"
                            placeholder="Enter email" />
                    </div>
                    <div>{this.state.emailError}</div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control"
                            onChange={this.OnRegister}
                            value={this.state.password}
                            name="password"
                            id="password"
                            placeholder="Password" />
                    </div>
                    <div>{this.state.passwordErrors}</div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

export default Register

