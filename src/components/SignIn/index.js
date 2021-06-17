import React, { useState } from 'react';

import './styles.scss';

import CustomButton from '../CustomButton';
import FormInput from '../FormInput';

import { signInWithGoogle } from '../../firebase';

function SignIn() {
    const [userInput, setUserInput] = useState({ email: '', password: '' })

    function handleSubmit(event) {
        event.preventDefault();
        setUserInput({ email: '', password: '' });
    }

    function handleChange(event) {
        const { value, name } = event.target;
        setUserInput({ ...userInput, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with yout e-mail and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    value={userInput.email}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    value={userInput.password}
                    label="Password"
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit">
                        SIGN IN
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;