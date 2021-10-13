import React from 'react';
import TGNMenuAdminAd from './submenu/TGNMenuAdminAd';
import TGNMenuAdminAdchap from './submenu/TGNMenuAdminAdchap';
import TGNMenuAdminMod from './submenu/TGNMenuAdminMod';
import TGNMenuAdminOperator from './submenu/TGNMenuAdminOperator';

function TGNMenuAdmin({trans, bgMau, keyAPI, dataAcc, accTGN}) {
    return (
        <div>
            {
                accTGN.type_account === "admin" && <TGNMenuAdminAd />
                
            }
            {
                 accTGN.type_account === "operator" && <TGNMenuAdminOperator />
            }
            {
                 accTGN.type_account === "adchap" && <TGNMenuAdminAdchap />
            }
            {
                 accTGN.type_account === "mod" && <TGNMenuAdminMod />
            }
        </div>
    );
}

export default TGNMenuAdmin;