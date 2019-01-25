import React from 'react'
import Icon from '../../../assets/resources/David.png'
import './logo.scss'

function Logo(props){
    return(
        <div className="Logo">
            <img src={Icon} width={35} height={35} alt="Logo of the page"/>
            <h3 className="Logo-title"><strong>David</strong>Ruiz</h3>
        </div>
    )
}

export default Logo