import React from 'react'
import './header-layout.scss'

function HeaderLayout(props){
    return(
        <section className="HeaderLayout">
            {props.children}
        </section>
    )
}

export default HeaderLayout