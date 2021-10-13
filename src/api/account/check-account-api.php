<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';

$data = json_decode(file_get_contents("php://input"));

        $email = $data->email;
        $allAccount = mysqli_query($db_con,"SELECT `id` FROM `account` WHERE AES_DECRYPT(`account`, 'yeuem')='$email'");
        if(mysqli_num_rows($allAccount) > 0){
            $all_users = mysqli_fetch_all($allAccount,MYSQLI_ASSOC);
            echo json_encode(["resul"=>1]);
        }
        else{
            echo json_encode(["resul"=>0]);
        }
    
   
?>