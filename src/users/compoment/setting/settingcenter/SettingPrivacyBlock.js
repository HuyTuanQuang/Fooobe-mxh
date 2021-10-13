import React, { useState } from 'react';

function SettingPrivacyBlock(props) {
    const [listblock, setlistblock] = useState([
        {
            id: '1',
            name: 'Quang'
        },
        {
            id: '2',
            name: 'Phương'
        },
        {
            id: '3',
            name: 'Chương'
        },
        {
            id: '4',
            name: 'Mạnh'
        },
        {
            id: '5',
            name: 'hoa'
        },
    ])
    const Remove = (id) => {
        const newList = listblock.filter((val) => val.id !== id);
        
        setlistblock(newList)
        
    }
    const [seach,setSeach]=useState("")
    const onChaneSeach = (e) =>{
        setSeach(e.target.value)
    }

    return (
        <div className="seting-center">
            <div className="seting-center-scroll" id="seting-center-scroll-style">
                <div className="seting-center-scroll-nav">
                    Quản lý chặn
                </div>
                <div className="seting-center-scroll-content">
                    <div className="seting-center-scroll-content-privacy-row">
                        <div className="seting-center-scroll-content-privacy-row-th">
                            Lối tắt quyền riêng tư
                        </div>
                        <div className="seting-center-scroll-content-privacy-td">
                            <label className="seting-font-pale"> Ngay khi bạn chặn ai đó, người này không thể xem nội dung đăng trên dòng thời gian của bạn, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn hay thêm bạn vào danh sách bạn bè nữa. Lưu ý: Không bao gồm các ứng dụng, trò chơi hay nhóm mà cả bạn và người này đều tham gia.</label>

                        </div>
                    </div>
                    <div className="seting-center-scroll-content-privacy-row">
                        <div className="seting-center-scroll-content-privacy-th">

                        </div>
                        <div className="seting-center-scroll-content-privacy-td" style={{ minHeight: '50px', backgroundColor: 'aquamarine', display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontWeight: '600', margin: '5px' }}>Danh sách chặn</label><input style={{height:'20px',width:'50%',outline:'none',border:'none',marginLeft:'3px',borderRadius:'10px',display:'flex',paddingLeft:'10px',marginBottom:'3px'}} onChange={onChaneSeach} type="text"/>
                            {listblock.filter((val)=>{
                                if(seach== ""){
                                    return val
                                }else if(val.name.toLowerCase().includes(seach.toLowerCase())){
                                    console.log(val.name.toLowerCase().includes(seach.toLowerCase()))
                                    return val
                                }
                            }).map((val) => {
                                return (           
                                    <label  key={val.id}  style={{ padding: '10px',width:'100%', display: 'flex', justifyContent: 'space-between' }}>{val.name} <label className="seting-center-scroll-content-row-link" style={{width:'30%'}} onClick={()=>Remove(val.id)}>Bỏ chặn</label></label>
                                )
                                })}
                        </div>
                    </div>

                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>

                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                <div className="seting-center-scroll-footer">

                </div>
            </div>
        </div>
    );
}

export default SettingPrivacyBlock;