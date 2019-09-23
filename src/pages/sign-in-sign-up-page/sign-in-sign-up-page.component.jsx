import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from './../../components/sign-up/sign-up.component';

import './sign-in-sign-up-page.styles.scss';

const SignInSignUpPage = () => {
    return (
        <div className="sign-in-sign-up">
            <div className="sign-in">
                <h1>Sign In</h1>
                <SignIn></SignIn>
            </div>
            <div className="sign-up">
                <h1>Sign Up</h1>
                <SignUp></SignUp>
            </div>
        </div>
    );
};

export default SignInSignUpPage;
