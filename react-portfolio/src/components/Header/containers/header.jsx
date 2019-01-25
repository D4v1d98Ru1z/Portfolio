import React, { Component } from 'react'
import HeaderLayout from '../components/header-layout'
import Logo from '../components/logo'
import Links from '../components/links'

class Header extends Component {
    render() {
        return(
            <HeaderLayout>
                <Logo/>
                <div>
                    {
                        this.props.navbar.map(item => {
                            return(
                                <Links
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })
                    }
                </div>

            </HeaderLayout>
        )
    }
}

export default Header