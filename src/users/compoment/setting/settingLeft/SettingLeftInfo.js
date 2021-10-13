import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';

function SettingLeftInfo(props) {
    return (
        <div className="setting-left">
        <div className="setting-left-nav">
            <div className="setting-left-nav-font"><Link to="/setting" style={{color:'black',textDecoration:'none'}}>Cài đặt</Link> <label style={{fontSize:'10pt'}}>{" 〉"}</label> Thông báo</div>
            <div className="setting-left-nav-button">
                <div
                    className="setting-left-nav-button-icon"
                >
                    <IoSettingsOutline />
                </div>
            </div>
        </div>
        <div className="setting-left-scroll" id="setting-left-scroll-style">
            <Link to="/setting/notifications" className="setting-left-scroll-menuitem">
                <div className="setting-left-scroll-menuitem-icon">
                    <CgProfile />
                </div>
                <div className="setting-left-scroll-menuitem-name">
                    Thông báo 
                </div>
            </Link>
        </div>

    </div>
    );
}

export default SettingLeftInfo;