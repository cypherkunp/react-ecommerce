import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.componet';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        label="Name"
                        value={displayName}
                        onChange={this.handleInputChange}
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleInputChange}
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
