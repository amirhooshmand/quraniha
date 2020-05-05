import React from 'react'
import { Link } from "react-router-dom";
import '../../css/navbar.css'
import logo from '../../images/logo-lg-w.png'
import profile from '../../images/ic_account_circle_24px.png'
import arrow from '../../images/ic_arrow.png'

function NavigationComponent(props) {

    const isLoggedIn = props.isLoggedIn;
    const location = "";//props.location;
    let button;

    if (!isLoggedIn) {
        button = (<div className="left profile-box">
            <div className=" profile-child item-nav">
                <a href="#about">ورود</a>
            </div>

            <div className="profile-child item-nav">
                <a href="#about">عضویت</a>
            </div>
        </div>);
    } else {
        button = (<div className="left profile-box border">
            <div className="profile-child">
                <img src={profile} className="profile-img" alt="" />
            </div>
            <div className="profile-child">
                <p>پروفایل</p>
            </div>
            <div className="profile-child">
                <img src={arrow} className="arrow-img" alt="" />
            </div>
        </div>);
    }

    return (
        <div className="topnav">
            <div>
                <Link to="/" ><img className="nav-logo" src={logo} alt="" /></Link>
            </div>
            <div className="item-nav">
                <Link to="/" className={location === "/" ? "active" : null}>صفحه اصلی</Link>
            </div>
            <div className="item-nav">
                <Link to="/news" className={location === "/news" ? "active" : null}>اخبار</Link>
            </div>
            <div className="item-nav">
                <Link to="/contact" className={location === "/contact" ? "active" : null}>ارتباط با ما</Link>

            </div>
            <div className="item-nav">
                <Link to="/about" className={(location === "/about") ? "active" : null}>درباره ما</Link>

            </div>

            {button}
        </div >

    )
}

export default NavigationComponent