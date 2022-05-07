import styled from 'styled-components'

const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
`

function TabsList( props ) {
    
    return(
        <List>
            { props.children }
        </List>
    )
}

export default TabsList