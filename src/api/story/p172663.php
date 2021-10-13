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
    $post_display_mode = $data->post_display_mode;
    $title = $data->title;
    $money = $data->money;
    $link = $data->link;
    $content = $data->content;
    $fake_content_check = $data->fake_content_check;
    $format = $data->format;
    $type_post = $data->type_post;
    $date_time_post = $data->date_time_post;
    $date_update = $data->date_update;
    $post_status = $data->post_status;
    $list_format = explode(';', $format);
}
if (strlen($content) > 0) {
    $content = str_replace('contenteditable="true"', 'contenteditable="false"', $content);
}
$sqll = "SELECT COUNT(*) AS STT FROM `storys`";
$resultl = mysqli_query($db_con, $sqll);
$sttl = "";

if (mysqli_num_rows($resultl) > 0) {
    while ($row = mysqli_fetch_assoc($resultl)) {
        $sttl = $row["STT"];
    }
}

$today = date("Y-m-d H:i:s");
$date = date($today, time());
$checkClient = checkAccessToken($token, $id);
if ($checkClient == "accep") {
    if (!empty($type_post)) {
        $allPost = mysqli_query($db_con, "INSERT INTO `storys` (`story_stt`, `id`, `index_id`, `post_display_mode`, 
            `title`, `money`, `links`, `content`, `fake_content`, `format`, `type_post`, `date_time_post`, `date_update`,
             `post_status`, `hastag`, `comment`, `rep_story_stt`, `rep_title`, `rep_money`, `rep_links`, `rep_content`, `rep_fake_content`,
              `rep_format`, `rep_id`, `rep_avatar`, `rep_fullname`, `rep_status`, `pages_name`, `pages_id`, `pages_type`, `pages_top`) VALUES (NULL, '$id', '$sttl', '$post_display_mode', 
              '$title', '$money', '$link', '$content', '$fake_content_check', '$format', '$type_post', '$date',
             '$date', '$post_status', NULL, 'on', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);");
        if (mysqli_num_rows($allPost) > 0) {
            $all_post = mysqli_fetch_all($allPost, MYSQLI_ASSOC);
            echo json_encode(["resul" => 1]);
        } else {
            echo json_encode(["resul" => $list_format]);
        }

        $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, `type_notice`, `view`, `time_notice`, `status`)
            VALUES (NULL, '$id', 'new story', '$sttl', 'post', 'notseen', '$date', 'normal')");

        $leng = count($list_format);
        for ($i = 0; $i < $leng; $i++) {
            $allpostFormat = mysqli_query($db_con, "INSERT INTO `formats` 
                        (`format_stt`,  `content`, `ranks`, `purpose`, `album`, `id`, `format_status`,`time_post_file`) 
                        VALUES (NULL, '$list_format[$i]', null, 'posts', null, '$id', '$post_status', '$date');");
        }
    }
} else {
    echo json_encode(["check" => $checkClient]);
}

?>