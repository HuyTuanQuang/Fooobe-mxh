<?php  
    include_once "domain_langulage.php";
    
    $ip = '';
    $city = 'Ha Noi';
    $region = 'Ha Noi';
    $timezone = '';
    $nation = 'VN';
    if (getenv('HTTP_CLIENT_IP')) {
        $ip = getenv('HTTP_CLIENT_IP');
    } else if (getenv('HTTP_X_FORWARDED_FOR')) {
        $ip = getenv('HTTP_X_FORWARDED_FOR');
    } else if (getenv('HTTP_X_FORWARDED')) {
        $ip = getenv('HTTP_X_FORWARDED');
    } else if (getenv('HTTP_FORWARDED_FOR')) {
        $ip = getenv('HTTP_FORWARDED_FOR');
    } else if (getenv('HTTP_FORWARDED')) {
        $ip = getenv('HTTP_FORWARDED');
    } else if (getenv('REMOTE_ADDR')) {
        $ip = getenv('REMOTE_ADDR');
    } else {
        $ip = 'UNKNOWN';
    }
    //$ip = "2401:d800:de65:3cfd:789d:4eb2:fbe7:c2c";

    // $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}"));
    // $nation = $details->country; 
    // $city = $details->city;
    // $nation = DomainLangulage($nation);
    // $region = $details->region;
    // $timezone = $details->timezone;
    
?>  