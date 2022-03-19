import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Brandmark = styled.span`
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 900;
    color: #222;
`

const Nav = styled.nav`
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
`

const Ul = styled.ul`
    display: flex;
    gap: 2rem;
`

function Navbar( props ) {

    return(
        <Nav>
            <Link to="/">
                <Brandmark>NLSetups</Brandmark>
            </Link>
            <Ul>
                { props.children }
            </Ul>
        </Nav>
    )
}

export default Navbar