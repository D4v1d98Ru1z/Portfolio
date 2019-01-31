import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    max-width: 1500px;
    margin: auto;
    display: flex;
`

const HelloLayout = (props) => (
    <Section>
        {props.children}
    </Section>
)

export default HelloLayout