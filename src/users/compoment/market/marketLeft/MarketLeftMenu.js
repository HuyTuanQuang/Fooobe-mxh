import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsShop } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

import { Link } from "react-router-dom";

function MarketLeftMenu(props) {
    const value = [
        {
            id: "1",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "2",
            avatar: "oto.jpg",
            name: "Bán nhà",
            route: "/marketplace/category/propertyforsale",
            status: "normal",
        },
        {
            id: "3",
            avatar: "oto.jpg",
            name: "Gia đình",
            route: "/marketplace/category/family",
            status: "normal",
        },
        {
            id: "4",
            avatar: "oto.jpg",
            name: "Giải trí",
            route: "/marketplace/category/entertainment",
            status: "normal",
        },
        {
            id: "5",
            avatar: "oto.jpg",
            name: "Làm vườn & hoạt động ngoài trời",
            route: "/marketplace/category/garden",
            status: "normal",
        },
        {
            id: "6",
            avatar: "oto.jpg",
            name: "Nhạc cụ",
            route: "/marketplace/category/instruments",
            status: "normal",
        },
        {
            id: "7",
            avatar: "oto.jpg",
            name: "Rao vặt",
            route: "/marketplace/category/classifieds",
            status: "normal",
        },
        {
            id: "8",
            avatar: "oto.jpg",
            name: "Miễn phí",
            route: "/marketplace/category/free",
            status: "normal",
        },
        {
            id: "9",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "10",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "11",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
    ];
    const [marketCategory, setMarketCategory] = useState(value)
    const [seach,setSeach] = useState("")
    return (
        <div className="market-layout-left">
            <div className="market-layout-left-nav">
                <div className="market-layout-left-nav-row">
                    <label className="market-layout-left-nav-tile">Marketplace</label>
                    <label className="market-layout-left-nav-icon"> <IoSettingsOutline /></label>
                </div>
                <div className="market-layout-left-nav-row-form">
                    <div className="market-layout-left-nav-row-form-input-icon"><AiOutlineSearch /></div>
                    <input className="market-layout-left-nav-row-form-input" onChange={(e)=>setSeach(e.target.value)} placeholder="Tìm kiếm trên marketplace" type="text" />
                </div>
            </div>
            <div className="market-layout-left-body">
                <div className="market-layout-left-body-scroll" id="market-layout-left-body-scroll-style">
                    <Link to="/marketplace" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row">
                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                            <label className="market-layout-left-body-scroll-row-tile">Lướt xem tất cả</label>
                        </div>
                    </Link>
                    <Link to="/marketplace/live-shopping" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row">
                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                            <label className="market-layout-left-body-scroll-row-tile">Mua sắm trực tiếp</label>
                        </div>
                    </Link>
                    <Link to="/marketplace/notifications" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row">
                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                            <label className="market-layout-left-body-scroll-row-tile">Thông báo</label>
                        </div>
                    </Link>
                    <Link to="/marketplace/inbox" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row">
                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                            <label className="market-layout-left-body-scroll-row-tile">Hộp thư</label>
                        </div>
                    </Link>
                    <Link to="/marketplace/you/selling" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row">
                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                            <label className="market-layout-left-body-scroll-row-tile">Tài khoản của bạn</label>
                        </div>
                    </Link>
                    <Link to="/marketplace/cart" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row">
                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                            <label className="market-layout-left-body-scroll-row-tile">Giỏ hàng</label>
                        </div>
                    </Link>
                    <Link to="/marketplace/create" className="market-layout-left-body-scroll-link" >
                        <div className="market-layout-left-body-scroll-row" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'whitesmoke' }}>
                            + Tạo bài niêm yết mới
                        </div>
                    </Link>
                    <div style={{ width: '95%', marginLeft: '2%', backgroundColor: 'grey', height: '1px', opacity: '0.3', marginTop: '10px' }}></div>
                    <div className="market-layout-left-body-scroll-row-body">
                        <label style={{ fontWeight: '600' }}>Bộ lọc</label>
                        <label className="market-layout-left-body-scroll-row-body-tile">Hà nội - trong vòng 60km</label>
                    </div>
                    <div style={{ width: '95%', marginLeft: '2%', backgroundColor: 'grey', height: '1px', opacity: '0.3', marginTop: '10px' }}></div>
                    <div className="market-layout-left-body-scroll-row-category">
                        {
                            marketCategory.map((val) => {
                                return (
                                    <Link to={val.route} className="market-layout-left-body-scroll-link" >
                                        <div className="market-layout-left-body-scroll-row">
                                            <label className="market-layout-left-body-scroll-row-icon"><BsShop /></label>
                                            <label className="market-layout-left-body-scroll-row-tile" style={{
                                                width: "90%",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                            }}>{val.name}</label>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>

                </div>

            </div>
        </div>
    );
}

export default MarketLeftMenu;