import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;      
`
const Box = styled.div`
    width: 50%;
    text-align: left;
`
const Img = styled.img`
    width: 50%;
    align-señf: center;
`

const Text = styled.p`
    width: 50%;
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