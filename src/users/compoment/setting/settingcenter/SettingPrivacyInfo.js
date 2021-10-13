import React, { useState } from 'react';

function SettingPrivacyInfo(props) {
    const [open, setOpen] = useState(false)
    const [openradio, setOpenradio] = useState(true)
    const [openradio1, setOpenradio1] = useState(false)
    const onClickradio = () => {
        setOpenradio(!openradio)
        setOpenradio1(!openradio1)
        console.log(openradio)
    }
    const body = [
        <div onClick={() => setOpen(!open)} style={{ position: 'absolute', width: '100%', height: '100%', background:'rgba(0,0,0,0.5)', top: '0', left: '0', zIndex: '1' }}>
        </div>
    ]
    const bodysmail = [
        <div className="seting-privacy-center-info-bodysmail" style={{ zIndex: '100' }}>
            <label style={{ padding: '5%', fontWeight: '600', fontSize: '13pt' }}>Vô hiệu hóa hoặc xóa tài khoản Fooobe</label>
            <label style={{ width: '80%', marginLeft: '5%', marginBottom: '1%' }}>Nếu muốn tạm ngừng sử dụng Facebook, bạn có thể vô hiệu hóa Tài khoản. Còn nếu muốn xóa vĩnh viễn Tài khoản Fooobe, hãy cho chúng tôi biết nhé.</label>
            <div onClick={onClickradio} style={{ width: '89%', minHeight: '80px', border: '0.5px solid aqua', marginBottom: '10px', borderRadius: '10px', marginLeft: '5%', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '2%' }}>
                    <input type="Radio" checked={openradio} />
                </div>
                <div style={{ width: '80%', display: 'flex', flexDirection: 'column', marginBottom: '5px' }}>
                    <label style={{ fontWeight: '600' }}>Vô hiệu hóa tài khoản</label>
                    <label className="seting-font-pale" style={{ fontWeight: '600', fontSize: '11pt' }}>Hành động này có thể là tạm thời.</label>
                    <label>Hệ thống sẽ vô hiệu hóa tài khoản, cũng như gỡ tên và ảnh của bạn khỏi hầu hết những gì bạn đã chia sẻ.</label>
                </div>
            </div>
            <div onClick={onClickradio} style={{ width: '89%', minHeight: '80px', border: '0.5px solid aqua', marginBottom: '10px', borderRadius: '10px', marginLeft: '5%', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '2%' }}>
                    <input type="Radio" checked={openradio1} />
                </div>
                <div style={{ width: '80%', display: 'flex', flexDirection: 'column', marginBottom: '5px' }}>
                    <label style={{ fontWeight: '600' }}>Xóa tài khoản</label>
                    <label className="seting-font-pale" style={{ fontWeight: '600', fontSize: '11pt' }}>Hành động này là vĩnh viễn.</label>
                    <label>Khi xóa tài khoản Facebook, bạn sẽ không thể truy xuất nội dung hoặc thông tin mình đã chia sẻ trên Fooobe và tất cả Tin nhắn của bạn cũng sẽ bị xóa đi.</label>
                </div>
            </div>
            <div className="seting-privacy-center-info-bodysmail-bottom" >
                <button onClick={() => setOpen(!open)} style={{ fontWeight: '600', marginRight: '3px', height: '40%', borderRadius: '7px', outline: 'none', border: 'none' }}>Hủy</button>{openradio ? <button style={{ borderRadius: '7px', marginRight: '3px', height: '40%', outline: 'none', border: 'none', fontWeight: '600', marginRight: '5px' }}>Tiếp tục vô hiệu hóa tài khoản</button> : <button style={{ borderRadius: '7px', marginRight: '3px', height: '40%', outline: 'none', border: 'none', fontWeight: '600', marginRight: '5px' }}>Tiếp tục xóa tài khoản</button>}
            </div>

        </div>
    ]
    return (
        <div className="seting-center">
            <div className="seting-center-scroll" id="seting-center-scroll-style">
                <div className="seting-center-scroll-nav">
                    Thông tin của bạn trên Fooobe
                </div>
                <div className="seting-center-scroll-content">
                    <div className="seting-center-scroll-content-row">
                        <div className="seting-center-scroll-content-row-th">
                            Xem thông tin
                        </div>
                        <div className="seting-center-scroll-content-row-td">
                            Xem thông tin cá nhân của bạn theo hạng mục
                        </div>
                        <div className="seting-center-scroll-content-row-link">
                            Xem
                        </div>
                    </div>
                    <div className="seting-center-scroll-content-row">
                        <div className="seting-center-scroll-content-row-th">
                            Nhật ký hoạt động
                        </div>
                        <div className="seting-center-scroll-content-row-td">
                            Xem và quản lý lịch sử hoạt động
                        </div>
                        <div className="seting-center-scroll-content-row-link">
                            Xem
                        </div>
                    </div>
                    <div className="seting-center-scroll-content-row">
                        <div className="seting-center-scroll-content-row-th">
                            Vô hiệu hóa
                        </div>
                        <div className="seting-center-scroll-content-row-td">
                            Vô hiệu hóa tạm thời hoặc khóa tài khoản
                        </div>
                        <div className="seting-center-scroll-content-row-link" onClick={() => setOpen(!open)}>
                            Xem
                        </div>
                    </div>
                    <div style={{ width: '99%', borderBottom: '0.1px solid aqua', marginTop: '14px', marginLeft: '1%' }}></div>
                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                <div className="seting-center-scroll-footer">

                </div>
            </div>
            {open && bodysmail}
            {open && body}

        </div>
    );
}

export default SettingPrivacyInfo;