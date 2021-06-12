import React, { useState } from 'react';

import './styles.scss';

import CustomButton from '../CustomButton';
import FormInput from '../FormInput';

function SignIn() {
    const [userInput, setUserInput] = useState({ email: '', password: '' })

    function handleSubmit(event) {
        event.preventDefault();
        setUserInput({ email: '', password: '' });
    }

    function handleChange(event) {
        const { value, name } = event.target;
        setUserInput({ [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with yout e-mail and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={userInput.email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={userInput.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />

                <CustomButton type="submit"> SIGN IN </CustomButton>

            </form>
        </div>
    );
}

export default SignIn;