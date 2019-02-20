import React from 'react'
import Paragraph from './paragraph'
import styled from 'styled-components'

const Div = styled.div`
    max-width: 1020px;
    margin: auto; 
`
const Title = styled.h2`
    width: 100%;
    text-align: center;
`

const About = (props) => {
  return (
    <Div>
        <Title>{props.about.title}</Title>
        <div>
        {
            props.about.content.map(item => {
                return(
                    <Paragraph 
                        key={item.id} 
                        {...item}
                    />
                )
            })
        }
        </div>
    </Div>
  )
}

export default About
