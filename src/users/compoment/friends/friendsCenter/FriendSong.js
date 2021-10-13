import React from 'react';
import { BsFillPeopleFill} from 'react-icons/bs';

function FriendSong(props) {
    return (
        <div>   
            <div style={{fontSize: '80px', color: '#65676b', marginTop: '3em'}}>
                <BsFillPeopleFill/>
            </div>

            <div style={{color: '#65676b'}}>
                <h3>Chọn tên danh sách tùy chỉnh để xem bạn bè trong đó.</h3>
            </div>
        </div>
    );
}

export default FriendSong;