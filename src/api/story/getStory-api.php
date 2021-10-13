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

if($data === null){
    echo "Không có tuổi nhé em =))\n";
}else{
    $id = $data->id;
    $token = $data->token;
    $page = $data->page;
}


$checkClient = checkAccessToken($token, $id);

$today = date("Y-m-d H:i:s");
$date = date($today, time());

        if($checkClient == "accep"){

                $allStory = mysqli_query($db_con,"SELECT * , (SELECT `type_react` FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt`
                AND `reactions`.`id` = '$id' AND `reactions`.`status` = 'normal') AS 'REACTTIONS',  (SELECT account.fristname FROM account WHERE
                 account.id = `storys`.`id`) AS 'ACCESSFRISTNAME', (SELECT account.center_name FROM account WHERE account.id = `storys`.`id`) 
                 AS 'ACCESSCENTERNAME' , (SELECT  account.lastname FROM account WHERE account.id = `storys`.`id`) AS 'ACCESSLASTNAME',  
                 (SELECT account.avatar FROM account WHERE account.id = `storys`.`id`) AS 'ACCESSAVT', (SELECT COUNT(friends.`friend_id`) 
                 FROM `friends` WHERE friends.`friend_id` = `storys`.`id` AND friends.`status` = 'accep' AND friends.`status_storys` = 'normal' 
                 AND friends.`type_friend` = 'follow') AS 'ACCESSFOLLOW', (SELECT account.account_confirmed FROM account 
                 WHERE account.id = `storys`.`id`) AS 'ACCESSCONFIG', (SELECT COUNT(*) FROM `comments` WHERE 
                 `comments`.`story_stt` = `storys`.`story_stt` AND `comments`.`status` = 'normal') AS 'COUNTCMT', 
                 (SELECT COUNT(*) FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt` AND `reactions`.`status` = 'normal' AND `reactions`.`type_react` = 'like') 
                 AS 'COUNTLIKE' , (SELECT COUNT(*) FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt` AND `reactions`.`status` = 'normal' AND `reactions`.`type_react` = 'haha') 
                 AS 'COUNTHAHA' , (SELECT COUNT(*) FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt` AND `reactions`.`status` = 'normal' AND `reactions`.`type_react` = 'wow') 
                 AS 'COUNTWOW' , (SELECT COUNT(*) FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt` AND `reactions`.`status` = 'normal' AND `reactions`.`type_react` = 'angry') 
                 AS 'COUNTANGRY' , (SELECT COUNT(*) FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt` AND `reactions`.`status` = 'normal' AND `reactions`.`type_react` = 'love') 
                 AS 'COUNTLOVE' , (SELECT COUNT(*) FROM `reactions` WHERE `reactions`.`story_stt` = `storys`.`story_stt` AND `reactions`.`status` = 'normal' AND `reactions`.`type_react` = 'sad') 
                 AS 'COUNTSAD' , (SELECT COUNT(*) FROM `shares` WHERE `shares`.`story_stt` = `storys`.`story_stt` AND `shares`.`status` = 'normal') 
                 AS 'COUNTSHARE', (SELECT notices.type_notice FROM notices WHERE notices.id = storys.id AND notices.suppor = storys.story_stt AND notices.type_notice = 'offpost' AND notices.status = 'normal') AS 'STORYNOTICE'
                 , (SELECT account.interests FROM account WHERE account.id = storys.id AND account.private_interests = 'public') AS 'INTERESTS', (SELECT account.birthday FROM account WHERE account.id = storys.id 
                 AND account.private_birthday = 'public') AS 'BIRTHDAY', (SELECT account.address FROM account WHERE account.id = storys.id AND 
                 account.private_address = 'public') AS 'ADRESS', (SELECT account.sex FROM account WHERE account.id = storys.id AND 
                 account.private_sex = 'public') AS 'SEX', (SELECT account.story FROM account WHERE account.id = storys.id) AS 'STORYSS' 
                FROM `storys` 
                 WHERE `id` IN (SELECT `friend_id` FROM `friends` WHERE `id` = 'nhan.mchx' AND `status` = 'accep' 
                 AND `status_storys` = 'normal' AND (`type_friend` = 'friends') AND (storys.post_display_mode = 'public' OR storys.post_display_mode = 'friend')) OR 
                 `id` IN (SELECT `friend_id` FROM `friends` WHERE `id` = '$id' AND `status` = 'accep' 
                 AND `status_storys` = 'normal' AND storys.`post_display_mode` = 'public' AND (`type_friend` = 'follow')) OR `id` = '$id' 
                 AND `post_status` = 'normal' AND `date_update` <= '$date' ORDER BY `date_update` DESC LIMIT $page, 10");

                  
                if(mysqli_num_rows($allStory) > 0){
                    $all_post = mysqli_fetch_all($allStory,MYSQLI_ASSOC);
                    echo json_encode(["story"=>$all_post]);
                }
                else{
                    echo json_encode(["check"=>0]);
                }
        }else{
            echo json_encode(["check"=>$checkClient]);
        }
?>
