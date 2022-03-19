import styled, { css } from 'styled-components'

const StyledImg = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;

    ${ props => props.small && css`
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 1.35rem;
    `};
`

function Avatar( props ) {
    const src = props.src ? props.src : ''
    return(
        <StyledImg small={props.small} src={ src }></StyledImg>
    )
}

export default Avatar