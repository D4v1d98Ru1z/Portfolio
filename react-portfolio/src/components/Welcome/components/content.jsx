import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 50%;
    align-self: center;
`

const Title = styled.h3`
    font-weight: 900;
    font-size: 2em;
    text-align: center;
    margin: 0;
`
const Name = styled.p`
    text-align: center;
    margin: 0;
`
const Ocup = styled.p`
    text-align: center;
    font-weight: 900;
`
function Content(props){
    return(
        <Container>
            <Title>{ props.main.greetings }</Title>
            <Name>{ props.main.name }</Name>
            <Ocup>{ props.main.ocupation}</Ocup>
        </Container>
    )
}

export default Content