import React, { Component } from 'react'
import NavigationComponent from './NavigationComponent'

class NavigationContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavigationComponent location={this.props.location} isLoggedIn="true" />
            </div>
        )
    }
}

export default NavigationContainer