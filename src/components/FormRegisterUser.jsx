import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';
import styled from 'styled-components'
import FormInput from './leaf-components/FormInput';
import Button from './leaf-components/Button';

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
    const [ input, setInput ] = useState( [] )

    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser( input )
    }

    return ( 
        <Form onSubmit={ handleSubmit }>
            <h1>Signup</h1>

            <div>
                <label htmlFor="Email">Email address</label>
                <FormInput type="email" name="Email" />
            </div>

            <div>
                <label htmlFor="Name">Display name</label>
                <FormInput type="text" name="Name" placeholder="'John son of Jane'" />
            </div>

            <div>
                <label htmlFor="Username">Username</label>
                <FormInput type="text" name="Username" placeholder="'@jdoe'" />
            </div>

            <div>
                <label htmlFor="Password">Password</label>
                <FormInput type="password" name="Password" />
            </div>

            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default FormRegisterUser; 