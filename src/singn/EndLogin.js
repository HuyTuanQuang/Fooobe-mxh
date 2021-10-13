import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function EndLogin({keyAPI, TOKEN, setFooobe, setBgMau}) {
    let history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
    useEffect(() => {
        setFooobe(false);
        Axios.post(keyAPI.apiEndLogin,{
            id: cookies.fo_uim,
            token: TOKEN,
          })
        .then(({ data }) => {
            removeCookie("fo_uim");
            removeCookie("fo_token");
            setFooobe(true);
            setBgMau("white")
            history.push("/login");
        })
        .catch((error) => {
            console.log(error)
            removeCookie("fo_uim");
            removeCookie("fo_token");
            setFooobe(true);
            setBgMau("white")
            history.push("/login");
        });
    })

    return (
        <div>
            
        </div>
    );
}

export default EndLogin;