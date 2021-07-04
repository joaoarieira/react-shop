import React, { useState } from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, createUserProfileDocument } from '../../firebase';

import './styles.scss';

function SignUp() {
    const [userInput, setUserInput] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );

    async function handleSubmit(event) {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userInput;

        if (password !== confirmPassword) {
            alert("senhas informadas não são iguais");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, { displayName });

            setUserInput({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log('[POST]:', error);
        }
    }

    function handleChange(event) {
        const { value, name } = event.target;
        setUserInput({ ...userInput, [name]: value });
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    value={userInput.email}
                    label="Email"
                    required
                />
                <FormInput
                    type="text"
                    name="displayName"
                    handleChange={handleChange}
                    value={userInput.displayName}
                    label="Display Name"
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
                <FormInput
                    type="password"
                    name="confirmPassword"
                    handleChange={handleChange}
                    value={userInput.confirmPassword}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    );
}

export default SignUp;