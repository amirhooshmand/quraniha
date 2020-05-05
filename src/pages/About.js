import React, { Component } from 'react'

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
                <h1>{text}</h1>
            </div>
        )
    }
}

export default About