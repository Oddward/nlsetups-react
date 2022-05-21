import { useEffect, useState } from "react";
import styled from "styled-components";

const OutlinedInput = styled.div`
    & input {
        display: inline-block;
        border-radius: .5rem;
        border: 2px solid rgb( 0 0 0 / 25% );
        padding: 1rem;
        transition: all 300ms ease;
    }

    & input:hover {
        border-color: rgb( 0 0 0 / 35% );
        border-radius: .25rem;
    }
    & input:focused, & input:active {
        border-color: rgb( 0 0 0 / 67% );
        border-radius: .25rem;
    }
`

const TextBox = styled(OutlinedInput)`
    
`

const TextArea = styled(OutlinedInput)`
    height: 100%;
`

const EmailInput = styled(OutlinedInput)`

`

const PasswordInput = styled(OutlinedInput)`

`

const FileInput = styled.input`

`

function FormInput( { value = "", onChange, placeholder, name, type } ) {
    let output = ""
    // const [ input, setInput ] = useState( value )

    // const handleChange = (e) => {
    //     setInput(e.target.value);
    //     if (typeof onChange === "function") {
    //         onChange(e.target.value);
    //     }
    // }
    
    switch ( type ) {
        case 'text':
            return(
                <TextBox>
                    <input type="text" name={ name } placeholder={ placeholder } onChange={ onChange } />
                </TextBox>
            )
            // break;
        case 'textarea':
            return(
                <TextArea>
                    <input type="textarea" name={ name } placeholder={ placeholder } />
                </TextArea>
            )
            // break;
        case 'email':
            return(
                <EmailInput>
                    <input type="email" name={ name } placeholder={ placeholder } onChange={ onChange } />
                </EmailInput>
            )
            // break;
        case 'password':
            return(
                <PasswordInput>
                    <input type="password" name={ name } placeholder={ placeholder } onChange={ onChange }  />
                </PasswordInput>
            )
            // break;
    
        default:
            break;
    }
    
    return (
        <>
            { output }
        </>
    );
}

export default FormInput;