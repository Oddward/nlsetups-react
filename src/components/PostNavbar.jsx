import { useState } from 'react'
import styled, { css } from 'styled-components'

const Nav = styled.nav`
    padding: 3rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
`

const StyledA = styled.a`
    font-size: .8rem;
    font-weight: 300;
    margin: 0 2rem;

    ${ props => props.selected && css`
        font-weight: bold;
    `}
`

const Searchbox = styled.input.attrs( props => ({
    type: 'text',
    placeholder: 'Search...'
}))`
    width: 10rem;
    width: 20ch;
    padding: 1rem 2rem;
    border: 1px solid rgba( 0, 0, 0, .34 );
    border-radius: 5px;

    &::placeholder {
        color: rgba( 0, 0, 0, .34 );
    };
    &:active, &:focus {
        border-color: navy;
    }
`

function PostNavbar( props ) {
    const { order, setOrder } = useState( false )

    return(
        <Nav>
            <div style={{display:'flex', gap: '2rem'}}>
                <StyledA href='#'>New</StyledA>
                <StyledA href='#'>Popular</StyledA>
            </div>
            <Searchbox />
        </Nav>
    )
}

export default PostNavbar