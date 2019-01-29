import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    max-width: 1500px;
    margin: auto;
`

const HelloLayout = (props) => (
    <Section>
        {props.children}
    </Section>
)

export default HelloLayout