import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import { useState, useContext } from "react"
import FormInput from "../form-input/form-input"
import Button from "../buttom/button"
import './sign-in-form.styles.scss'

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: "",
    password: "",
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-passwor': alert('incorrect password for email');
                    break
                case 'auth/user-not-found': alert('no user associated with this email');
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">

                    <Button type="submit">SIGN IN</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>GOOGLE SIGN-IN</Button>

                </div>
            </form>

        </div>
    )
}

export default SignInForm