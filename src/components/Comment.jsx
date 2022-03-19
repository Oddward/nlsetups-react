import styled from "styled-components"
import Avatar from "../components/leaf-components/Avatar"

const Container = styled.div`
    display: flex;
    gap: 1rem;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    header {
        font-size: 1rem;
        font-weight: bold;

        span { color: rgba( 0, 0, 0, .34 ); }
    }
    p {
        margin: 0;
        font-style: italic;
    }

    small {
        color: rgba( 0, 0, 0, .34 );
        margin-top: .5rem;
    }
`

const Line = styled.div`
    border: 1px solid rgba( 0, 0, 0, .34 );
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 1rem;
    width: 4rem;
    height: 1.35rem;
`

function Comment( props ) {
    // const comments = [
    //     { pfp: './avatars/pfp1.jpg', name: 'Potato', tag: '@crisps', msg: 'Nice work, I like the emotional vibe ', replies: [
    //         { pfp: './avatars/pfp1.jpg', name: 'Oddward G', tag: '@oddward', msg: 'Thanks, the photo really makes it'}
    //     ]}
    // ]

    return (
        <>
            <Container>
                <Line />
                <Avatar small src={ props.pfp } />
                <TextContainer>
                    <header>{props.name} <span>{props.tag}</span></header>
                    <p>{props.msg}</p>
                    <small>{props.date}</small>
                </TextContainer>
            </Container>
        </>
    )
}

export default Comment