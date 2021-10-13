<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';

$data = json_decode(file_get_contents("php://input"));

        $id = $data->id;
        $allAccount = mysqli_query($db_con,"SELECT `id`,`birthday`,`address`,`avatar`,`interests`,AES_DECRYPT(`account`, 'yeuem') AS 'account',AES_DECRYPT(`password`, 'yeuem') AS 'password', `fristname`,`lastname`, `nickname`, `sex`, `type_account`, `status_acount`, `resgiser_time` FROM `account` WHERE `id`='$id'");
        if(mysqli_num_rows($allAccount) > 0){
            $all_users = mysqli_fetch_all($allAccount,MYSQLI_ASSOC);
            echo json_encode($all_users);
        }
        else{
            echo json_encode(["resul"=>0]);
        }
    
   
?>