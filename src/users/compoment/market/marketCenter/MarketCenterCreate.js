import React, { useRef, useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { Link } from "react-router-dom";

function MarketCenterCreate(props) {

    const value = [
        {
            id: "1",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "2",
            avatar: "oto.jpg",
            name: "Bán nhà",
            route: "/marketplace/category/propertyforsale",
            status: "normal",
        },
      
    ];
    const [marketCategory, setMarketCategory] = useState(value)
    const [marketCategory1, setMarketCategory1] = useState("")
    const [marketstatus, setMarketstatus] = useState("")

    // image
    const inputFile = useRef(null)
    const [file, setFile] = useState(true)
    const onButtonClick = () => {
      inputFile.current.click();
      setFile(false)
    };
    const handleChangeimage = () => {
        const fileselected = document.getElementById('file').files;
        if (fileselected) {
          const filetoLoad = fileselected[0];
          const file = new FileReader();
          file.onload = (e) => {
            const srcData = e.target.result;
            const newImage = document.createElement('img');
            newImage.src = srcData;
            document.getElementById('imageCenter').innerHTML = newImage.outerHTML;
           
          }
          file.readAsDataURL(filetoLoad)
        }
    
      }

      //info
      const [valueinfo,setValueinfo]=useState({
        avatar:'',
        tile:'',
        price:'',
        category:'',
        status:'',
        info:'',
        adress:''
    })
    const onChaneValue = (e) =>{
        const { name, value } = e.target;
        setValueinfo({
            ...valueinfo,
            [name]: value
        })
        console.log(valueinfo)
    }
    return (
        <div className="market-layout-center">
            <div className="market-layout-create">
                <div className="market-layout-create-left">
                    <div className="market-layout-create-left-nav" ><Link style={{textDecoration:'none',color:'black'}}  to="/marketplace">Marketplace</Link></div>
                    <div className="market-layout-create-left-scroll" id="market-layout-create-left-scroll-style" >
                        <div className="market-layout-create-left-scroll-item">
                            <div className="market-layout-create-left-scroll-item-icon"><BsImages /></div>
                            <div className="market-layout-create-left-scroll-item-name">Quang</div>
                        </div>
                        <div className="market-layout-create-left-scroll-item" onClick={onButtonClick} >
                            <div className="market-layout-create-left-scroll-item-img" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="market-layout-create-left-scroll-item-icon"><BsImages /></div>
                                <div className="">Thêm ảnh</div>
                            </div>

                        </div>
                        <div className="market-layout-create-left-scroll-item"><input onChange={onChaneValue } name="tile" className="market-layout-create-left-scroll-item-input" type="text" placeholder="Tiêu đề" /></div>
                        <div className="market-layout-create-left-scroll-item"><input onChange={onChaneValue } name="price" className="market-layout-create-left-scroll-item-input" type="text" placeholder="Giá" /></div>
                        <div className="market-layout-create-left-scroll-item"><input onChange={onChaneValue } name="adress" className="market-layout-create-left-scroll-item-input" type="text" placeholder="Địa chỉ" /></div>
                        <div className="market-layout-create-left-scroll-item"><select onChange={onChaneValue } name="category" className="market-layout-create-left-scroll-item-select" value={valueinfo.category}>
                            {
                                marketCategory.map((val) => {
                                    return (
                                        <option value={val.name}>{val.name}</option>
                                    )
                                })
                            }

                        </select></div>
                        <div className="market-layout-create-left-scroll-item"><select className="market-layout-create-left-scroll-item-select" onChange={onChaneValue } name="status" value={valueinfo.status} >

                            <option value="Như mới">Như mới</option>
                            <option value="Mới hoàn toàn">Mới hoàn toàn</option>
                            <option value="đã qua sử dụng">đã qua sử dụng</option>

                        </select></div>
                        <div className="market-layout-create-left-scroll-item">
                            <input className="market-layout-create-left-scroll-item-textarea" onChange={onChaneValue } name="info" placeholder="Thông tin thêm" />

                        </div>
                    </div>
                    <div className="market-layout-create-left-footer"><div className="market-layout-create-left-footer-button">Đăng</div></div>
                </div>
                <div className="market-layout-create-body">
                    <div className="market-layout-create-body-info">

                        <label style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', marginLeft: '3%', fontWeight: '600' }}>  Xem Trước</label>
                        <div className="market-layout-create-body-info-item">
                            <div className="market-layout-create-body-info-item-img" id="imageCenter" />
                            <div className="market-layout-create-body-info-item-info">
                                <div className="market-layout-create-body-info-header">
                                    <div className="market-layout-create-body-info-item-info-form">
                                        <div className="market-layout-create-body-info-item-info-form-tile">{valueinfo.tile}</div>
                                        <div className="market-layout-create-body-info-item-info-form-price">{valueinfo.price}</div>
                                        <div className="market-layout-create-body-info-item-info-form-detail">{valueinfo.adress}</div>
                                        <div className="market-layout-create-body-info-item-info-form-adress">{valueinfo.category}</div>
                                        <div className="market-layout-create-body-info-item-info-form-adress">{valueinfo.status}</div>
                                        <div className="market-layout-create-body-info-item-info-form-adress">{valueinfo.info}</div>
                                        <div className="market-layout-create-body-info-item-info-form-profile">Thông tin về người bán</div>
                                        <div className="market-layout-create-body-info-item-info-form-profile"><div className="market-layout-create-body-info-item-info-form-profile-icon"><BsImages /></div><div className="market-layout-create-body-info-item-info-form-profile-name">Quang</div></div>
                                    </div>
                                </div>
                                <div className="market-layout-create-body-info-footer"><div>Mua</div><div>Thêm vào giỏ hàng</div></div>
                                <input type='file' id='file' ref={inputFile} onChange={handleChangeimage} style={{ display: 'none' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketCenterCreate;