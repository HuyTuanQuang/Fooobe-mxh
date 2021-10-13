import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
function MarketCenterAccount(props) {
    return (
        <div className="market-layout-center">
            <div className="market-layout-center-scroll" id="market-layout-center-scroll-style">
                <div className="market-layout-center-scroll-account-nav">
                    <label className="market-layout-center-scroll-account-nav-tile">Bài niêm yết của bạn</label>
                    <div className="market-layout-left-nav-row-form" style={{ width: "70%" }}>
                        <div className="market-layout-left-nav-row-form-input-icon"><AiOutlineSearch /></div>
                        <input className="market-layout-left-nav-row-form-input" placeholder="Tìm kiếm trên marketplace" type="text" />
                    </div>
                </div>
                <div className="market-layout-center-scroll-account-body">
                    <img className="market-layout-center-scroll-account-body-img" src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg" />
                    <div className="market-layout-center-scroll-account-body-label">
                        <label className="market-layout-center-scroll-account-body-label-name">🥰🥰 Cung Cấp Fanpage</label>
                        <label className="market-layout-center-scroll-account-body-label-price">100$</label>
                        <label className="market-layout-center-scroll-account-body-label-status">đang hoạt động</label>
                        <div className="market-layout-center-scroll-account-body-label-button">
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">Đánh dấu đã bán</div>
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">Chia sẻ</div>
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">...</div>
                        </div>
                    </div>
                </div>
                <div className="market-layout-center-scroll-account-body">
                    <img className="market-layout-center-scroll-account-body-img" src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg" />
                    <div className="market-layout-center-scroll-account-body-label">
                        <label className="market-layout-center-scroll-account-body-label-name">🥰🥰 Cung Cấp Fanpage</label>
                        <label className="market-layout-center-scroll-account-body-label-price">100$</label>
                        <label className="market-layout-center-scroll-account-body-label-status">đang hoạt động</label>
                        <div className="market-layout-center-scroll-account-body-label-button">
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">Đánh dấu đã bán</div>
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">Chia sẻ</div>
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">...</div>
                        </div>
                    </div>
                </div>
                <div className="market-layout-center-scroll-account-body">
                    <img className="market-layout-center-scroll-account-body-img" src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg" />
                    <div className="market-layout-center-scroll-account-body-label">
                        <label className="market-layout-center-scroll-account-body-label-name">🥰🥰 Cung Cấp Fanpage</label>
                        <label className="market-layout-center-scroll-account-body-label-price">100$</label>
                        <label className="market-layout-center-scroll-account-body-label-status">đang hoạt động</label>
                        <div className="market-layout-center-scroll-account-body-label-button">
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">Đánh dấu đã bán</div>
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">Chia sẻ</div>
                            <div  className="market-layout-center-scroll-account-body-label-button-tile">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketCenterAccount;