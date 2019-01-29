import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    align-self: center;
    margin-right: 1em;
`

const Anchor = styled.a`
    color: black;
    text-decoration: none;
`

function Link(props) {
    return(
        <Div>
            <Anchor href="/">{props.name}</Anchor>
        </Div>
    )
}

export default Link