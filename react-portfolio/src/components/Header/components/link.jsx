import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    align-self: center;
    margin-right: 1em;
`

function Link(props) {
    return(
        <Div>
            <a>{props.name}</a>
        </Div>
    )
}

export default Link