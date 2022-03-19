import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Thumbnail = styled.img.attrs({
    height: '400px',
    width: '200px'
})`
    width: 200px;
    height: auto;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 3px rgba(0, 0, 0, .1);
`

const UserTag = styled.span`
    text-overflow: ellipses;
    display: inline-block;
    font-weight: bold;
    color: rgba( 0, 0, 0, .67);

    &&:hover {
        color: rgba( 0, 0, 0, .86);
    }
    &::before {
        content: 'by ';
    }
`

const Icon = styled.button`
    width: 2rem;
    height: auto;
    fill: rgba( 0, 0, 0, .67);
    background: none;
    border: none;
    cursor: pointer;

    &:active {
        transform: scale( 0.9 );
    }
`

const CardBottom = styled.div`
    width: 100%;
    margin: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

function PreviewCard( props ) {
    // const { saved, setSaved } = useState( false )
    // const { src } = useState( '' )
    const icon = () => {
        // ...check authentication first
        if ( props.saved ) {
            return <BookmarkIconSolid />
        } else {
            return <BookmarkIconOutline />
        }
    }

    return(
        <CardContainer>
            <Link to="/post">
                <Thumbnail src={ props.src } alt="Post screenshot thumbnail" />
            </Link>
            <CardBottom>
                <Link to="/profile">
                    <UserTag>{ props.username }</UserTag>
                </Link>
                <Icon>{ icon() }</Icon>
            </CardBottom>
        </CardContainer>
    )
}

export default PreviewCard