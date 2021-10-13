import React from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function FriendLeftSuggestions({friend}) {
    return (
        <div >
            <Link to="/friends">
            <div className="friend-left-prev-suggestion">
                <GrLinkPrevious />
            </div>
            </Link>
            
            <div style={{float:'left', marginLeft: '10px'}}>
                
                <h2>Gợi ý</h2>
                
            </div>
            
            <br/>
            

            {friend.map((value)=>{
                return (
                <Link style={{textDecoration:'none'}} to={"/friends/friends-suggestion/"+value.id}>
                   
                    <div style={{position: 'relative', top: '30px'}}>   
                        <div className="friend-left-avatar-suggestion">
                            <img  src={value.avt}/>
                        </div> 
                        
                            <h4 style={{textAlign: 'left', marginLeft: '90px', marginBottom: '10px'}}>{value.fullname}</h4> 
                           
                        <button className="friend-left-button-add-friend-suggestion"><h4>Thêm bạn bè</h4></button>  
                        <button className="friend-left-button-delete-suggestion"><h4>Xóa, gỡ bỏ</h4></button>     
                    </div>
                    
                   
                </Link>
            );
            })
            
            }
        </div>
    );
}

export default FriendLeftSuggestions;