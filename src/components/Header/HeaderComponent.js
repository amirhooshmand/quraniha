import React from 'react'
import '../../css/Header.css'
import searchImg from '../../images/ic_search.png'

function HeaderComponent() {
    return (
        <div className="header-image">
            <div className="header-parent">
                <div className="ext-box">
                    <div className="int-box">
                        <h1>ﭖ ﭗ ﭘ ﭙ</h1>
                        <p><b>ستایش خدایی را گه پروردگار جهانیان است. ( الفاتحه )</b></p>
                        <div className="search-box">
                            <div className="search-child">
                                <img src={searchImg} alt="" />
                            </div>
                            <div className="search-child">
                                <input type="text" placeholder="جستجو..." />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HeaderComponent