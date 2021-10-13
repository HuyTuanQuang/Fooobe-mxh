import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./fuctionbuypgdtgn.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function FuctionBuyPGDTGN({TOKEN, PATH, keyAPI}) {
  const valueForm = {
    transfer: "0",
    value: "0",
  };
  const [values, setValues] = useState(valueForm);
  const [hiden, setHiden] = useState(false);
  const [hiden2, setHiden2] = useState(false);
  const [hiden3, setHiden3] = useState(false);
  const [hiden4, setHiden4] = useState(false);
  const [noal, setNoal] = useState(null);
  const [rand, setRand] = useState("-----");
  const creEvent = () => {
    Axios.post(keyAPI.apiTGNEventArea, {
      id: PATH,
      token: TOKEN,
      ev:"transfer",
      idz: values.transfer,
      ts: values.value,
      pgd: values.transfer === "card" ? Math.round((Number(values.value)/10000)*2000) : Math.round((Number(values.value)/10000)*2500)
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            console.log(data)
              if(data.resul !== 400){
                setRand(data.resul)
              }
            
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Truy vấn có vấn đề");
        } else if (error.request) {
          console.log("Không nhận được phản hồi");
        } else {
          console.log("I am Nhân by Fo");
        }
      });
  };
  const onChage = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    if(name === 'value' && value !== '0'){
      setHiden4(true);
    }
  };
  return (
    <div className="fuction-buy-pgd-tgn">
      <div className="fuction-buy-pgd-tgn-top">
        <div
          className="fuction-buy-pgd-tgn-top-button-1"
          onClick={() => {
            setHiden(false);
          }}
          style={
            hiden === false
              ? { backgroundColor: "rgb(240, 240, 240)" }
              : { backgroundColor: "rgb(250, 250, 250)" }
          }
        >
          Nạp PGD
        </div>
        <div
          className="fuction-buy-pgd-tgn-top-button-2"
          onClick={() => {
            setHiden(true);
          }}
          style={
            hiden
              ? { backgroundColor: "rgb(240, 240, 240)" }
              : { backgroundColor: "rgb(250, 250, 250)" }
          }
        >
          ATM Banking
        </div>
      </div>
      <div className="fuction-buy-pgd-tgn-bottom">
        {hiden === false ? (
          <div className="fuction-buy-pgd-tgn-bottom-content-1">
            <div className="fuction-buy-pgd-tgn-bottom-content-1-1">
              <div className="fuction-buy-pgd-tgn-bottom-content-1-1-title">
                NGUYÊN TẮC MUA PGD
              </div>
              <div>
                1. PGD chỉ có tác dụng trên web Foobe, nó không phải là một đơn
                vị tiền tệ thật.
                <br />
                2. Vui lòng tuân thủ các bước thực hiện sau đây, chúng tôi sẽ
                không chịu trách nhiệm hay hoàn trả cho bạn dù bất kỳ lý do gì
                xảy ra.
                <br />
                <div className="fuction-buy-pgd-tgn-bottom-content-1-1-action">
                  Bước 1 - Chọn phương thức thanh toán
                  <br />
                  Bước 2 - Chọn giá trị nạp [10.000 vnđ = 2.500 pgd, tuy nhiên
                  nếu nạp bằng thẻ cào sẽ bị triết khấu 20%. Tương đương 10.000
                  vnđ = 2.000 PGD
                  <br />
                  Bước 3 - Xác nhận lần cuối
                  <br />
                  Bước 4 - Sau khi xác nhận nếu bạn sẽ nhận được một dãy mã nạp
                  và thì một tab form nạp sẽ được mở ra. Vui lòng điền đầy đủ
                  thông tin thẻ trong link form đó.
                  <br />
                </div>
                3. Việc duyệt nạp PGD là thủ công nên quá trình có thể mất từ 5
                phút đến 1 giờ, nếu sau 1h mà vẫn chưa nhận được thông báo nạp
                thành công. Vui lòng nhấp vào link sau và imbox yêu cầu.
              </div>
              <div className="fuction-buy-pgd-tgn-bottom-content-1-1-end">
                <div
                  className="fuction-buy-pgd-tgn-bottom-content-1-1-button"
                  onClick={() => {
                    setHiden2(!hiden2);
                    setHiden3(false);
                    setHiden4(false);
                    setRand("-----");
                    setNoal(null);
                  }}
                >
                  {hiden2 === false ? "Tôi đồng ý" : "Hủy"}
                </div>
              </div>
            </div>
            {hiden2 && (
              <div className="fuction-buy-pgd-tgn-bottom-content-1-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    setNoal(true);
                    setHiden3(true);
                    setValues({
                      ...values,
                      transfer: "card",
                    });
                  }}
                  color={noal !== null && noal === true ? "primary" : "default"}
                >
                  Nạp bằng card
                </Button>
                <br />
                <Button
                  variant="contained"
                  onClick={() => {
                    setNoal(false);
                    setHiden3(true);
                    setValues({
                      ...values,
                      transfer: "bank",
                    });
                  }}
                  color={
                    noal !== null && noal === false ? "primary" : "default"
                  }
                >
                  Chuyển khoản ngân hàng
                </Button>
              </div>
            )}
            {hiden3 && (
              <div className="fuction-buy-pgd-tgn-bottom-content-1-3">
                <select
                  name="value"
                  className="fuction-buy-pgd-tgn-bottom-content-1-3-select"
                  onChange={onChage}
                >
                  <option value="0" selected disabled checked>
                    Giá trị nạp
                  </option>
                  <option value="10000">10.000 vnđ</option>
                  <option value="20000">20.000 vnđ</option>
                  <option value="30000">30.000 vnđ</option>
                  <option value="50000">50.000 vnđ</option>
                  <option value="100000">100.000 vnđ</option>
                  <option value="200000">200.000 vnđ</option>
                  <option value="500000">500.000 vnđ</option>
                </select>
              </div>
            )}
            <div className="fuction-buy-pgd-tgn-bottom-content-1-3">
              {hiden4 && (
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={creEvent}
                  >
                    Xác nhận
                  </Button>
                </div>
              )}
              {rand !== "-----" && (
                <div>
                  <div>Sử dụng đoạn mã sau trong phần tin gửi</div>
                  <div className="fuction-buy-pgd-tgn-bottom-content-1-4">
                    {rand}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="fuction-buy-pgd-tgn-bottom-content-2">
            Chức năng này hiện không khả dụng
          </div>
        )}
      </div>
    </div>
  );
}

export default FuctionBuyPGDTGN;
