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
    $comment = $data->comment;
}
$checkClient = checkAccessToken($token, $id);

$today = date("Y-m-d H:i:s");
$date = date($today, time());

if($checkClient == "accep"){
                $allStory = mysqli_query($db_con,"SELECT `rep_cmt_stt` AS 'STT', `id` AS 'ID', `sticker` AS 'STICKER', `image_video` 
                AS 'IMAGEVIDEO', `type_comment` AS 'TYPECMT',  `content` AS 'CONTENT', `fake_comment` AS 'FAKECOMMENT', `time_cmt` AS 'TIMECMT', (SELECT COUNT(*) FROM `react_rep_comment` WHERE `react_rep_comment`.`rep_cmt_stt` = `rep_comment`.`rep_cmt_stt` AND `status` = 'normal') AS 'COUNTREACT', (SELECT `account`.`avatar` FROM `account` WHERE `account`.`id` = `rep_comment`.`id`) AS 'AVATAR' , (SELECT `account`.`fristname` FROM `account` WHERE `account`.`id` = `rep_comment`.`id`) AS 'FRISTNAME', (SELECT `account`.`lastname` FROM `account` WHERE `account`.`id` = `rep_comment`.`id`) AS 'LASTNAME', (SELECT account.account_confirmed FROM account 
                 WHERE account.id = `rep_comment`.`id`) AS 'ACCESSCONFIG', (SELECT `react_rep_comment`.`content` FROM `react_rep_comment` WHERE `react_rep_comment`.`rep_cmt_stt` = `rep_comment`.`rep_cmt_stt` AND `react_rep_comment`.`id` = '$id'  AND `status` = 'normal') AS 'TYPEREACT'   FROM `rep_comment` WHERE `comment_stt` = $comment AND `status` = 'normal' ORDER BY  `time_cmt` DESC LIMIT 0, 50");
                if(mysqli_num_rows($allStory) > 0){
                    $all_post = mysqli_fetch_all($allStory,MYSQLI_ASSOC);
                    
                    echo json_encode(["comment"=>array_reverse($all_post)]);
                }
                else{
                    echo json_encode(["resul"=>0]);
                }
            }else{
                echo json_encode(["check"=>$checkClient]);
            }
    
        
        
    
   
?>