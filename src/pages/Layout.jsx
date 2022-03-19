import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { 
    PlusCircleIcon, 
    UserIcon 
} from "@heroicons/react/outline";
import PostNavbar from "../components/PostNavbar";

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
    return (
        <>
        <Navbar>
            <li>
            <Link to="/">
                <IconLink><PlusCircleIcon /></IconLink>
            </Link>
            </li>
            <li>
            <Link to="/profile">
                <IconLink><UserIcon /></IconLink>
            </Link>
            </li>
        </Navbar>

        <StyledContainer className="container">
            <PostNavbar />
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