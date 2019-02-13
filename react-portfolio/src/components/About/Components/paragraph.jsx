import React from 'react'
//import styled from 'styled-components'

function Paragraph(props){
    return(
        <div>
            <img src={props.src} alt="Illustration"/>
            <p> {props.text} </p>
        </div>
    )
}

export default Paragraph