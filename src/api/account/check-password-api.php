<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';
include_once "../format/ip_client.php";
include_once "access-token.php";

$data = json_decode(file_get_contents("php://input"));
date_default_timezone_set('Asia/Ho_Chi_Minh');


$today = date("Y-m-d H:i:s");
$date = date($today, time());
$id = "";
$idz = "";
$ipz = "";
$email = $data->email;
$pass = $data->pass;
$allAccount0 = mysqli_query($db_con, "SELECT  `account_stt` AS 'STT', `id` AS 'ID' FROM `account` WHERE AES_DECRYPT(`account`, 'yeuem')='$email' AND AES_DECRYPT(`password`, 'yeuem')='$pass'");
if (mysqli_num_rows($allAccount0) > 0) {
    while ($row = mysqli_fetch_assoc($allAccount0)) {
        $id = $row["STT"];
        $idz = $row["ID"];
    }
}
$allAccount1 = mysqli_query($db_con, "SELECT `id` AS 'ID' FROM `account` WHERE AES_DECRYPT(`account`, 'yeuem')='$email' AND AES_DECRYPT(`password`, 'yeuem')='$pass'");
if (mysqli_num_rows($allAccount1) > 0) {

    $all_users1 = mysqli_fetch_all($allAccount1, MYSQLI_ASSOC);

    $newTokens = newAccessToken($id, $ip);
    //Insert IP
    $checkIsIP = mysqli_query($db_con, "SELECT `acc_ip` AS 'IP' FROM `account` WHERE `account`.`account_stt` = '$id' AND `account`.`acc_ip` != ''");
    if (mysqli_num_rows($checkIsIP) > 0) {
        while ($row = mysqli_fetch_assoc($checkIsIP)) {
            $ipz = $row["IP"];
        }

        if (strpos($ipz, $ip) !== false) {
            $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, `type_notice`, `view`, `time_notice`, `status`)
             VALUES (NULL, '$idz', '$ip', NULL, 'login', 'notseen', '$date', 'normal')");
            echo json_encode(["resul" => 1, 'account' => $all_users1, 'token' => $newTokens]);
        } else {
            $newIP = $ipz . $ip . ';';
            $upIsIP = mysqli_query($db_con, "UPDATE `account` SET `acc_ip` = '$newIP' WHERE `account`.`account_stt` = '$id'");
            $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, `type_notice`, `view`, `time_notice`, `status`)
             VALUES (NULL, '$idz', '$ip', NULL, 'login', 'notseen', '$date', 'normal')");
            echo json_encode(["resul" => 1, 'account' => $all_users1, 'token' => $newTokens]);
        }
    } else {
        $newIP = $ip . ';';
        $upIsIP = mysqli_query($db_con, "UPDATE `account` SET `acc_ip` = '$newIP' WHERE `account`.`account_stt` = '$id'");
        $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, `type_notice`, `view`, `time_notice`, `status`)
             VALUES (NULL, '$idz', '$ip', NULL, 'login', 'notseen', '$date', 'normal')");
        echo json_encode(["resul" => 1, 'account' => $all_users1, 'token' => $newTokens]);
    }
} else {
    echo json_encode(["resul" => 0]);
}
?>
