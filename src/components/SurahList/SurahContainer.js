import React, { Component } from 'react';
import SurahItem from './SurahItem';
import '../../css/SurahList.css'
import { useHistory } from "react-router-dom";

class SurahList extends Component {

    componentDidMount(){
        console.log("aslk");
    }

    state = {
        error: null,
        isLoaded: false,
        surahs: []
    }

    componentDidMount() {
        fetch("http://localhost:8000/surahs")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        surahs: result,
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


    handleClick = (slug) => {
        this.props.history.push('/surah/' + slug)
    };

    render() {

        if (!this.state.isLoaded) {
            return (
                <div>
                    loading...
                </div>
            )
        } else {

            let firstColumn = [];
            for (let i = 0; i < 38; i++) {
                firstColumn.push(<SurahItem key={this.state.surahs[i].id} surah={this.state.surahs[i]} handleClick={this.handleClick} />)
            }
            let secondColumn = [];
            for (let i = 38; i < 76; i++) {
                secondColumn.push(<SurahItem key={this.state.surahs[i].id} surah={this.state.surahs[i]} handleClick={this.handleClick} />)
            }
            let thirdColumn = [];
            for (let i = 76; i < 114; i++) {
                thirdColumn.push(<SurahItem key={this.state.surahs[i].id} surah={this.state.surahs[i]} handleClick={this.handleClick} />)
            }

            return (
                <div>
                    <div className="surah-row">
                        <div className="surah-column">
                            <ul>
                                <li>
                                    {firstColumn}
                                </li>

                            </ul>
                        </div>
                        <div className="surah-column" >
                            <ul>
                                <li>
                                    {secondColumn}
                                </li>
                            </ul>
                        </div>
                        <div className="surah-column"  >
                            <ul>
                                <li>
                                    {thirdColumn}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SurahList