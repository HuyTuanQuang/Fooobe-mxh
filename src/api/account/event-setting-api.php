<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';
include_once "../account/access-token.php";
include_once "../format/rand_token.php";
$data = json_decode(file_get_contents("php://input"));
date_default_timezone_set('Asia/Ho_Chi_Minh');
$id = "";
$token = "";
$idz = "";
$ev = "";
$ts = "";
$tsv = "";
$tsc = "";
$tsy = "";
$tsx = "";
if ($data === null) {
    echo "Không có tuổi nhé em =))\n";
} else {
    $id = $data->id;
    $token = $data->token;
    $ev = $data->ev;
}
$checkClient = checkAccessToken($token, $id);


$today = date("Y-m-d H:i:s");
$date = date($today, time());

if ($checkClient == "accep") {
    if ($ev == "changeMode") {
        $ts = $data->ts;
        $history = mysqli_query($db_con, "UPDATE `settings` SET `back_ground_fooobe` = '$ts' WHERE `settings`.`id` = '$id'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    
    
    
} else {
    echo json_encode(["check" => $checkClient]);
}
?>