import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
function MarketCenterNofication(props) {
    return (
        <div className="market-layout-center">
            <div className="market-layout-center-scroll" id="market-layout-center-scroll-style">
            <div  className="market-layout-center-scroll-nav">Thông báo</div>
            <div className="market-layout-center-scroll-nofication-body">
                <div className="market-layout-center-scroll-nofication-body-icon"><IoSettingsOutline/></div>
                <div className="market-layout-center-scroll-nofication-body-tile">Lượt xem các bài viết</div>
            </div>
            <div className="market-layout-center-scroll-nofication-body">
                <div className="market-layout-center-scroll-nofication-body-icon"><IoSettingsOutline/></div>
                <div className="market-layout-center-scroll-nofication-body-tile">Lượt xem các bài viết</div>
            </div>
            <div className="market-layout-center-scroll-nofication-body">
                <div className="market-layout-center-scroll-nofication-body-icon"><IoSettingsOutline/></div>
                <div className="market-layout-center-scroll-nofication-body-tile">Lượt xem các bài viết</div>
            </div>
            <div className="market-layout-center-scroll-nofication-body">
                <div className="market-layout-center-scroll-nofication-body-icon"><IoSettingsOutline/></div>
                <div className="market-layout-center-scroll-nofication-body-tile">Lượt xem các bài viết</div>
            </div>
            </div>
        </div>
    );
}

export default MarketCenterNofication;