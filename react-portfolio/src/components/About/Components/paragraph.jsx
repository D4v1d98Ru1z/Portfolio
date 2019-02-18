import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;      
`
const Img = styled.img`
    width: 50%;
`

const Text = styled.p`
    width: 50%;
`
function Paragraph(props){
    return(
        <Div>
            <Img src={props.src} width={180} height={180} alt="Illustration"/>
            <Text> {props.text} </Text>
        </Div>
    )
}

export default Paragraph