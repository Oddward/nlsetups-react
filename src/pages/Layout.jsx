import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from "styled-components";
import { 
    PlusCircleIcon, 
    UserIcon 
} from "@heroicons/react/outline";

const StyledContainer = styled.div`
    padding-bottom: 3rem;
`

const IconLink = styled.span`
    fill: navy;
    color: navy;
    width: 2rem;
    height: 2rem;
    margin: 0 .5rem;
    display: inline-block;
    opacity: .7;

    & a:visited, & a:active {
        color: navy;
        fill: navy;
    }
    &:hover, &:focused {
        color: #222;
        fill: #222;
        opacity: 1;
    }
`

const UlDropdown = styled.ul`
    position: absolute;
    background-color: white;
    box-shadow: 2px 2px 4px 2px #0001;
    list-style: none;

    & li {
        width: 100%;
    }
`

const Footer = styled.footer`
    background: black;
    color: rgba( 255, 255, 255, .86 );
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    margin-top: auto;
`

const Layout = () => {
    const [ user ] = useAuthState( auth )

    const signOut = () => {
        auth.signOut();
    };

    return (
        <>
        <Navbar>
            <li>
            <Link to="/">
                <IconLink><PlusCircleIcon /></IconLink>
            </Link>
            </li>
            <li style={{position: 'relative'}}>
                <button>
                    <IconLink><UserIcon /></IconLink>
                </button>
                <UlDropdown>
                    { user ? 
                    (<>
                        <Link to="/profile"><li>
                            Profile
                            </li></Link>
                        <Link to="/settings"><li>
                            Settings
                            </li></Link>
                        <li onClick={ signOut }>
                            Signout
                        </li>
                    </>) :
                    (<>
                        <Link to="/signin"><li>
                            Signin
                        </li></Link>
                    </>) }
                </UlDropdown>
            
            </li>
        </Navbar>

        <StyledContainer className="container">
            <Outlet />
        </StyledContainer>

        <Footer>
            <div>
                <small>Made with ❤ by Mugtaba G</small><br/>
                <small>Open Source — hosted on GitHub</small>
            </div>
            <ul>
                <li>
                    <small>Contact</small>
                </li>
                <li>
                    <Link to="/"><small>About</small></Link>
                </li>
            </ul>
        </Footer>
        </>
    )
};

export default Layout;