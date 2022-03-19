import { useState } from "react"
import styled from "styled-components"
import Feed from "../components/Feed"
import TabHeader from "../components/leaf-components/TabHeader"
// import TabsList from "../components/TabList"
import ProfileHeader from "../components/ProfileHeader"

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
`

const Profile = () => {
    // const { tabFilter } = useState( 'post' )

    const setTab = e => {
        const tabs = document.getElementsByClassName( 'tab-link' )

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove( 'active' )
        }
        console.log(e)
        e.currentTarget.classList.add( 'active' )
    }

    return(
        <>
        <ProfileHeader color="orange" />

        <TabsContainer>
            <TabHeader className='tab-link active' onClick={ setTab }>Posts</TabHeader>
            <TabHeader className='tab-link' onClick={ setTab }>Saves</TabHeader>
        </TabsContainer>

        <Feed />
        </>
    )
}

export default Profile