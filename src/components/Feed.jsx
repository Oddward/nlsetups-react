import { useState } from 'react'
import styled from 'styled-components'
import PreviewCard from './PreviewCard'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem 3rem;
`

function Feed( props ) {
    return(
        <Container>
            <PreviewCard src='./screens/IMG_20200411_001309.jpg' username='Oddward' />
            <PreviewCard src='./screens/IMG_20200220_175934.jpg' username='johnny' saved />
            <PreviewCard src='./screens/IMG_20200506_191339.jpg' username='NoRuss' saved />
            <PreviewCard src='./screens/IMG_20210630_122925_849.jpg' username='rePeter' />
            <PreviewCard src='./screens/IMG_20210522_095815_172.jpg' username='malcolm' />
            <PreviewCard src='./screens/IMG_20210712_204142_514.jpg' username='NoRuss' saved />
        </Container>
    )
}

export default Feed
