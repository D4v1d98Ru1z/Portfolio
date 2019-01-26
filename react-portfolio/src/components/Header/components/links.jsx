import React from 'react'
import Link from './link'
import './links.scss'

function Links (props){
    return(
        <div className="Links">
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
        </div>
)
}

export default Links