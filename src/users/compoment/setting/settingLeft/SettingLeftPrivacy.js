import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { FaInfo } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { SiPostcss } from 'react-icons/si';
import { MdBlock } from 'react-icons/md';

function SettingLeftPrivacy({hiden}) {
    return (
        <div className="setting-left">
            <div className="setting-left-nav">
                <div className="setting-left-nav-font"><Link to="/setting" style={{ color: 'black', textDecoration: 'none' }}>Cài đặt</Link>  <label style={{ fontSize: '10pt' }}>{"  〉"}</label> Quyền riêng tư</div>
                <div className="setting-left-nav-button">
                    <div
                        className="setting-left-nav-button-icon"
                    >
                        <IoSettingsOutline />
                    </div>
                </div>
            </div>
            <div className="setting-left-scroll" id="setting-left-scroll-style">
                <Link to="/setting/privacy" className="setting-left-scroll-menuitem" >
                    <div className="setting-left-scroll-menuitem-icon">
                        <RiGitRepositoryPrivateLine />
                    </div>
                    <div className="setting-left-scroll-menuitem-name">
                        Quyền riêng tư
                    </div>
                </Link>
                <Link to="/setting/privacy/information" className="setting-left-scroll-menuitem">
                    <div className="setting-left-scroll-menuitem-icon">
                        <FaInfo />
                    </div>
                    <div className="setting-left-scroll-menuitem-name">
                        Thông tin của bạn trên facebook
                    </div>
                </Link>
                <Link to="/setting/privacy/profileTag" className="setting-left-scroll-menuitem">
                    <div className="setting-left-scroll-menuitem-icon">
                        <ImProfile />
                    </div>
                    <div className="setting-left-scroll-menuitem-name">
                        Trang cá nhân và gắn thẻ
                    </div>
                </Link>
                <Link to="/setting/privacy/followersPost" className="setting-left-scroll-menuitem">
                    <div className="setting-left-scroll-menuitem-icon">
                        <SiPostcss />
                    </div>
                    <div className="setting-left-scroll-menuitem-name">
                        Bài viết công khai
                    </div>
                </Link>
                <Link to="/setting/privacy/block" className="setting-left-scroll-menuitem">
                    <div className="setting-left-scroll-menuitem-icon">
                        <MdBlock />
                    </div>
                    <div className="setting-left-scroll-menuitem-name">
                        Chặn
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default SettingLeftPrivacy;