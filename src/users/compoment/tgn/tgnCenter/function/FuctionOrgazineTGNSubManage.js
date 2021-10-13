import React from 'react';
import FuctionOrgazineTGNSubManageBANK from './FuctionOrgazineTGNSubManageBANK';
import FuctionOrgazineTGNSubManageDugeon from './FuctionOrgazineTGNSubManageDugeon';
import FuctionOrgazineTGNSubManagePVP from './FuctionOrgazineTGNSubManagePVP';

function FuctionOrgazineTGNSubManage({val, mem, allMem, PATH, TOKEN, keyAPI, accTGN,  setUpdateAcc, setHight}) {
    return (
        <div>
            {val.type_org === "pvp" && <FuctionOrgazineTGNSubManagePVP setHight={setHight} setUpdateAcc={setUpdateAcc} accTGN={accTGN}  val={val} mem={mem} allMem={allMem} PATH={PATH} TOKEN={TOKEN} keyAPI={keyAPI}/>}
            {val.type_org === "pve" && <FuctionOrgazineTGNSubManageDugeon setUpdateAcc={setUpdateAcc} accTGN={accTGN}  setHight={setHight} mem={mem} allMem={allMem} PATH={PATH} TOKEN={TOKEN} keyAPI={keyAPI}  />}
            {val.type_org === "bank" && <FuctionOrgazineTGNSubManageBANK setUpdateAcc={setUpdateAcc} accTGN={accTGN}  setHight={setHight} mem={mem} allMem={allMem} PATH={PATH} TOKEN={TOKEN} keyAPI={keyAPI} />}
        </div>
    );
}

export default FuctionOrgazineTGNSubManage;