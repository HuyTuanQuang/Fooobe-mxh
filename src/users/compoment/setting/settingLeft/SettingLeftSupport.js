import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';

function SettingLeftSupport(props) {
    return (
        <div className="setting-left">
            <div className="setting-left-nav">
                <div className="setting-left-nav-font"><Link to="/setting" style={{ color: 'black', textDecoration: 'none' }}>Cài đặt</Link> <label style={{ fontSize: '10pt' }}>{" 〉"}</label> Hỗ trợ</div>
                <div className="setting-left-nav-button">
                    <div
                        className="setting-left-nav-button-icon"
                    >
                        <IoSettingsOutline />
                    </div>
                </div>
            </div>
            <div className="setting-left-scroll" id="setting-left-scroll-style">
                <div className="setting-left-scroll-support-nav">
                    <label className="setting-left-scroll-support-nav-tile">Chào mừng bạn!</label>
                    <label className="setting-left-scroll-support-nav-content">hỗ trợ là nơi để bạn cập nhật thông tin mới về nội dung mình đã báo cáo, xem và trả lời tin nhắn của Đội ngũ hỗ trợ, cũng như đọc thông báo quan trọng về tài khoản của mình.</label>
                </div>
                <div className="setting-left-scroll-support-content">
                    <label className="setting-left-scroll-support-nav-tile" >Trung tâm trợ giúp</label>
                    <Link to="/abc" className="setting-left-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="setting-left-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="setting-left-scroll-menuitem-name" >
                            Trung tâm an toàn
                        </div>
                    </Link>
                    <Link to="/abc" className="setting-left-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="setting-left-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="setting-left-scroll-menuitem-name">
                            Trung tâm phòng ngừa bắt nạt
                        </div>
                    </Link>
                    <Link to="/abc" className="setting-left-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="setting-left-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="setting-left-scroll-menuitem-name">
                            Kiểm tra an toàn
                        </div>
                    </Link>
                </div>
                <div className="setting-left-scroll-support-content">
                    <label className="setting-left-scroll-support-nav-tile">Tiêu chuẩn cộng đồng</label>
                    <Link to="/abc" className="setting-left-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="setting-left-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="setting-left-scroll-menuitem-name">
                            Tiêu chuẩn cộng đồng của chúng tôi
                        </div>
                    </Link>
                   
                  
                </div>
            </div>

        </div>
    );
}

export default SettingLeftSupport;