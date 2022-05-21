import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';
import styled from 'styled-components'
import FormInput from './leaf-components/FormInput';
import Button from './leaf-components/Button';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 3rem auto;

    & div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    & div label {
        font-size: .9rem;
        font-weight: bold;
        opacity: .67;
    }
`


function FormRegisterUser( { registerUser } ) {
    const [ user, setUser ] = useState({ email: "e", password: "p"} );
    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                //Sign in
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
        
        console.log(user.email, user.password)
    }

    return ( 
        <Form onSubmit={ handleSubmit }>
            <h1>Signup</h1>

            <div>
                <label htmlFor="email">Email address</label>
                <FormInput type="email" name="email" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <FormInput type="password" name="password" onChange={handleChange}/>
            </div>

            <Button type="submit">Submit</Button>
            {user.email}
            {user.password}
        </Form>
    );
}

export default FormRegisterUser; 