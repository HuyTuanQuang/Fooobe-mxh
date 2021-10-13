import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

function SettingPrivacyPost(props) {
    const [friendstatus, setfriendstatus] = useState("Mọi người")
    const [friendstatus1, setfriendstatus1] = useState("Mọi người")
    const [friendstatus2, setfriendstatus2] = useState("Mọi người")
    const [friendstatus3, setfriendstatus3] = useState("Mọi người")
  
    return (
        <div className="seting-center">
            <div className="seting-center-scroll" id="seting-center-scroll-style">

                <div className="seting-center-scroll-nav">
                    Thông tin của bạn trên Fooobe
                </div>
                <div className="seting-center-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="seting-center-scroll-content-privacy-th"  >
                        Ai có thể theo dõi tôi
                    </div>
                    <div className="seting-center-scroll-content-privacy-td" >
                        <label className="seting-center-scroll-content-privacy-td-label seting-font-pale" >Người theo dõi sẽ nhìn thấy bài viết của bạn trong Bảng tin. Theo mặc định thì bạn bè sẽ theo dõi bài viết của bạn, nhưng bạn cũng có thể để những người không phải là bạn bè theo dõi bài viết công khai của mình. Hãy sử dụng cài đặt này để chọn người có thể theo dõi bạn.</label>

                    </div>

                    <div className="seting-center-scroll-content-row-link" > <div style={{ Width: '100%', height: '40px', display: 'flex', justifyContent: 'center' }}>
                        <select value={friendstatus} onChange={(e)=> setfriendstatus(e.target.value)} style={{ width: '100%', height: '30px', outline: 'none', borderRadius: '10px' }}>
                            <option value="Mọi người">Mọi người</option>
                            <option value="Bạn bè">Bạn bè</option>
                            <option value="chỉ mình tôi">Chỉ mình tôi</option>
                        </select>

                    </div></div>

                </div>

                <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>
                <div className="seting-center-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="seting-center-scroll-content-privacy-th" >
                        Ai có thể bình luận
                    </div>
                    <div className="seting-center-scroll-content-privacy-td" >
                        <label className="seting-center-scroll-content-privacy-td-label seting-font-pale" >Ai có thể bình luận về những bài viết công khai của bạn?</label>

                    </div>

                    <div className="seting-center-scroll-content-row-link" > <div style={{ Width: '100%', height: '40px', display: 'flex', justifyContent: 'center' }}>
                        <select value={friendstatus1}  onChange={(e)=> setfriendstatus1(e.target.value)} style={{ width: '100%', height: '30px', outline: 'none', borderRadius: '10px' }}>
                            <option value="Mọi người">Mọi người</option>
                            <option value="Bạn bè">Bạn bè</option>
                            <option value="chỉ mình tôi">Chỉ mình tôi</option>
                        </select>

                    </div></div>

                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>
                <div className="seting-center-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="seting-center-scroll-content-privacy-th" >
                        Thông tin cá nhân
                    </div>
                    <div className="seting-center-scroll-content-privacy-td" >
                        <label className="seting-center-scroll-content-privacy-td-label seting-font-pale" >Ai có thể thích hoặc bình luận về ảnh đại diện công khai và các thông tin khác trên trang cá nhân của tôi?</label>

                    </div>


                    <div className="seting-center-scroll-content-row-link" > <div style={{ Width: '100%', height: '40px', display: 'flex', justifyContent: 'center' }}>
                        <select value={friendstatus2}  onChange={(e)=> setfriendstatus2(e.target.value)} style={{ width: '100%', height: '30px', outline: 'none', borderRadius: '10px' }}>
                            <option value="Mọi người">Mọi người</option>
                            <option value="Bạn bè">Bạn bè</option>
                            <option value="chỉ mình tôi">Chỉ mình tôi</option>
                        </select>

                    </div></div>

                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>
                <div className="seting-center-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="seting-center-scroll-content-privacy-th" >
                        Thông báo về bài viết
                    </div>
                    <div className="seting-center-scroll-content-privacy-td" >
                        <label className="seting-center-scroll-content-privacy-td-label seting-font-pale" >Bạn có thể được thông báo khi những người không phải là bạn bè bắt đầu theo dõi bạn và chia sẻ, thích hay bình luận về những bài viết công khai của bạn. Bật thông báo này cho</label>

                    </div>


                    <div className="seting-center-scroll-content-row-link" > <div style={{ Width: '100%', height: '40px', display: 'flex', justifyContent: 'center' }}>
                        <select value={friendstatus3}  onChange={(e)=> setfriendstatus3(e.target.value)} style={{ width: '100%', height: '30px', outline: 'none', borderRadius: '10px' }}>
                            <option value="Mọi người">Mọi người</option>
                            <option value="Bạn bè">Bạn bè</option>
                            <option value="chỉ mình tôi">Chỉ mình tôi</option>
                        </select>

                    </div></div>

                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>

                <div className="seting-center-scroll-footer">

                </div>
            </div>

        </div>
    );
}

export default SettingPrivacyPost;