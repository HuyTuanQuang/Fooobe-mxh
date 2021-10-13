<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';
include_once "../format/ip_client.php";
$data = json_decode(file_get_contents("php://input"));
date_default_timezone_set('Asia/Ho_Chi_Minh');
$id = "";
$token = "";
$ipz = "";
$newIP = "";

if ($data === null) {
    echo "Không có tuổi nhé em =))\n";
} else {
    $id = $data->id;
    $token = $data->token;
}

$today = date("Y-m-d H:i:s");
$date = date($today, time());
    $checkIsIP = mysqli_query($db_con, "SELECT `acc_ip` AS 'IP' FROM `account` WHERE `account`.`id` = '$id' AND `account`.`acc_ip` != ''");
    if (mysqli_num_rows($checkIsIP) > 0) {
        while ($row = mysqli_fetch_assoc($checkIsIP)) {
            $ipz = $row["IP"];
        }
        $oldIP = $ip . ';';
        $newIP = str_replace($oldIP, '', $ipz);
        if ($newIP == '') {
            $upIsIP = mysqli_query($db_con, "UPDATE `account` SET `acc_ip` = null WHERE `account`.`id` = '$id'");
            $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, `type_notice`, `view`, `time_notice`, `status`)
             VALUES (NULL, '$id', '$ip', NULL, 'endlogin', 'notseen', '$date', 'normal')");
            echo json_encode(["resul" => 1]);
        } else {
            $upIsIP = mysqli_query($db_con, "UPDATE `account` SET `acc_ip` = '$newIP' WHERE `account`.`id` = '$id'");
            $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, `type_notice`, `view`, `time_notice`, `status`)
             VALUES (NULL, '$id', '$ip', NULL, 'endlogin', 'notseen', '$date', 'normal')");
            echo json_encode(["resul" => 2]);
        }
    } else {
        echo json_encode(["resul" => 0]);
    }
?>