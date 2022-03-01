import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    background: #8882;
    color: #222;
    fill: #222;
    border-radius: 5px;
    padding: .75rem 1.5rem;
    transition: all 300ms ease;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;

    ${ props => props.primary && css`
        background: #222;
        color: white;
        fill: white;
    `};
    ${ props => props.secondary && css`
        background: transparent;
        color: #333;
        fill: #333;
    `};
`

function Button( props ) {
    // let text = props.following ? 'Followed' : 'Follow'

    return(
        <StyledButton primary={props.primary} secondary={props.secondary}>
            { props.children }
        </StyledButton>
    )
}

export default Button