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
    $c_status = "";
    $c_count = 0;
    if($data === null){
        echo "Không có tuổi nhé em =))\n";
    }else{
        $id = $data->id;
        $token = $data->token;
        $comment_stt = $data->comment_stt;
        $reactions = $data->reactions;
        $time_react = $data->time_react;
        $event = $data->events;
    }
   
    $checkClient = checkAccessToken($token, $id);
    if($checkClient == "accep"){
        if (!empty($id)) {
            if($event == 'add'){
                $checkReact = mysqli_query($db_con, "SELECT COUNT(`type_react`) AS 'COUNTS', `status` AS 'STATUS' FROM `react_comment` WHERE `id` = '$id' AND `comment_stt` = '$comment_stt'");
                if(mysqli_num_rows($checkReact) > 0){
                    while($row = mysqli_fetch_assoc($checkReact)) {
                        $c_count = $row["COUNTS"];
                        $c_status = $row["STATUS"];
                    }
                }
                if($c_count > 0){
                    if($c_status == 'normal'){
                        $allPost = mysqli_query($db_con,"UPDATE `react_comment` SET `type_react` = '$reactions', `time_react` = '$date', `status` = 'normal' WHERE `id` = '$id' AND `comment_stt` = '$comment_stt'");
                        if($allPost > 0){
                            echo json_encode(["resul"=>2]);
                        }else{
                            echo json_encode(["resul"=>0]);
                        }
                    }else{
                        $allPost = mysqli_query($db_con,"UPDATE `react_comment` SET `type_react` = '$reactions', `time_react` = '$date', `status` = 'normal' WHERE `id` = '$id' AND `comment_stt` = '$comment_stt'");
                        if($allPost > 0){
                            echo json_encode(["resul"=>1]);
                            $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, 
                            `type_notice`, `view`, `time_notice`, `status`)
                            VALUES (NULL, '$id', 'reaction comment', '$comment_stt', 'reactioncomment', 'notseen', '$date', 'normal')");
                        }else{
                            echo json_encode(["resul"=>0]);
                        }
                    }
                }else{
                    $allPost = mysqli_query($db_con,"INSERT INTO `react_comment` 
                    (`react_cmt_stt`, `id`, `comment_stt`, `type_react`, `time_react`, `status`)
                    VALUES (NULL, '$id', '$comment_stt', '$reactions', '$date', 'normal');");
                    if($allPost > 0){
                        echo json_encode(["resul"=>1]);
                        $postNotice = mysqli_query($db_con, "INSERT INTO `notices` (`notice_stt`, `id`, `content`, `suppor`, 
                        `type_notice`, `view`, `time_notice`, `status`)
                        VALUES (NULL, '$id', 'reaction comment', '$comment_stt', 'reactioncomment', 'notseen', '$date', 'normal')");
                    }else{
                        echo json_encode(["resul"=>0]);
                    }
                }
            }else{
                $allPost = mysqli_query($db_con,"UPDATE `react_comment` SET `status` = 'delete' WHERE `id` = '$id' AND `comment_stt` = '$comment_stt'");
                    if($allPost > 0){
                        echo json_encode(["resul"=>3]);
                    }else{
                        echo json_encode(["resul"=>0]);
                    }
            }
            
        }
    }else{
        echo json_encode("Haha");
    }

        
       
        
    
        
    
   
?>