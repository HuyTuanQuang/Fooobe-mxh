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
    $today = date("Y-m-d H:i:s");
    $date = date($today, time());

    $id = "";
    $token = "";
    if($data === null){
        echo "Không có tuổi nhé em =))\n";
    }else{
        $id = $data->id;
        $token = $data->token;
        $comment_stt = $data->comment_stt;
        $fake_comment = $data->fake_comment;
        $content = $data->content;
        $sticker= $data->sticker;
        $image_video = $data->image_video;
        $time_cmt = $data->time_cmt;
        $type_comment = $data->type_comment;
        $page_id = $data->page_id;
    }
    if(strlen($content) > 0){
        $content = str_replace( 'contenteditable="true"', 'contenteditable="false"', $content );
    }
    $checkClient = checkAccessToken($token, $id);
    if($checkClient == "accep"){
        if (!empty($id)) {
            $allPost = mysqli_query($db_con,"INSERT INTO `rep_comment` (`rep_cmt_stt`, `id`,
             `comment_stt`, `content`, `fake_comment`, `sticker`, `image_video`,
              `time_cmt`, `type_comment`, `page_id`, `status`) VALUES (NULL, 
              '$id', '$comment_stt', '$content', '$fake_comment', '$sticker', '$image_video', '$date', '$type_comment', '$page_id', 'normal');");
            if($allPost > 0){
                echo json_encode(["resul"=>1]);
                $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, 
                `type_notice`, `view`, `time_notice`, `status`)
                VALUES (NULL, '$id', 'rep comment', '$comment_stt', 'repcomment', 'notseen', '$date', 'normal')");
                $updateStory = mysqli_query($db_con, "UPDATE `storys` SET `date_update` = '$date' WHERE `storys`.`story_stt` = '$story_stt'");
            }else{
                echo json_encode(["resul"=>0]);
            }
            
        }
    }else{
        echo json_encode("Haha");
    }

        
       
        
    
        
    
   
?>