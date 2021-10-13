import React from 'react';

function MarketCenterCart(props) {
    return (
        <div className="market-layout-center">
            <div className="market-layout-center-scroll" id="market-layout-center-scroll-style">
            <div className="market-layout-center-scroll-cart-nav">Giỏ Hàng</div>
           
            <div className="market-layout-center-scroll-cart-body">
                    <img className="market-layout-center-scroll-cart-body-img" src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg" />
                    <div className="market-layout-center-scroll-cart-body-label">
                        <label className="market-layout-center-scroll-cart-body-label-name">🥰🥰 Cung Cấp Fanpage</label>
                        <label className="market-layout-center-scroll-cart-body-label-price">100$</label>
                        <label className="market-layout-center-scroll-cart-body-label-status">đang hoạt động</label>
                        <div className="market-layout-center-scroll-cart-body-label-button">
                            <div  className="market-layout-center-scroll-cart-body-label-button-tile">Mua</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MarketCenterCart;