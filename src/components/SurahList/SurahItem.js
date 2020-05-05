import React, { Component } from 'react';
import '../../css/SurahList.css'

import img from '../../images/001.png'

class SurahItem extends Component {

    getIndex(id) {
        if (id < 10)
            return "00" + id;
        else if (id < 100)
            return "0" + id;
        else return id;
    }

    render() {

        let id = this.props.surah.id;
        let name = this.props.surah.name;
        let slug = this.props.surah.slug;

        return (
            <div className="surah-item" onClick={()=>this.props.handleClick(slug)}>
                <div className="item">
                    <h3>{id}. {name}</h3>
                    <p>{name}</p>
                </div>
                <img src={"https://quranonline.net/wp-content/uploads/2019/01/" + this.getIndex(id) + ".svg"} alt="" />
            </div>
        )
    }

}

export default SurahItem