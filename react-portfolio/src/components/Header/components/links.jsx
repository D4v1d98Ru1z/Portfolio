import React from 'react'
import Link from './link'

function Links (props){
    return(
        <div>
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