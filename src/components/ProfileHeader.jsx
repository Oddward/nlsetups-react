import styled from 'styled-components'
import { 
    UserIcon,
    PhotographIcon
} from '@heroicons/react/solid'
import Avatar from './leaf-components/Avatar'
import Button from './leaf-components/Button'
import { CheckIcon } from '@heroicons/react/outline'


const HorizontalCenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`

const ContainerDiv = styled(HorizontalCenteredDiv).attrs( props => ({
    color: props.color || '#222'
}))`
    border: 2px solid;
    border-color: ${ props => props.color };
    border-radius: 1rem;
    padding: 1rem 2.5rem;
`

const H2 = styled.h2.attrs( props => ({
    color: props.color || 'rgba( 0, 0, 0, .86 )'
}))`
    font-size: 1.5rem;
    color: ${ props => props.color };
    margin: 0;
`

const P = styled.p`
    font-style: italic;
    color: rgba( 0, 0, 0, .67 );
    margin: 0;
    font-weight: bold;
`

const Icon = styled.i`
    width: 2rem;
    height: 2rem;
    text-align: center;
`


function ProfileHeader( props ) {
    return(
        <ContainerDiv color={ props.color }>
            <HorizontalCenteredDiv>
                <Avatar src="./avatars/pfp1.jpg" />
                <div style={{display:'flex', flexDirection:'column'}}>
                    <H2 color={ props.color }>Oddward G</H2>
                    <P>@oddward</P>
                </div>
            </HorizontalCenteredDiv>

            <HorizontalCenteredDiv>
                <Icon><UserIcon /></Icon>
                <span>11</span>
            </HorizontalCenteredDiv>

            <HorizontalCenteredDiv>
                <Icon><PhotographIcon /></Icon>
                <span>4</span>
            </HorizontalCenteredDiv>

            <Button primary>
                {/* <CheckIcon width={'1.5rem'} height={'1.5rem'} /> */}
                <span>Follow</span>
            </Button>
        </ContainerDiv>
    )
}

export default ProfileHeader