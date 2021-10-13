import React, { useState } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';

function SettingSecurity(props) {
    const [openbody, setOpenBody] = useState(false)
    
    return (
        <div className="seting-center">
            <div className="seting-center-scroll" id="seting-center-scroll-style">
                <div className="seting-center-scroll-nav">
                    Bảo mật và đăng nhập
                </div>
                <div className="seting-center-scroll-content">
                    <div className="seting-center-scroll-content-security-row">
                        <div className="seting-center-scroll-content-security-row-nav">
                            <label style={{ marginLeft: '5%' }}>Đề xuất</label>
                        </div>
                        <div className="seting-center-scroll-content-security-row-content-row">
                            <label style={{ marginLeft: '5%' }}>Kiểm tra một vài cài đặt quan trọng</label><label className="seting-center-scroll-content-row-link" style={{ width: '10%' }}>Xem</label>
                        </div>
                    </div>
                    <div className="seting-center-scroll-content-security-row">
                        <div className="seting-center-scroll-content-security-row-nav">
                            <label style={{ marginLeft: '5%' }}>Nơi bạn đã đăng nhập</label>
                        </div>
                        <div className="seting-center-scroll-content-security-row-content-row">
                            <label style={{ marginLeft: '5%' }}>name</label><label style={{ marginRight: '2%' }}><IoEllipsisVerticalSharp /></label>
                        </div>
                        <div className="seting-center-scroll-content-security-row-content-row">
                            <label style={{ marginLeft: '5%' }}>name</label><label style={{ marginRight: '2%' }}><IoEllipsisVerticalSharp /></label>
                        </div>
                        <div className="seting-center-scroll-content-security-row-content-row">
                            <label style={{ marginLeft: '5%' }}>name</label><label style={{ marginRight: '2%' }}><IoEllipsisVerticalSharp /></label>
                        </div>
                        <div className="seting-center-scroll-content-security-row-content-row">
                            <label style={{ marginLeft: '5%' }}>name</label><label style={{ marginRight: '2%' }}><IoEllipsisVerticalSharp /></label>
                        </div>
                    </div>
                    <div className="seting-center-scroll-content-security-row">
                        <div className="seting-center-scroll-content-security-row-nav">
                            <label style={{ marginLeft: '5%' }}>Đăng Nhập</label>
                        </div>
                        <div className="seting-center-scroll-content-security-row-content-row">
                            <label style={{ marginLeft: '5%' }}>Đổi mật khẩu</label><label className="seting-center-scroll-content-row-link" style={{ width: '15%' }} onClick={() => setOpenBody(!openbody)}>Chỉnh sửa</label>
                        </div>
                        {openbody && <div className="seting-center-scroll-content-security-row-content-row-resiger">
                        <label className="seting-center-scroll-content-security-row-content-row-resiger-form" style={{ marginLeft: '5%',marginBottom:'3%',marginTop:'2%' }}><label className="seting-center-scroll-content-security-row-content-row-resiger-form-label">Mật khẩu hiện tại</label> <input placeholder="Mật khẩu hiện tại" className="seting-center-scroll-content-security-row-content-row-resiger-form-input" type="password"/></label>
                        <label className="seting-center-scroll-content-security-row-content-row-resiger-form" style={{ marginLeft: '5%',marginBottom:'3%' }}><label className="seting-center-scroll-content-security-row-content-row-resiger-form-label">Mật khẩu mới</label> <input placeholder="Mật khẩu mới" className="seting-center-scroll-content-security-row-content-row-resiger-form-input" type="password"/></label>
                        <label className="seting-center-scroll-content-security-row-content-row-resiger-form" style={{ marginLeft: '5%',marginBottom:'2%' }}><label className="seting-center-scroll-content-security-row-content-row-resiger-form-label">Nhập lại mật khẩu mới</label>  <input placeholder="Nhập lại mật khẩu mới" className="seting-center-scroll-content-security-row-content-row-resiger-form-input" type="password"/></label>
                        <label className="seting-center-scroll-content-security-row-content-row-resiger-form" style={{ marginLeft: '5%',marginBottom:'2%' }}><label className="seting-center-scroll-content-row-link" style={{width:'43%'}}>Quên mật khẩu</label> <label style={{width:'30%'}} className="seting-center-scroll-content-row-link"> Lưu thay đổi</label></label>
                        
                        
                        </div>}

                    </div>
                </div>

            </div>

        </div>
    );
}

export default SettingSecurity;