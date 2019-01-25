import React, { Component } from 'react'
import HeaderLayout from '../components/header-layout'
import Logo from '../components/logo'

class Header extends Component {
    render() {
        return(
            <HeaderLayout>
                <Logo/>
            </HeaderLayout>
        )
    }
}

export default Header