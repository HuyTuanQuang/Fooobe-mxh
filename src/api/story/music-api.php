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
date_default_timezone_set('Asia/Ho_Chi_Minh');

    $today = date("Y-m-d H:i:s");
    $date = date($today, time());
    
   

    if($checkClient == "accep"){
                $allMusic = mysqli_query($db_con,"SELECT `music_stt` AS 'MUSICSTT', `music_name` AS 'MUSICNAME', `music_file` AS 'MUSICFILE', `music_songs` AS 'MUSICSONG', `music_avatar` AS 'MUSICAVATAR', `music_time` AS 'MUSICTIME', `id` AS 'ID' FROM `music` WHERE `music_status` = 'public' AND `music_date` < '$date' ORDER BY `music_view` DESC LIMIT 20");
                if(mysqli_num_rows($allMusic) > 0){
                    $all_music = mysqli_fetch_all($allMusic,MYSQLI_ASSOC);
                    echo json_encode(["music"=>$all_music]);
                }
                else{
                    echo json_encode(["resul"=>0]);
                }
            }else{
                echo json_encode(["check"=>$checkClient]);
            }
     
    

?>