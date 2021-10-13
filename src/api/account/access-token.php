<?php

include_once "../format/rand_token.php";
include_once "../format/time_world.php";


function newAccessToken($stt, $ip)
{
    $start =  startTime();
    $endtime = endTime();
    $token = '';
    $randIP = rand_read(1);
    $randSTT = rand_read(1);
    $randStart = rand_read(1);
    $randEnd = rand_read(1);
    $startToken = $randIP . editNumber($randIP, $ip) . rand_number(1) . $randSTT . editNumber($randSTT, $stt) . rand_number(1) . $randStart . editNumber($randStart, $start) . rand_number(1) . $randEnd . editNumber($randEnd, $endtime);
    $numSP = 82 - strlen($startToken) - 6 - 1;
    $token = "CNAAEE" . rand_read($numSP) . rand_number(1) . $randIP . editNumber($randIP, $ip) . rand_number(1) . $randSTT . editNumber($randSTT, $stt) . rand_number(1) . $randStart . editNumber($randStart, $start) . rand_number(1) . $randEnd . editNumber($randEnd, $endtime);
    return $token;
}

function checkAccessToken($token, $id)
{
    require '../config-api.php';
    include_once "../format/ip_client.php";

    $token = preg_split('/[0-9]/', $token);
    $access = "";
    $newIP = "";
    $newID = "";
    $newStart = "";
    $newEnd = "";
    foreach ($token as $index => $result) {
        if (!empty($result)) {
            if ($index == 0) {
                $access = $result;
            }
            if ($index == 1) {
                $newIP = $result;
            } else if ($index == 2) {
                $newID = $result;
            } else if ($index == 3) {
                $newStart = $result;
            } else if ($index == 4) {
                $newEnd = $result;
            }
        }
    }
    $newIP = codeNumber(substr($newIP, 0, 1), substr($newIP, 1, strlen($newIP)));
    $newID = codeNumber(substr($newID, 0, 1), substr($newID, 1, strlen($newID)));
    $newStart = codeNumber(substr($newStart, 0, 1), substr($newStart, 1, strlen($newStart)));
    $newEnd = codeNumber(substr($newEnd, 0, 1), substr($newEnd, 1, strlen($newEnd)));
    $idt = "";
    $partTime = startTime();
    $dataIP = [];
    $sucsess = "";
    $allPrive = mysqli_query($db_con, "SELECT `id` AS 'ID', `acc_ip` AS 'DATAIP' FROM `account` WHERE `account_stt` = '$newID'");
    if (mysqli_num_rows($allPrive) > 0) {
        while ($row = mysqli_fetch_assoc($allPrive)) {
            $idt = $row["ID"];
            $dataIP = $row["DATAIP"];
        }
        $dataIP = preg_split('/;/', $dataIP);
        foreach ($dataIP as $index => $result) {
            if ($result == $newIP) {
                $sucsess = "ok";
            }
        }
    }
    
    if ($newIP != $ip) {
        return "xp";
    } else if (empty($idt)) {
        return "xp";
    } else if ($idt != $id) {
        return "xp";
    } else if ($newEnd < $partTime) {
        return "xp";
    } else if (empty($sucsess)) {
        return "xp";
    } else {
        return "accep";
    }



    //   return "Access : ".$access."<br/>IP : ".$newIP."<br/>ID : ".$newID."<br/>Start : ".$newStart."<br/>End : ".$newEnd;

    // $sql = "SELECT account_token AS token FROM `account` WHERE `id` = '$val'";
    // $result = mysqli_query($db_con, $sql);
    // if (mysqli_num_rows($result) > 0) {
    //     // hiển thị dữ liệu trên trang

    //     while($row = mysqli_fetch_array($result)) {

    //         if($row["token"] == $token){
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }
    // }else{
    //     return false;
    // }

}
//echo checkAccessToken("ACCESSKyLDML1YFMmGTLJmmTLbVRTPhALTSJQLTMbaFTAabSThFh3mR5nQGAWMtAJQW6GaSUdEedPaR", "nhan.mchx");

?>


