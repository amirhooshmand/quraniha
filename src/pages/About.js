import React, { Component } from 'react'
import NavigationContainer from '../components/Navigation/NavigationContainer'

class About extends Component {

    state = {
        "loading": true
    }

    componentDidMount() {
        this.setState({ "loading": false })
    }

    render() {
        const text = this.state.loading ? "در حال بارگذاری..." : "درباره ما"

        return (
            <div>
                <NavigationContainer location={window.location.pathname} />
                <h1>{text}</h1>
            </div>
        )
    }
}

export default About