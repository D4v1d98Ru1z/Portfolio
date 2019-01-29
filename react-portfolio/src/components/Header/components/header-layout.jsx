import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width: 100%;
    display: flex;
`
function HeaderLayout(props){
    return(
        <Section>
            {props.children}
        </Section>
    )
}

export default HeaderLayout