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
    if ($ev == "offcomment") {
        $ts = $data->ts;
        $history = mysqli_query($db_con, "UPDATE `storys` SET `comment` = 'off' WHERE `storys`.`story_stt` = '$ts'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "oncomment") {
        $ts = $data->ts;
        $history = mysqli_query($db_con, "UPDATE `storys` SET `comment` = 'on' WHERE `storys`.`story_stt` = '$ts'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "removepost") {
        $ts = $data->ts;
        $history = mysqli_query($db_con, "UPDATE `storys` SET `post_status` = 'delete' WHERE `storys`.`story_stt` = '$ts'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "changedisplay") {
        $ts = $data->ts;
        $tsv = $data->tsv;
        $history = mysqli_query($db_con, "UPDATE `storys` SET `post_display_mode` = '$tsv' WHERE `storys`.`story_stt` = '$ts'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "changeedittext") {
        $ts = $data->ts;
        $tsy = $data->tsy;
        $tsx = $data->tsx;
        if (strlen($tsx) > 0) {
            $tsx = str_replace('contenteditable="true"', 'contenteditable="false"', $tsx);
        }
        $history = mysqli_query($db_con, "UPDATE `storys` SET `content` = '$tsx', `fake_content` = '$tsy' WHERE `storys`.`story_stt` = '$ts'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
            $updateStory = mysqli_query($db_con, "UPDATE `storys` SET `date_update` = '$date' WHERE `storys`.`story_stt` = '$ts'");
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "offnotice") {
        $ts = $data->ts;
        $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, 
                `type_notice`, `view`, `time_notice`, `status`)
                VALUES (NULL, '$id', 'off notice post', '$ts', 'offpost', 'seen', '$date', 'normal')");
        if ($postNotice > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "opennotice") {
        $ts = $data->ts;
        $postNotice = mysqli_query($db_con, "UPDATE `notices` SET `status` = 'disabled' WHERE `notices`.`id` = '$id' AND `notices`.`suppor` = '$ts' AND `notices`.`type_notice` = 'offpost'");
        if ($postNotice > 0) {
            echo json_encode(["resul" => "ok"]);
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    if ($ev == "changeeditimage") {
        $ts = $data->ts;
        $tsy = $data->tsy;
        $history = mysqli_query($db_con, "UPDATE `storys` SET `format` = '$tsy' WHERE `storys`.`story_stt` = '$ts'");
        if ($history > 0) {
            echo json_encode(["resul" => "ok"]);
            $updateStory = mysqli_query($db_con, "UPDATE `storys` SET `date_update` = '$date' WHERE `storys`.`story_stt` = '$ts'");
        } else {
            echo json_encode(["resul" => 400]);
        }
    }
    
    
} else {
    echo json_encode(["check" => $checkClient]);
}
?>