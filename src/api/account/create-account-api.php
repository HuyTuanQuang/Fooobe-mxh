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
    //Lọc chữ cái
    function vn_str_filter ($str){
    
        $unicode = array(

            'a'=>'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',

            'd'=>'đ',

            'e'=>'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',

            'i'=>'í|ì|ỉ|ĩ|ị',

            'o'=>'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',

            'u'=>'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',

            'y'=>'ý|ỳ|ỷ|ỹ|ỵ',

            'A'=>'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',

            'D'=>'Đ',

            'E'=>'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',

            'I'=>'Í|Ì|Ỉ|Ĩ|Ị',

            'O'=>'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',

            'U'=>'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',

            'Y'=>'Ý|Ỳ|Ỷ|Ỹ|Ỵ',

        );

    foreach($unicode as $nonUnicode=>$uni){

            $str = preg_replace("/($uni)/i", $nonUnicode, $str);

    }

        return $str;

    }
    
    $sql = "SELECT COUNT(*) AS STT FROM `account`";
    $result = mysqli_query($db_con, $sql);
    $stt= "";
    
    if (mysqli_num_rows($result) > 0) {
        // hiển thị dữ liệu trên trang
        
        while($row = mysqli_fetch_assoc($result)) {
            $stt = $row["STT"];
        }
    } 


    if($data === null){
        echo "Không có tuổi nhé em =))\n";
    }else{
        $firstest = $data->first;
        $lastest = $data->last;
        $first = ucfirst($firstest);
        $last = ucfirst($lastest);
        $email = $data->email;
        $pass = $data->pass;
        $gender = $data->gender;
        $birth = $data->birth;
        $id = strtolower( preg_replace('/\s+/', '', vn_str_filter($last))).$stt;
        $today = date("Y-m-d H:i:s");
        $date = date($today, time());
        $avt = "fo_".strtolower( preg_replace('/\s+/', '', vn_str_filter($gender))).".png";
        
      
        
        if (!empty($last)) {
            $allCreate = mysqli_query($db_con,"INSERT INTO `account` (`account_stt`, `id`, `birthday`, `address`,
             `avatar`, `interests`, `story`, `account`, `password`, `fristname`, `center_name`, `lastname`, `nickname`, 
             `sex`, `relative`, `type_account`, `type_level`, `status_acount`, `resgiser_time`, `re_name`, 
             `image_cover`, `acc_ip`, `private_address`, `private_birthday`, `private_interests`, 
             `private_sex`, `private_relative`, `time_re_name`, `time_re_sex`, `time_re_birthday`, 
             `time_re_id`, `account_confirmed`, `account_token`, `account_warning`) VALUES (NULL, '$id', '$birth', NULL,
               '$avt', NULL, NULL, AES_ENCRYPT('$email','yeuem'), AES_ENCRYPT('$pass','yeuem'), '$first',NULL,
                '$last', NULL, '$gender',NULL, 'fb_user', NULL,'unconfimred', '$date', '$date', NULL, '$ip', 
                'private','private','private','private','private', NULL, NULL, NULL, NULL, NULL, NULL, NULL);");
           
                echo json_encode(["resul"=>1]);
                $allSetting = mysqli_query($db_con, "INSERT INTO `settings` (`setting_stt`, `id`, `back_ground_fooobe`, `post_display_mode`, `account_display_mode`, `langulage`, `notification`) VALUES (NULL, '$id', 'white', 'friend', 'public', '$nation', 'all');");
           
            
        }
    }

        

        
       
        
    
        
    
   
?>