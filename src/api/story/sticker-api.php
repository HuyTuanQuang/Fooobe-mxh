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
                $allSticker = mysqli_query($db_con,"SELECT `sticker_stt` AS 'KEY', `st_name` AS 'NAME', `st_album` AS 'ALBUM', `st_react` AS 'REACTS' FROM `sticker` WHERE `st_status` = 'public'");
                if(mysqli_num_rows($allSticker) > 0){
                    $all_react = mysqli_fetch_all($allSticker,MYSQLI_ASSOC);
                    echo json_encode(["sticker"=>$all_react]);
                }
                else{
                    echo json_encode(["resul"=>0]);
                }
            }else{
                echo json_encode(["check"=>$checkClient]);
            }

     
        
        
    
   
?>