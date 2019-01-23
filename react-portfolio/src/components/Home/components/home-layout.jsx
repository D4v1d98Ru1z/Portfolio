import React from 'react'

function HomeLayout(props){
    return(
        <section>
            Hello
            {
                props.children
            }
        </section>
    )
}

export default HomeLayout