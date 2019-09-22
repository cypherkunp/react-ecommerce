import React, { Component } from 'react';
import FormInput from './../form-input/form-input.componet';
import CustomButton from './../custom-button/custom-button.component';

import './sign-in.styles.scss';

import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends Component {
    state = { password: '', email: '' };

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.name);

        this.setState({ email: '', password: '' });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="sign-in-header">I already have an account</h2>
                <span className="sign-in-message"> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <div className="form-buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
