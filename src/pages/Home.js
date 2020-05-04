import React, { Component } from 'react'

import HeaderContainer from '../components/Header/HeaderContainer'
import NavigationContainer from '../components/Navigation/NavigationContainer'
import SurahList from '../components/SurahList/SurahContainer'


class Home extends Component {
    render() {
        return (
            <div>
                <NavigationContainer location={window.location.pathname} />
                <HeaderContainer />
                <SurahList />
            </div>
        )
    }
}

export default Home