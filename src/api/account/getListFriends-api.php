<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';
include_once "../account/access-token.php";
$data = json_decode(file_get_contents("php://input"));
date_default_timezone_set('Asia/Ho_Chi_Minh');
$id = "";
$token = "";

if($data === null){
    echo "Không có tuổi nhé em =))\n";
}else{
    $id = $data->id;
    $token = $data->token;
}
$checkClient = checkAccessToken($token, $id);

$today = date("Y-m-d H:i:s");
$date = date($today, time());

        
     

if($checkClient == "accep"){
                $allStory = mysqli_query($db_con,"SELECT (SELECT CONCAT(`account`.`fristname`,' ',`account`.`lastname`) FROM `account` WHERE `account`.`id` = `friends`.`friend_id`) AS 'name', `friend_id` AS 'link',  (SELECT CONCAT('/foanime/',`account`.`avatar`) FROM `account` WHERE `account`.`id` = `friends`.`friend_id`) AS 'avatar' FROM `friends` WHERE `id` = '$id' AND `status` = 'accep' AND `status_storys` = 'normal'");
                if(mysqli_num_rows($allStory) > 0){
                    $all_post = mysqli_fetch_all($allStory,MYSQLI_ASSOC);
                    
                    echo json_encode(["friend"=>array_reverse($all_post)]);
                }
                else{
                    echo json_encode(["resul"=>0]);
                }
            }else{
                echo json_encode(["check"=>$checkClient]);
            }
        
    
    
        
        
    
   
?>