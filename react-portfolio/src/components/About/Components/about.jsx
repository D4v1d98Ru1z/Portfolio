import React from 'react'
import Paragraph from './paragraph'

const About = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default About
