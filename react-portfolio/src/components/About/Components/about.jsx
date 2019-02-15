import React from 'react'
import Paragraph from './paragraph'
import styled from 'styled-components'

const Div = styled.div`
    max-width: 1500px;
    margin: auto; 
`
const About = (props) => {
  return (
    <Div>
        <h2>{props.about.title}</h2>
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
