<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';
include_once "../account/access-token.php";
$data = json_decode(file_get_contents("php://input"));
$id = "";
$token = "";

if($data === null){
    echo "Không có tuổi nhé em =))\n";
}else{
    $id = $data->id;
    $token = $data->token;
}
$checkClient = checkAccessToken($token, $id);


            if($checkClient == "accep"){
                    $allSticker1 = mysqli_query($db_con,"SELECT  `type_react_stt` AS 'REACTSTT', `type_react_avatar` AS 'REACTAVT',`type_react_name` AS 'REACTNAME', `type_react_code` AS 'REACTCODE' FROM `type_react` WHERE `type_react_status` = 'public'");
                    if(mysqli_num_rows($allSticker1) > 0){
                        $all_react1 = mysqli_fetch_all($allSticker1,MYSQLI_ASSOC);
                        echo json_encode(["type"=>$all_react1]);
                    }else{
                        echo json_encode(["resul"=>0]);
                    }
                }else{
                    echo json_encode(["check"=>$checkClient]);
    }
    
        
        
    
   
?>