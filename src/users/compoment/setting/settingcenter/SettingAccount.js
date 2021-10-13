import React, { useState } from 'react';

function SettingAccount(props) {
    const value = {
        ho: 'Huy',
        tendem: '',
        name: 'Quang',
    }
    const [name, setName] = useState(value);
    const [name1, setname1] = useState(name)

    const onChangeName = (e) => {
        const { name, value } = e.target;

        setname1({
            ...name1,
            [name]: value
        });
        setInfo("")
        console.log(name1)
    }
    const [info, setInfo] = useState("")
    const validateform = () => {
        if (name1.ho.length === 0) {
            setInfo("Thiếu họ")
        } else if (name1.name.length === 0) {
            setInfo("Thiếu tên")
        } else if (!isNaN(name1)) {
            setInfo("!số")
        } else {
            setName(name1)
            setInfo("")
        }
        console.log(info)
    }
    const onClick = (e) => {
        if (validateform) {
            return validateform();
        }
    }

    //   user name
    const [info1, setInfo1] = useState("")
    const [username, setUsername] = useState('m19036420970019')
    const [editusername, setEditUsername] = useState(username)
    const onChangeusername = (e) => {
        setEditUsername(e.target.value)
    }

    const onClickusername = () => {
        if (editusername === "") {
            setInfo1("*")
            console.log(editusername.length)
        } else if (editusername.length <= 5) {
            setInfo1("*")
            console.log(isNaN(editusername))
        } else if (!isNaN(editusername) ) {
            setInfo1("*")
            
        } else {
            setInfo1("")
            setUsername(editusername)

        }
    }

    //
    const [openname, setOpenname] = useState(false)
    const [openname1, setOpenname1] = useState(false)
    const [openname2, setOpenname2] = useState(false)
    const [openradio, setOpenradio] = useState(false)
    return (
        <div className="seting-center">
            <div className="seting-center-scroll" id="seting-center-scroll-style">
                <div className="seting-center-scroll-nav">
                    Cài đặt chung cho tài khoản
                </div>
                <div className="seting-center-scroll-content">
                    <div className="seting-center-scroll-content-row">
                        <div className="seting-center-scroll-content-row-th">
                            Tên
                        </div>
                        <div className="seting-center-scroll-content-row-td">
                            {name.ho}  {name.tendem} {name.name}
                        </div>
                        {openname ? <div className="seting-center-scroll-content-row-link" onClick={() => setOpenname(!openname)}>
                            Đóng
                        </div>
                            : <div className="seting-center-scroll-content-row-link" onClick={() => setOpenname(!openname)}>
                                Chỉnh sửa
                            </div>
                        }

                    </div>
                    {
                        openname && <div className="seting-center-scroll-content-row" style={{ backgroundColor: 'floralwhite' }}>
                            <div className="seting-center-scroll-content-row-form">
                                <form>
                                    <div className="seting-center-scroll-content-row-form-input"><label style={{ width: '20%' }}>Họ </label><input name="ho" onChange={onChangeName} value={name1.ho} className="seting-center-scroll-content-row-form-input-text" type="text" /><label className="seting-font-pale" style={{ width: '20%' }}>{info === "Thiếu họ" || info === "!số" ? info : '*'}</label></div>
                                    <div className="seting-center-scroll-content-row-form-input"><label style={{ width: '20%' }}>Tên đệm </label>  <input name="tendem" value={name1.tendem} placeholder="Không bắt buộc" onChange={onChangeName} className="seting-center-scroll-content-row-form-input-text" type="text" /><label className="seting-font-pale" style={{ width: '20%' }}></label></div>
                                    <div className="seting-center-scroll-content-row-form-input"><label style={{ width: '20%' }}>Tên </label> <input name="name" onChange={onChangeName} value={name1.name} className="seting-center-scroll-content-row-form-input-text" type="text" /><label className="seting-font-pale" style={{ width: '20%' }}>{info === "Thiếu tên" || info === "!số" ? info : '*'}</label></div>
                                    <div className="seting-center-scroll-content-row-form-input" style={{ display: 'flex', justifyContent: 'space-around' }}><div className="seting-center-scroll-content-row-form-input-button" onClick={onClick}>Xem lại thay đổi</div><div className="seting-center-scroll-content-row-form-input-button" onClick={() => setOpenname(false)}>Hủy</div></div>
                                </form>
                            </div>

                        </div>
                    }
                    <div className="seting-center-scroll-content-row">
                        <div className="seting-center-scroll-content-row-th">
                            Tên người dùng
                        </div>

                        <div className="seting-center-scroll-content-row-td">
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                https://www.fooobe.com/{username}
                            </div>


                        </div>

                        {openname1 ? <div className="seting-center-scroll-content-row-link" onClick={() => setOpenname1(!openname1)}>
                            Đóng
                        </div>
                            : <div className="seting-center-scroll-content-row-link" onClick={() => setOpenname1(!openname1)}>
                                Chỉnh sửa
                            </div>
                        }
                    </div>
                    {
                        openname1 && <div className="seting-center-scroll-content-row" style={{ backgroundColor: 'floralwhite' }}>
                            <div className="seting-center-scroll-content-row-form">
                                <div className="seting-center-scroll-content-row-form-input"><label> Tên người dùng</label><input value={editusername} onChange={onChangeusername} className="seting-center-scroll-content-row-form-input-text" style={{ width: '50%' }} type="text" /><label className="seting-font-pale" style={{ width: '25%' }}>{info1 ? info1 : null}</label></div>
                                <div className="seting-center-scroll-content-row-form-input" style={{ display: 'flex', justifyContent: 'space-around' }}><div className="seting-center-scroll-content-row-form-input-button" onClick={onClickusername} >Xem lại thay đổi</div><div onClick={() => setOpenname1(false)} className="seting-center-scroll-content-row-form-input-button">Hủy</div></div>
                            </div>

                        </div>
                    }
                    <div className="seting-center-scroll-content-row">
                        <div className="seting-center-scroll-content-row-th">
                            Cài đặt tưởng nhớ
                        </div>
                        <div className="seting-center-scroll-content-row-td">
                            Khi qua đời tài khoản của bạn sẽ xảy ra quyết định gì.
                        </div>
                        {openname2 ? <div className="seting-center-scroll-content-row-link" onClick={() => setOpenname2(!openname2)}>
                            Đóng
                        </div>
                            : <div className="seting-center-scroll-content-row-link" onClick={() => setOpenname2(!openname2)}>
                                Chỉnh sửa
                            </div>
                        }
                    </div>
                    {
                        openname2 && <div className="seting-center-scroll-content-row" style={{ backgroundColor: 'floralwhite' }}>
                            <div className="seting-center-scroll-content-row-form">
                                <div className="seting-center-scroll-content-row-form-input"><label> Vô hiệu hóa tài khoản khi mất</label><input className="seting-center-scroll-content-row-form-input-text" style={{ width: '40%' }} checked={openradio} onClick={() => setOpenradio(!openradio)} type="radio" /></div>
                                <div className="seting-center-scroll-content-row-form-input" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}><div className="seting-center-scroll-content-row-form-input-button" >Xác nhận</div><div className="seting-center-scroll-content-row-form-input-button">Hủy</div></div>
                            </div>

                        </div>
                    }
                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                <div className="seting-center-scroll-footer">

                </div>
            </div>

        </div>
    );
}

export default SettingAccount;