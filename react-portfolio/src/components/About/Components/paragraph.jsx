import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;      
    padding: 3.5em;
`
const Box = styled.div`
    width: 50%;
    text-align: left;
    flex-grow: 2;
`
const Img = styled.img`
    width: 50%;
    align-self: center;
    flex-grow: 1;
`

const Text = styled.p`
    margin: auto;
`
function Paragraph(props){
    return(
        <Div>
            <Img src={props.src} width={180} height={180} alt="Illustration"/>
            <Box>
                <Text> {props.text} </Text>
            </Box>
        </Div>
    )
}

export default Paragraph