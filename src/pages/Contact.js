import React, { Component } from 'react'
import NavigationContainer from '../components/Navigation/NavigationContainer'

class Contact extends Component {
    render() {
        return (
            <div>
                <NavigationContainer location={window.location.pathname} />
                <h1>ارتباط با ما</h1>
            </div>
        )
    }
}

export default Contact