import React, { Component } from 'react'
import HelloLayout from '../components/hello-layout'
import MainIcon from '../components/image'
import Content from '../components/content'

class Hello extends Component{
    render() {
        console.log(this.props.main.img)
        return(
            <HelloLayout>
                <MainIcon
                    main={this.props.main}
                />
                <Content
                    main={this.props.main}
                />
            </HelloLayout>
        )
    }
}

export default Hello