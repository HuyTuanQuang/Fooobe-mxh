import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { RiAdvertisementLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function SettingLeftHome({hiden,setHiden}) {
    const locaiton = window.location.pathname;
  
if (locaiton === "/") setHiden(1)


  return (
    <div className="setting-left">
      <div className="setting-left-nav">
        <div className="setting-left-nav-font">Cài đặt</div>
        <div className="setting-left-nav-button">
          <div
            className="setting-left-nav-button-icon"
          >
            <IoSettingsOutline />
          </div>
        </div>
      </div>

      <div className="setting-left-scroll" id="setting-left-scroll-style">
        <Link to="/setting" className="setting-left-scroll-menuitem" style={hiden===1 ? {backgroundColor:'aqua'} : null}>
          <div className="setting-left-scroll-menuitem-icon">
            <CgProfile />
          </div>
          <div className="setting-left-scroll-menuitem-name" >
            Quang
          </div>
        </Link>
        <Link to="/setting/privacy" className="setting-left-scroll-menuitem">
          <div className="setting-left-scroll-menuitem-icon">
            <RiGitRepositoryPrivateLine />
          </div>
          <div className="setting-left-scroll-menuitem-name">
            Quyền riêng tư
          </div>
        </Link>
        <Link to="/setting/notifications" className="setting-left-scroll-menuitem">
          <div className="setting-left-scroll-menuitem-icon">
            <IoIosNotificationsOutline />
          </div>
          <div className="setting-left-scroll-menuitem-name">
            Thông báo
          </div>
        </Link>
        <Link to="/setting/account" className="setting-left-scroll-menuitem">
          <div className="setting-left-scroll-menuitem-icon">
            <CgProfile />
          </div>
          <div className="setting-left-scroll-menuitem-name">
            Tài khoản
          </div>
        </Link>
        <Link to="/setting/security" className="setting-left-scroll-menuitem">
          <div className="setting-left-scroll-menuitem-icon">
            <RiGitRepositoryPrivateFill />
          </div>
          <div className="setting-left-scroll-menuitem-name">
            Bảo mật và đăng nhập
          </div>
        </Link>
        <Link to="/setting/advertisers" className="setting-left-scroll-menuitem">
          <div className="setting-left-scroll-menuitem-icon">
            <RiAdvertisementLine />
          </div>
          <div className="setting-left-scroll-menuitem-name">
            Quảng cáo
          </div>
        </Link>
        <Link to="/setting/suport" className="setting-left-scroll-menuitem">
          <div className="setting-left-scroll-menuitem-icon">
            <BiSupport />
          </div>
          <div className="setting-left-scroll-menuitem-name">
            Hỗ trợ
          </div>
        </Link>

      </div>
    </div>
  );
}

export default SettingLeftHome;