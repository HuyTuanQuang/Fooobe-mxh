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

if ($data === null) {
    echo "Không có tuổi nhé em =))\n";
} else {
    $id = $data->id;
    $token = $data->token;
    $story = $data->story;
}
$checkClient = checkAccessToken($token, $id);

$today = date("Y-m-d H:i:s");
$date = date($today, time());



if ($checkClient == "accep") {
    $allStory = mysqli_query($db_con, "SELECT `status` AS 'status', `comment_stt` AS 'STT', `id` AS 'ID', 
                `fake_comment` AS 'FAKECOMMENT', `sticker` AS 'STICKER', `image_video` 
                AS 'IMAGEVIDEO', `type_comment` AS 'TYPECMT', `content` AS 'CONTENT', 
                `time_comment` AS 'TIMECMT', (SELECT COUNT(*) FROM `rep_comment` WHERE 
                `rep_comment`.`comment_stt` = `comments`.`comment_stt`) AS 'COUNTREPLY', 
                (SELECT COUNT(*) FROM `react_comment` WHERE `react_comment`.`comment_stt` = `comments`.`comment_stt`
                 AND `status` = 'normal') AS 'COUNTREACT', (SELECT `account`.`avatar` FROM `account` 
                 WHERE `account`.`id` = `comments`.`id`) AS 'AVATAR' , (SELECT `account`.`fristname` 
                 FROM `account` WHERE `account`.`id` = `comments`.`id`) AS 'FRISTNAME', (SELECT `account`.`lastname` 
                 FROM `account` WHERE `account`.`id` = `comments`.`id`) AS 'LASTNAME', (SELECT account.account_confirmed FROM account 
                 WHERE account.id = `comments`.`id`) AS 'ACCESSCONFIG',  (SELECT `react_comment`.`type_react` 
                 FROM `react_comment` WHERE `react_comment`.`comment_stt` = `comments`.`comment_stt` 
                 AND `react_comment`.`id` = '$id' AND `status` = 'normal') AS 'TYPEREACT'  FROM `comments`
                  WHERE `story_stt` = $story AND `status` = 'normal' ORDER BY  `time_comment` DESC, `comment_stt` DESC LIMIT 0, 2");
    if (mysqli_num_rows($allStory) > 0) {
        $all_post = mysqli_fetch_all($allStory, MYSQLI_ASSOC);

        echo json_encode(["comment" => array_reverse($all_post)]);
    } else {
        echo json_encode(["resul" => 0]);
    }
} else {
    echo json_encode(["check" => $checkClient]);
}
?>