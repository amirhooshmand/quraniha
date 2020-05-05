import React, { Component } from 'react'

import HeaderContainer from '../components/Header/HeaderContainer'
import SurahList from '../components/SurahList/SurahContainer'


class Home extends Component {

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <SurahList history={this.props.history}/>
            </div>
        )
    }
}

export default Home