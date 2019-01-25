import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../../Header/containers/header'

class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <Header
                    navbar={this.props.data.navbar}
                />
            </HomeLayout>
        )
    }
}

export default Home