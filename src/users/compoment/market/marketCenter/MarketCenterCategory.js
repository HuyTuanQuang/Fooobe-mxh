import React, { useState } from 'react';

function MarketCenterCategory({ marketCategoryvalue }) {
    const value = [
        {
            id: '1',
            name: "Thanh lý bàn chữ z kèm kệ sách trắng. Tặng kèm giá sách.",
            avatar:
                "https://noitoiseden.com/wp-content/uploads/2018/09/anh-thien-nhien-full-hd-2k-4k.jpg",
            price: "200$",
            adress: "Hà nội",
        },
        {
            id: '2',
            name: "Ơromax.",
            avatar:
                "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
            price: "200$",
            adress: "Hà nội",
        },
        {
            id: '3',
            name: "Ơromax.",
            avatar:
                "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
            price: "200$",
            adress: "Hà nội",
        },
        {
            id: '4',
            name: "Ơromax.",
            avatar:
                "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
            price: "200$",
            adress: "Hà nội",
        },
        {
            id: '5',
            name: "Ơromax.",
            avatar:
                "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
            price: "200$",
            adress: "Hà nội",
        },
    ];
    const valueMarket = [
        {
            id: '1',
            name: 'Quang'
        },
        {
            id: '2',
            name: 'Quang depzai'
        },
    ]
    const [marketProduct, setMarketProduct] = useState(value)
    const [marketProduct1, setMarketProduct1] = useState({
        id: '',
        name: "",
        avatar: "",
        price: "",
        adress: "",
    })
    const [open, setOpen] = useState(false)
    const handelClick = (e, val) => {
        setMarketProduct1(val)
        setOpen(!open)
    }

    const infoProduct = (
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', top: '0', left: '0', display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.5)', zIndex: '1' }} onClick={() => setOpen(!open)}>
        </div>
    )
    const infoProduct1 = (
        <div style={{ position: 'absolute', width: '80%', height: '90%', backgroundColor: 'white', top: '5%', left: '5%', display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', zIndex: '1000' }} >
            <div style={{ width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img style={{ width: '40%', height: '93%', display: 'flex', marginLeft: '1%', borderRadius: '10px' }} src={marketProduct1.avatar} />
                <div style={{ width: '57%', display: 'flex', flexDirection: 'column' }}>
                    <label style={{ width: '100%', minHeight: '200px', fontSize: '15pt', fontWeight: '600' }}>{marketProduct1.name}</label>
                    <label style={{ width: '100%', minHeight: '50px', }}>{marketProduct1.price}</label>
                    <label style={{ width: '100%', minHeight: '50px', }}>{marketProduct1.adress}</label>
                    <div style={{ width: '100%', minHeight: '200px', display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ width: '30%', height: '50px', backgroundColor: 'whitesmoke', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Mua
                        </div>
                        <div style={{ width: '30%', height: '50px', backgroundColor: 'whitesmoke', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Thêm vào giỏ hàng
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '5%' }} onClick={() => setOpen(!open)}> đóng</div>
        </div>
    )
    return (
        <div className="market-layout-center">
            <div className="market-layout-center-scroll" id="market-layout-center-scroll-style">
                <div className="market-layout-center-scroll-category-nav">
                    <label className="market-layout-center-scroll-category-nav-tile">Mua sắm theo hạng mục</label>
                    <div className="market-layout-center-scroll-category-nav-category" >
                        {
                            valueMarket.map((value) => {
                                return(
                                    <div className="market-layout-center-scroll-category-nav-category-item" >
                                    {value.name}
                                </div>
                                )
                            })
                        }
                           
                       
                    </div>
                </div>
                <div className="market-layout-center-scroll-category-body">
                    {marketProduct.map((val) => {
                        return (
                            <div className="market-layout-center-scroll-category-card" onClick={(e) => handelClick(e, val)}
                                key={val.id}>
                                <img className="market-layout-center-scroll-category-card-img" width="100%" height="100%" src={val.avatar} />
                                <div className="market-layout-center-scroll-category-card-body">
                                    <label>{val.price}</label>
                                    <label className="market-layout-center-scroll-category-card-body-name">{val.name}</label>
                                    <label className="market-layout-center-scroll-category-card-body-adress">{val.adress}</label>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
            
            {open ? infoProduct : null}
                    {open ? infoProduct1 : null}
        </div>
    );
}

export default MarketCenterCategory;