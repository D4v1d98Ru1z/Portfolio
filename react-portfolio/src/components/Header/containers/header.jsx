import React, { Component } from 'react'
import HeaderLayout from '../components/header-layout'
import Logo from '../components/logo'
import Links from '../components/links'

class Header extends Component {
    render() {
        return(
            <HeaderLayout>
                <Logo/>
                <Links
                    navbar={this.props.navbar}
                />

            </HeaderLayout>
        )
    }
}

export default Header