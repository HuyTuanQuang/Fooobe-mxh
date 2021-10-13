<?php
    date_default_timezone_set('Asia/Ho_Chi_Minh');
    function startTime()
    {
        $today = date("Y-m-d H:i:s");
        $date = date($today, time());
        return strtotime($date);
    }

    function endTime()
    {
        $today = date("Y-m-d H:i:s");
        $date = date($today, time());
        $newdate = strtotime ( '+1 month' , strtotime ( $date ) ) ;
        return $newdate;
    }

?>