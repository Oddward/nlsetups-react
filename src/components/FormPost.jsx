import {} from ''
import styled from 'styled-components'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';

// const FormContainer = styled.div`
//     padding: 1rem;
// `

const TwoColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
`

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

function FormPost( props ) {
    const [ details ] = useState( {} )
    
    return (
        <Form>
            <h1>{ props.title }</h1>
            <TwoColumnContainer>
                {/* File input | drag & drop // disable when editing post*/}
                <div>
                    <label htmlFor="Desc">Description <small>(optional)</small></label>
                    <FormInput type="text" name="Desc" placeholder="A little info on your setup" />
                </div>
            </TwoColumnContainer>
            <div>
                <label htmlFor="Launcher">Launcher</label>
                <FormInput type="text" name="Launcher" require/>
            </div>
            <div>
                <label htmlFor="Launcher">Wallpaper</label>
                <FormInput type="text" name="Launcher" require/>
            </div>
            <div>
                <label htmlFor="Icons">Icon packs</label>
                <FormInput type="text" name="Icons" placeholder="separate multiple with comma" />
            </div>
            <div>
                <label htmlFor="Widgets">Widgets</label>
                <FormInput type="text" name="Widgets" placeholder="separate multiple with comma" />
            </div>
            <div>
                <label htmlFor="Fonts">Fonts</label>
                <FormInput type="text" name="Fonts" placeholder="separate multiple with comma" />
            </div>
        </Form>
    );
}

export default FormPost;