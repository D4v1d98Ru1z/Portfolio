import React from 'react'
import './link.scss'

function Link(props) {
    return(
        <div className="Link">
            <a>{props.name}</a>
        </div>
    )
}

export default Link