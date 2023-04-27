import { useState} from "react";
import './sign-in.styles.scss'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password} = formFields

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handeSubmit = async (event) => {
        event.preventDefault();

        // check if user is authenticatied

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        }  catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect login or password')
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break
                default:
                    console.log(error)
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handeSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password}/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
