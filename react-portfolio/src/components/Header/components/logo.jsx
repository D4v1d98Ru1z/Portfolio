import React from 'react'
import Icon from '../../../assets/resources/David.png'
import styled from 'styled-components'

const LogoDiv = styled.div`
    width: 40%;
    display: flex;
` 
const Img = styled.img`
    src: url(${props => props.src});
    align-self: center;

` 
const Title = styled.h3`
    font-weight: 400;
    align-self: center;
    margin-left: 0.28em;
`

function Logo(props){
    return(
        <LogoDiv>
            <Img src={Icon} width={35} height={35} alt="Logo of the page"/>
            <Title ><strong>David</strong>Ruiz</Title>
        </LogoDiv>
    )
}

export default Logo