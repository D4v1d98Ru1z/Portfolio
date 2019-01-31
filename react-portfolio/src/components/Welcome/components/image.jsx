import React from 'react'
import styled from 'styled-components'
import Dev from '../../../assets/resources/1.svg'



const Container = styled.div`
    width: 50%;
    align-self: center;
    text-align: right;
`
const Img = styled.img`
    src: url(${props => props.src});
`

function Image(props) {
    return(
        <Container>
            <Img
                src={Dev} width={500} height={250} alt="Developer"
            />
        </Container>
    )
}

export default Image