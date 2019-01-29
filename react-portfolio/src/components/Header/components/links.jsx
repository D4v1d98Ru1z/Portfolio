import React from 'react'
import Link from './link'
import styled from 'styled-components'

const Div = styled.div`
    width: 60%;
    display: flex;
    text-align: right;
`

function Links (props){
    return(
        <Div>
            {
                props.navbar.map(item => {
                    return(
                        <Link
                            key={item.id}
                            {...item}
                        />
                    )
                })
            }
        </Div>
)
}

export default Links