import React from 'react';
import { Link } from 'react-router-dom';
import { FcPrivacy } from 'react-icons/fc';
import { IoSettingsOutline } from 'react-icons/io5';

function SettingLeftSecurity(props) {
    return (
        <div className="setting-left">
        <div className="setting-left-nav">
            <div className="setting-left-nav-font"><Link to="/setting" style={{color:'black',textDecoration:'none'}}>Cài đặt</Link> <label style={{fontSize:'10pt'}}>{" 〉"}</label> Bảo mật</div>
            <div className="setting-left-nav-button">
                <div
                    className="setting-left-nav-button-icon"
                >
                    <IoSettingsOutline />
                </div>
            </div>
        </div>
        <div className="setting-left-scroll" id="setting-left-scroll-style">
            <Link to="/setting/security" className="setting-left-scroll-menuitem">
                <div className="setting-left-scroll-menuitem-icon">
                    <FcPrivacy />
                </div>
                <div className="setting-left-scroll-menuitem-name">
                    Bảo mật và đăng nhập
                </div>
            </Link>
        </div>

    </div>
    );
}

export default SettingLeftSecurity;