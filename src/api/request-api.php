<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $all_array = array(
        'apiGetSetting'  => 'http://localhost/fooobe/src/api/account/setting-api.php',
        'apiEndLogin'  => 'http://localhost/fooobe/src/api/account/end-login-api.php',
        'apiEventSetting'  => 'http://localhost/fooobe/src/api/account/event-setting-api.php',
        'apiCheckAccount' => "http://localhost/fooobe/src/api/account/check-account-api.php",
        'apiCreateAccount' => "http://localhost/fooobe/src/api/account/create-account-api.php",
        'apiProfileAccount' => "http://localhost/fooobe/src/api/account/profile-api.php",
        'apiPostNewsStory' => "http://localhost/fooobe/src/api/story/p172663.php",
        'apiPostImages' => "http://localhost/fooobe/src/api/story/i2025195.php",
        'apiPostSticker' => "http://localhost/fooobe/src/api/story/sticker-api.php",
        'apiCheckPass' => "http://localhost/fooobe/src/api/account/check-password-api.php",
        'apiSelectTypeSticker' => "http://localhost/fooobe/src/api/story/type-sticker-api.php",
        'apiMusic' => "http://localhost/fooobe/src/api/story/music-api.php",
        'apiStorys' => "http://localhost/fooobe/src/api/story/getStory-api.php",
        'apiComment' => "http://localhost/fooobe/src/api/story/getComment-api.php",
        'apiRealComment' => "http://localhost/fooobe/src/api/story/getRealComment-api.php",
        'apiNewComment' => "http://localhost/fooobe/src/api/story/getNewComment-api.php",
        'apiRepComment' => "http://localhost/fooobe/src/api/story/getRepComment-api.php",
        'apiGetListFriends' => "http://localhost/fooobe/src/api/account/getListFriends-api.php",
        'apiInsertComment' => "http://localhost/fooobe/src/api/story/insertComment-api.php",
        'apiInsertRepComment' => "http://localhost/fooobe/src/api/story/insertRepComment.php",
        'apiInsertReactionsComment' => "http://localhost/fooobe/src/api/story/insertReactions-comment-api.php",
        'apiInsertReactionsRepComment' => "http://localhost/fooobe/src/api/story/insertReactions_repComment_api.php",
        'apiInsertReactionsStory' => "http://localhost/fooobe/src/api/story/insertReaction-storys-api.php",
        'apiEventStory' => "http://localhost/fooobe/src/api/story/eventStorys-api.php",
        'apiEventComment' => "http://localhost/fooobe/src/api/story/eventComment-api.php",
        //TGN
        'apiTGNLoadUser' => "http://localhost/fooobe/src/api/tgn/load-user-tgn-api.php",
        'apiTGNLoadAcc' => "http://localhost/fooobe/src/api/tgn/load-account-tgn-api.php",
        'apiTGNGlory' => "http://localhost/fooobe/src/api/tgn/load-glory-tgn-api.php",
        'apiTGNEventArea' => "http://localhost/fooobe/src/api/tgn/up-account-tgn-api.php",
        'apiTGNJob' => "http://localhost/fooobe/src/api/tgn/load-job-tgn-api.php",
        'apiTGNSkill' => "http://localhost/fooobe/src/api/tgn/load-skill-tgn-api.php",
        'apiTGNEventJob' => "http://localhost/fooobe/src/api/tgn/action-job-tgn-api.php",
        'apiTGNEventMarket' => "http://localhost/fooobe/src/api/tgn/load-market-tgn-api.php",
        'apiTGNEventRandom' => "http://localhost/fooobe/src/api/tgn/random-tgn-api.php",
        'apiTGNEventOrgazine' => "http://localhost/fooobe/src/api/tgn/action-orgazine-tgn-api.php",

    );
    echo json_encode($all_array);

?>