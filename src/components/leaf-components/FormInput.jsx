import styled from "styled-components";

const OutlinedInput = styled.input`
    display: inline-block;
    border-radius: .5rem;
    border: 2px solid rgb( 0 0 0 / 25% );
    padding: 1rem;
    transition: all 300ms ease;

    &:hover {
        border-color: rgb( 0 0 0 / 35% );
        border-radius: .25rem;
    }
    &:focused, &:active {
        border-color: rgb( 0 0 0 / 67% );
        border-radius: .25rem;
    }
`

const TextBox = styled(OutlinedInput).attrs( props => ({
    type: 'text',
}))`
    
`

const TextArea = styled(OutlinedInput).attrs( props => ({
    type: 'textarea',
}))`
    height: 100%;
`

const EmailInput = styled(OutlinedInput).attrs( props => ({
    type: 'email',
    placeholder: 'example@mail.com',
}))`

`

const PasswordInput = styled(OutlinedInput).attrs( props => ({
    type: 'password',
}))`

`

const FileInput = styled.input.attrs( props => ({
    type: 'file',
}))`

`

function FormInput( props ) {
    let output = ""

    switch ( props.type ) {
        case 'text':
            output = <TextBox type="text" placeholder={ props.placeholder } />
            break;
        case 'textarea':
            output = <TextArea type="textarea" placeholder={ props.placeholder } />
            break;
        case 'email':
            output = <EmailInput type="email" placeholder={ props.placeholder } />
            break;
        case 'password':
            output = <PasswordInput type="password" placeholder={ props.placeholder } />
            break;
    
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