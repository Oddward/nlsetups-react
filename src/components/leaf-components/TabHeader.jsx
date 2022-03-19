import styled from 'styled-components'
import { ArrowSmDownIcon } from '@heroicons/react/solid'

const Button = styled.button`
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    color: rgba( 0, 0, 0, .67 );
    fill: rgba( 0, 0, 0, .67 );
    font-weight: bold;

    span {
        font-style: italic;
    }
    .active, &:hover {
        color: rgba( 0, 0, 0, .86 );
        fill: rgba( 0, 0, 0, .86 );
    }
    & i {
        opacity: 0;
    }
    &.active i {
        opacity: 1;
    }
`

const Mark = styled.i`
    width: 1rem;
    height: 1rem;
`

function TabHeader( props ) {
    return(
        <Button>
            <span>{ props.children }</span>
            <Mark><ArrowSmDownIcon /></Mark>
        </Button>
    )
}

export default TabHeader