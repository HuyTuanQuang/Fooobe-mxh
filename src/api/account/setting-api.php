<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';

$data = json_decode(file_get_contents("php://input"));

        $ID = $data->id;
        $allSetting = mysqli_query($db_con,"SELECT * FROM `settings` WHERE `id`='$ID'");
        if(mysqli_num_rows($allSetting) > 0){
            $all_users = mysqli_fetch_all($allSetting,MYSQLI_ASSOC);
            echo json_encode($all_users);
        }
        else{
            echo json_encode(["resul"=>1]);
        }
    
   
?>