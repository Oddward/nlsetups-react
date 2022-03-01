import styled from 'styled-components'

const StyledImg = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
`

function Avatar( props ) {
    const src = props.src ? props.src : ''
    return(
        <StyledImg src={ src }></StyledImg>
    )
}

export default Avatar