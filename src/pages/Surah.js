import React, { Component, useEffect } from 'react'
import Loading from '../components/Loading';

class Surah extends Component {

    state = {
        error: null,
        isLoaded: false,
        surah: ""
    }

    componentDidMount() {

        window.scrollTo(0, 0)

        fetch("http://localhost:8000/surahs/" + this.props.match.params.slug)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        surah: result,
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }
    render() {
        let text;
        let verse = [];
        let loading = (<Loading />);
        if (this.state.isLoaded) {
            text = "سوره " + this.state.surah.name
            for (let i = 0; i < this.state.surah.verses.length; i++) {
                verse.push(<p key={this.state.surah.verses[i].id} style={{ margin: "30px" }}>{this.state.surah.verses[i].text}</p>)
            }

            loading = null;
        }
        return (
            <div style={{ minHeight: "500px" }}>
                {loading}
                <h1 style={{ padding: "30px", color: "#2fb433", margin:"0px" }}>{text}</h1>
                {verse}
            </div>
        )
    }
}

export default Surah