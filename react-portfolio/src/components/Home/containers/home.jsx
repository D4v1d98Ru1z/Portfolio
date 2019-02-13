import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../../Header/containers/header'
import Welcome from '../../Welcome/containers/hello'
import About from '../../About/Components/about'

class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <Header
                    navbar={this.props.data.navbar}
                />
                <Welcome
                    main={this.props.data.main}
                />
                <About
                    about={this.props.data.about}
                />
            </HomeLayout>
        )
    }
}

export default Home