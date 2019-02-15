import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    max-width: 1500px;    
`

function Paragraph(props){
    return(
        <Div>
            <img src={props.src} alt="Illustration"/>
            <p> {props.text} </p>
        </Div>
    )
}

export default Paragraph