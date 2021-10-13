<?php

function rand_token($lengthz)
{
    $strz = "";
    $charsz = "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";
    $sizez = strlen($charsz);
    for ($i = 0; $i < $lengthz; $i++) {
        $strz .= $charsz[rand(0, $sizez - 1)];
    }
    return $strz;
}
function rand_code($lengthz)
{
    $strz = "";
    $charsz = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";
    $sizez = strlen($charsz);
    for ($i = 0; $i < $lengthz; $i++) {
        $strz .= $charsz[rand(0, $sizez - 1)];
    }
    return $strz;
}

function rand_number($lengthz)
{
    $strz = "";
    $charsz = "0123456789";
    $sizez = strlen($charsz);
    for ($i = 0; $i < $lengthz; $i++) {
        $strz .= $charsz[rand(0, $sizez - 1)];
    }
    return $strz;
}
function rand_read($lengthz)
{
    $strz = "";
    $charsz = "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
    $sizez = strlen($charsz);
    for ($i = 0; $i < $lengthz; $i++) {
        $strz .= $charsz[rand(0, $sizez - 1)];
    }
    return $strz;
}

function editNumber($rand, $number)
{


    $search = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ":", "-", "_", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    $char = [];

    $number = str_split($number);
    if ($rand == 'A') {
        $char = ["G", "d", "I", "k", "B", "g", "b", "m", "f", "x", "J", "T", "p", "Q", "D", "i", "s", "C", "S", "h", "u", "L", "R", "A", "w", "l", "P", "E", "q", "v", "F", "V", "M", "c", "j", "Y", "W", "Z", "z", "r", "t", "U", "H", "e", "K", "y", "a", "X"];
    } else if ($rand == 'B') {
        $char = ["w", "b", "I", "a", "l", "T", "t", "H", "y", "B", "Z", "q", "Y", "K", "D", "k", "U", "r", "V", "J", "x", "G", "m", "f", "S", "p", "d", "E", "W", "s", "i", "v", "C", "R", "M", "F", "c", "g", "X", "e", "P", "L", "A", "j", "h", "u", "Q", "z"];
    } else if ($rand == 'C') {
        $char = ["w", "y", "x", "W", "p", "Z", "a", "j", "h", "V", "P", "m", "r", "S", "q", "E", "G", "Q", "K", "I", "b", "R", "v", "X", "g", "i", "D", "z", "H", "C", "s", "T", "k", "t", "e", "u", "M", "U", "L", "J", "l", "B", "c", "f", "F", "A", "d", "Y"];
    } else if ($rand == 'D') {

        $char = ["M", "v", "i", "r", "K", "H", "T", "w", "F", "l", "U", "u", "B", "p", "z", "W", "j", "S", "t", "q", "a", "Z", "e", "L", "g", "y", "I", "b", "d", "C", "G", "E", "f", "m", "V", "c", "A", "Y", "D", "X", "k", "P", "Q", "J", "x", "R", "s", "h"];
    } else if ($rand == 'E') {
        $char = ["Z", "t", "H", "L", "s", "V", "D", "Q", "B", "q", "v", "m", "a", "S", "j", "X", "W", "T", "x", "w", "b", "c", "Y", "C", "p", "z", "A", "r", "K", "U", "J", "I", "k", "h", "E", "f", "R", "e", "y", "g", "F", "i", "G", "M", "P", "d", "l", "u"];
    } else if ($rand == 'F') {

        $char = ["j", "x", "M", "U", "f", "W", "r", "D", "l", "z", "t", "c", "q", "H", "J", "L", "y", "v", "d", "g", "R", "Y", "X", "P", "w", "b", "k", "G", "F", "m", "Z", "u", "h", "S", "E", "p", "K", "Q", "s", "C", "B", "I", "V", "T", "A", "a", "e", "i"];
    } else if ($rand == 'G') {
        $char = ["g", "v", "R", "i", "E", "f", "S", "P", "z", "p", "I", "C", "B", "k", "M", "W", "s", "u", "y", "w", "t", "j", "U", "Y", "D", "F", "m", "e", "T", "Q", "r", "J", "X", "x", "d", "a", "h", "H", "q", "c", "A", "V", "G", "l", "b", "K", "L", "Z"];
    } else if ($rand == 'H') {

        $char = ["a", "L", "t", "G", "j", "J", "m", "g", "P", "w", "v", "b", "l", "c", "h", "U", "e", "D", "X", "F", "q", "Y", "y", "T", "f", "R", "u", "z", "Q", "d", "B", "M", "C", "Z", "A", "x", "K", "S", "s", "W", "V", "p", "r", "H", "i", "I", "k", "E"];
    } else if ($rand == 'I') {

        $char = ["B", "u", "y", "b", "S", "s", "i", "v", "J", "g", "E", "Z", "M", "L", "W", "V", "z", "Y", "t", "e", "r", "G", "w", "P", "T", "l", "U", "x", "C", "F", "d", "a", "R", "I", "p", "k", "D", "Q", "K", "c", "q", "m", "X", "A", "h", "H", "f", "j"];
    } else if ($rand == 'J') {

        $char = ["L", "Y", "S", "U", "Z", "T", "X", "f", "P", "x", "V", "d", "q", "c", "E", "s", "g", "C", "t", "A", "l", "J", "v", "R", "W", "B", "G", "M", "i", "H", "I", "a", "h", "D", "b", "e", "m", "j", "K", "w", "u", "r", "k", "p", "z", "F", "Q", "y"];
    } else if ($rand == 'K') {

        $char = ["c", "y", "J", "D", "f", "m", "U", "v", "k", "Z", "s", "B", "i", "a", "h", "X", "g", "V", "w", "T", "A", "d", "K", "C", "l", "W", "t", "j", "M", "H", "z", "P", "x", "G", "u", "b", "Y", "R", "S", "e", "p", "Q", "q", "F", "r", "L", "E", "I"];
    } else if ($rand == 'L') {

        $char = ["Q", "e", "d", "R", "U", "J", "f", "B", "t", "F", "s", "Y", "y", "D", "p", "u", "r", "j", "h", "i", "X", "E", "Z", "x", "V", "g", "z", "T", "A", "S", "G", "b", "a", "K", "P", "I", "v", "w", "M", "m", "C", "l", "q", "c", "k", "W", "L", "H"];
    } else if ($rand == 'M') {

        $char = ["D", "i", "q", "k", "K", "r", "t", "I", "u", "h", "f", "m", "d", "Y", "G", "A", "P", "E", "J", "L", "a", "H", "b", "T", "w", "M", "W", "p", "Q", "c", "y", "C", "Z", "l", "g", "F", "V", "B", "v", "X", "j", "s", "U", "z", "S", "e", "R", "x"];
    } else if ($rand == 'N') {

        $char = ["s", "t", "u", "d", "x", "c", "R", "F", "b", "T", "W", "H", "C", "l", "h", "w", "J", "v", "Z", "U", "y", "m", "B", "A", "k", "j", "f", "S", "i", "g", "P", "G", "L", "r", "Q", "z", "D", "V", "K", "q", "I", "e", "Y", "M", "X", "E", "p", "a"];
    } else if ($rand == 'P') {

        $char = ["l", "P", "C", "u", "L", "g", "D", "F", "w", "t", "H", "b", "S", "B", "c", "Q", "Z", "x", "a", "U", "m", "J", "K", "v", "i", "E", "M", "W", "X", "G", "A", "V", "r", "q", "f", "d", "T", "k", "R", "j", "y", "z", "p", "e", "h", "Y", "s", "I"];
    } else if ($rand == 'Q') {

        $char = ["E", "e", "G", "k", "m", "t", "M", "Q", "I", "U", "x", "F", "C", "R", "Y", "T", "P", "H", "w", "S", "j", "A", "a", "c", "p", "u", "Z", "J", "X", "B", "l", "z", "V", "W", "r", "s", "i", "v", "g", "q", "b", "f", "d", "K", "D", "h", "L", "y"];
    } else if ($rand == 'R') {

        $char = ["q", "l", "Q", "E", "C", "D", "t", "U", "h", "f", "s", "J", "m", "g", "d", "p", "r", "T", "R", "B", "a", "S", "y", "Z", "I", "W", "b", "L", "j", "V", "x", "i", "A", "K", "P", "M", "Y", "v", "w", "F", "e", "u", "H", "X", "z", "G", "k", "c"];
    } else if ($rand == 'S') {

        $char = ["E", "v", "G", "y", "B", "t", "u", "a", "J", "c", "j", "A", "T", "Q", "k", "r", "R", "b", "F", "W", "X", "q", "V", "C", "z", "w", "M", "d", "h", "g", "m", "Z", "L", "D", "f", "x", "K", "i", "s", "l", "I", "H", "S", "p", "U", "Y", "P", "e"];
    } else if ($rand == 'T') {

        $char = ["I", "K", "a", "P", "b", "B", "v", "g", "T", "l", "E", "j", "V", "x", "G", "U", "F", "t", "i", "p", "r", "A", "S", "m", "L", "C", "X", "Q", "D", "z", "e", "W", "w", "h", "J", "Y", "c", "d", "M", "u", "R", "s", "H", "k", "f", "q", "Z", "y"];
    } else if ($rand == 'U') {

        $char = ["h", "u", "B", "M", "P", "a", "e", "R", "T", "z", "p", "x", "v", "w", "l", "g", "Z", "c", "E", "U", "r", "q", "J", "S", "k", "G", "L", "f", "i", "F", "I", "D", "b", "Y", "W", "j", "H", "Q", "C", "K", "X", "s", "A", "t", "V", "m", "d", "y"];
    } else if ($rand == 'V') {

        $char = ["Z", "H", "I", "m", "Y", "k", "G", "d", "t", "M", "y", "A", "P", "X", "p", "i", "f", "K", "Q", "C", "D", "z", "V", "W", "c", "B", "v", "g", "R", "e", "T", "u", "L", "F", "x", "j", "J", "h", "U", "q", "r", "l", "S", "a", "s", "E", "b", "w"];
    } else if ($rand == 'W') {

        $char = ["Z", "F", "g", "f", "e", "W", "p", "d", "m", "s", "M", "I", "G", "X", "V", "D", "h", "w", "Y", "x", "C", "t", "l", "c", "b", "E", "S", "y", "a", "r", "v", "j", "U", "R", "L", "k", "q", "A", "u", "B", "z", "T", "H", "P", "Q", "J", "i", "K"];
    } else if ($rand == 'X') {

        $char = ["l", "S", "y", "w", "Y", "R", "L", "z", "g", "m", "G", "c", "A", "r", "E", "x", "Z", "Q", "j", "d", "F", "B", "I", "P", "u", "J", "v", "D", "f", "K", "b", "X", "k", "H", "t", "M", "T", "h", "V", "a", "C", "i", "q", "p", "e", "W", "U", "s"];
    } else if ($rand == 'Y') {

        $char = ["q", "r", "F", "i", "k", "R", "V", "S", "J", "Q", "e", "t", "U", "Y", "D", "a", "y", "L", "b", "A", "w", "H", "P", "K", "u", "X", "I", "Z", "m", "G", "f", "T", "M", "d", "z", "x", "h", "B", "s", "C", "j", "l", "p", "c", "E", "W", "g", "v"];
    } else if ($rand == 'Z') {

        $char = ["J", "T", "L", "b", "S", "k", "e", "I", "f", "z", "q", "E", "G", "Y", "w", "D", "Z", "F", "R", "W", "d", "u", "j", "m", "l", "P", "a", "H", "y", "c", "v", "Q", "h", "r", "s", "V", "K", "t", "U", "i", "g", "x", "X", "A", "B", "M", "C", "p"];
    } else if ($rand == 'a') {
        $char = ["i", "w", "p", "X", "W", "u", "y", "t", "B", "m", "E", "C", "F", "K", "P", "M", "h", "a", "J", "b", "G", "x", "j", "c", "T", "Y", "f", "g", "z", "A", "L", "s", "Z", "Q", "e", "S", "H", "U", "r", "I", "q", "v", "R", "l", "D", "V", "k", "d"];
    } else if ($rand == 'b') {

        $char = ["M", "I", "F", "x", "s", "C", "Y", "S", "v", "c", "w", "e", "A", "k", "r", "j", "P", "B", "z", "X", "K", "T", "G", "H", "u", "d", "W", "Q", "h", "y", "b", "f", "a", "V", "g", "U", "Z", "E", "t", "l", "L", "R", "i", "D", "p", "J", "q", "m"];
    } else if ($rand == 'c') {

        $char = ["X", "k", "U", "M", "H", "g", "C", "w", "a", "y", "c", "Z", "v", "E", "L", "f", "t", "G", "V", "r", "x", "A", "P", "R", "u", "F", "b", "m", "d", "z", "h", "s", "W", "K", "T", "D", "I", "B", "j", "i", "J", "Q", "e", "Y", "l", "q", "S", "p"];
    } else if ($rand == 'd') {

        $char = ["P", "w", "u", "h", "A", "L", "x", "f", "K", "T", "y", "z", "D", "W", "U", "a", "Q", "k", "B", "m", "F", "I", "Y", "s", "J", "e", "E", "t", "G", "C", "j", "Z", "v", "q", "d", "c", "i", "M", "V", "H", "X", "l", "R", "b", "p", "g", "S", "r"];
    } else if ($rand == 'e') {

        $char = ["s", "l", "S", "P", "z", "g", "x", "D", "Q", "a", "H", "V", "K", "Z", "c", "G", "E", "Y", "r", "m", "A", "B", "w", "R", "d", "W", "q", "y", "T", "j", "U", "C", "I", "e", "f", "M", "v", "J", "L", "X", "k", "b", "t", "u", "p", "F", "h", "i"];
    } else if ($rand == 'f') {

        $char = ["d", "g", "F", "q", "y", "c", "S", "v", "Z", "G", "D", "Y", "K", "k", "x", "X", "a", "B", "E", "h", "T", "u", "H", "j", "p", "i", "s", "t", "z", "e", "L", "C", "r", "l", "P", "J", "W", "I", "V", "R", "U", "w", "b", "Q", "f", "A", "M", "m"];
    } else if ($rand == 'g') {

        $char = ["x", "Y", "i", "r", "E", "l", "L", "J", "F", "m", "R", "s", "B", "Q", "S", "V", "f", "A", "I", "D", "g", "H", "k", "d", "K", "U", "P", "q", "w", "u", "W", "Z", "a", "y", "G", "z", "e", "X", "c", "C", "b", "p", "M", "t", "h", "j", "v", "T"];
    } else if ($rand == 'h') {

        $char = ["x", "f", "u", "X", "H", "b", "M", "m", "G", "i", "c", "p", "Y", "j", "S", "h", "C", "R", "K", "T", "U", "k", "v", "z", "W", "l", "d", "w", "a", "Q", "J", "E", "F", "I", "y", "V", "t", "Z", "e", "A", "B", "D", "q", "r", "s", "g", "P", "L"];
    } else if ($rand == 'i') {

        $char = ["w", "T", "m", "v", "l", "L", "F", "b", "i", "r", "c", "h", "D", "R", "Z", "e", "q", "W", "j", "A", "I", "z", "J", "k", "u", "S", "B", "Q", "s", "p", "t", "x", "d", "y", "g", "U", "a", "f", "V", "G", "X", "P", "K", "Y", "M", "H", "E", "C"];
    } else if ($rand == 'j') {

        $char = ["s", "P", "J", "m", "S", "k", "Y", "v", "g", "b", "L", "f", "r", "K", "j", "M", "w", "p", "R", "d", "a", "l", "T", "A", "Q", "i", "e", "q", "E", "c", "X", "G", "B", "H", "u", "V", "t", "y", "W", "x", "I", "U", "z", "h", "Z", "C", "D", "F"];
    } else if ($rand == 'k') {

        $char = ["d", "z", "v", "u", "F", "P", "S", "c", "f", "E", "D", "B", "m", "G", "k", "T", "R", "h", "V", "s", "g", "K", "A", "e", "r", "w", "i", "x", "Y", "a", "W", "J", "b", "H", "Q", "l", "t", "X", "Z", "U", "q", "M", "I", "L", "C", "y", "j", "p"];
    } else if ($rand == 'l') {

        $char = ["x", "c", "J", "y", "a", "w", "v", "C", "e", "s", "K", "Q", "X", "b", "R", "t", "M", "d", "H", "F", "Z", "P", "A", "p", "E", "V", "r", "h", "B", "I", "Y", "f", "l", "j", "W", "z", "U", "g", "L", "T", "u", "k", "q", "G", "i", "S", "D", "m"];
    } else if ($rand == 'm') {

        $char = ["M", "w", "Z", "S", "t", "z", "P", "l", "i", "K", "J", "h", "V", "F", "b", "r", "C", "k", "L", "W", "m", "p", "e", "B", "v", "I", "D", "j", "a", "X", "s", "Q", "d", "f", "R", "E", "x", "c", "Y", "U", "H", "T", "g", "A", "G", "q", "y", "u"];
    } else if ($rand == 'n') {

        $char = ["u", "Q", "z", "A", "L", "r", "p", "w", "H", "v", "P", "V", "D", "K", "j", "B", "Y", "h", "S", "k", "F", "d", "l", "E", "i", "f", "a", "q", "x", "U", "R", "I", "t", "M", "J", "G", "e", "W", "y", "C", "m", "c", "X", "g", "s", "Z", "T", "b"];
    } else if ($rand == 'p') {

        $char = ["P", "d", "C", "x", "s", "J", "u", "q", "M", "A", "X", "L", "S", "i", "m", "Z", "g", "l", "T", "c", "G", "y", "E", "F", "R", "B", "D", "r", "K", "w", "Q", "H", "W", "t", "j", "Y", "V", "z", "a", "f", "e", "I", "k", "b", "v", "p", "h", "U"];
    } else if ($rand == 'q') {

        $char = ["K", "V", "L", "f", "w", "Q", "i", "T", "G", "F", "m", "U", "B", "q", "p", "r", "H", "u", "Z", "y", "P", "C", "x", "d", "Y", "M", "s", "z", "l", "v", "X", "j", "h", "J", "D", "S", "A", "t", "E", "g", "c", "e", "R", "W", "a", "b", "I", "k"];
    } else if ($rand == 'r') {

        $char = ["J", "K", "X", "W", "b", "G", "e", "H", "F", "u", "E", "L", "U", "B", "M", "x", "D", "R", "s", "C", "Y", "k", "i", "v", "A", "p", "P", "Z", "d", "Q", "a", "j", "l", "T", "f", "h", "z", "t", "q", "m", "V", "y", "w", "r", "c", "S", "I", "g"];
    } else if ($rand == 's') {

        $char = ["z", "b", "y", "t", "X", "M", "W", "r", "d", "C", "g", "Q", "f", "i", "U", "S", "h", "m", "L", "G", "l", "j", "s", "E", "a", "c", "H", "V", "R", "Z", "w", "u", "F", "e", "v", "I", "Y", "T", "q", "J", "A", "K", "D", "x", "k", "p", "B", "P"];
    } else if ($rand == 't') {

        $char = ["E", "v", "e", "w", "L", "F", "D", "A", "G", "W", "j", "k", "q", "x", "M", "Z", "Y", "c", "g", "Q", "a", "V", "b", "l", "B", "U", "z", "s", "f", "y", "C", "p", "S", "h", "R", "m", "r", "u", "J", "H", "X", "i", "K", "t", "I", "T", "d", "P"];
    } else if ($rand == 'u') {

        $char = ["a", "S", "D", "Q", "F", "T", "s", "t", "u", "Y", "c", "L", "v", "f", "k", "b", "G", "B", "e", "V", "y", "g", "x", "q", "z", "d", "l", "J", "U", "w", "W", "I", "X", "H", "R", "r", "C", "h", "i", "m", "j", "Z", "p", "A", "M", "P", "E", "K"];
    } else if ($rand == 'v') {

        $char = ["y", "Q", "S", "m", "T", "F", "g", "j", "L", "D", "I", "d", "c", "E", "z", "K", "B", "b", "Z", "k", "U", "a", "C", "w", "v", "x", "W", "H", "r", "A", "u", "Y", "t", "l", "h", "J", "f", "P", "G", "R", "e", "i", "q", "X", "p", "V", "s", "M"];
    } else if ($rand == 'w') {

        $char = ["c", "u", "H", "Z", "P", "D", "d", "y", "b", "L", "s", "F", "V", "a", "A", "v", "S", "T", "q", "C", "U", "i", "X", "J", "j", "M", "x", "g", "E", "R", "p", "I", "h", "r", "t", "f", "G", "z", "W", "k", "B", "Q", "w", "m", "e", "Y", "l", "K"];
    } else if ($rand == 'x') {

        $char = ["L", "b", "S", "x", "E", "m", "p", "r", "Q", "i", "W", "D", "d", "U", "h", "l", "P", "J", "v", "V", "Y", "s", "g", "K", "A", "I", "B", "y", "t", "C", "c", "G", "H", "X", "M", "j", "k", "F", "Z", "a", "f", "T", "z", "e", "u", "R", "q", "w"];
    } else if ($rand == 'y') {

        $char = ["b", "G", "u", "A", "i", "P", "T", "d", "v", "K", "L", "c", "j", "J", "Q", "Z", "Y", "g", "x", "p", "a", "s", "W", "y", "q", "H", "F", "S", "k", "I", "V", "w", "C", "r", "E", "X", "D", "t", "l", "z", "B", "f", "m", "U", "M", "R", "e", "h"];
    } else if ($rand == 'z') {
        $char = ["t", "v", "S", "b", "Z", "W", "T", "j", "Y", "P", "g", "f", "I", "x", "h", "z", "d", "B", "L", "u", "a", "V", "D", "H", "c", "r", "C", "Q", "F", "w", "G", "p", "U", "E", "R", "y", "X", "M", "q", "e", "i", "k", "m", "l", "K", "A", "s", "J"];
    }
    $newNumber = [];
    for ($i = 0; $i < count($number); $i++) {

        for ($j = 0; $j < count($search); $j++) {
            if ($search[$j] == $number[$i]) {
                $newNumber[] = $char[$j];
            }
        }
    }

    return implode('', $newNumber);
}


function codeNumber($rand, $number)
{

    $searck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ":", "-", "_", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    $number = str_split($number);
    $char = [];

    if ($rand == 'A') {
        $char = ["G", "d", "I", "k", "B", "g", "b", "m", "f", "x", "J", "T", "p", "Q", "D", "i", "s", "C", "S", "h", "u", "L", "R", "A", "w", "l", "P", "E", "q", "v", "F", "V", "M", "c", "j", "Y", "W", "Z", "z", "r", "t", "U", "H", "e", "K", "y", "a", "X"];
    } else if ($rand == 'B') {
        $char = ["w", "b", "I", "a", "l", "T", "t", "H", "y", "B", "Z", "q", "Y", "K", "D", "k", "U", "r", "V", "J", "x", "G", "m", "f", "S", "p", "d", "E", "W", "s", "i", "v", "C", "R", "M", "F", "c", "g", "X", "e", "P", "L", "A", "j", "h", "u", "Q", "z"];
    } else if ($rand == 'C') {
        $char = ["w", "y", "x", "W", "p", "Z", "a", "j", "h", "V", "P", "m", "r", "S", "q", "E", "G", "Q", "K", "I", "b", "R", "v", "X", "g", "i", "D", "z", "H", "C", "s", "T", "k", "t", "e", "u", "M", "U", "L", "J", "l", "B", "c", "f", "F", "A", "d", "Y"];
    } else if ($rand == 'D') {

        $char = ["M", "v", "i", "r", "K", "H", "T", "w", "F", "l", "U", "u", "B", "p", "z", "W", "j", "S", "t", "q", "a", "Z", "e", "L", "g", "y", "I", "b", "d", "C", "G", "E", "f", "m", "V", "c", "A", "Y", "D", "X", "k", "P", "Q", "J", "x", "R", "s", "h"];
    } else if ($rand == 'E') {
        $char = ["Z", "t", "H", "L", "s", "V", "D", "Q", "B", "q", "v", "m", "a", "S", "j", "X", "W", "T", "x", "w", "b", "c", "Y", "C", "p", "z", "A", "r", "K", "U", "J", "I", "k", "h", "E", "f", "R", "e", "y", "g", "F", "i", "G", "M", "P", "d", "l", "u"];
    } else if ($rand == 'F') {

        $char = ["j", "x", "M", "U", "f", "W", "r", "D", "l", "z", "t", "c", "q", "H", "J", "L", "y", "v", "d", "g", "R", "Y", "X", "P", "w", "b", "k", "G", "F", "m", "Z", "u", "h", "S", "E", "p", "K", "Q", "s", "C", "B", "I", "V", "T", "A", "a", "e", "i"];
    } else if ($rand == 'G') {
        $char = ["g", "v", "R", "i", "E", "f", "S", "P", "z", "p", "I", "C", "B", "k", "M", "W", "s", "u", "y", "w", "t", "j", "U", "Y", "D", "F", "m", "e", "T", "Q", "r", "J", "X", "x", "d", "a", "h", "H", "q", "c", "A", "V", "G", "l", "b", "K", "L", "Z"];
    } else if ($rand == 'H') {

        $char = ["a", "L", "t", "G", "j", "J", "m", "g", "P", "w", "v", "b", "l", "c", "h", "U", "e", "D", "X", "F", "q", "Y", "y", "T", "f", "R", "u", "z", "Q", "d", "B", "M", "C", "Z", "A", "x", "K", "S", "s", "W", "V", "p", "r", "H", "i", "I", "k", "E"];
    } else if ($rand == 'I') {

        $char = ["B", "u", "y", "b", "S", "s", "i", "v", "J", "g", "E", "Z", "M", "L", "W", "V", "z", "Y", "t", "e", "r", "G", "w", "P", "T", "l", "U", "x", "C", "F", "d", "a", "R", "I", "p", "k", "D", "Q", "K", "c", "q", "m", "X", "A", "h", "H", "f", "j"];
    } else if ($rand == 'J') {

        $char = ["L", "Y", "S", "U", "Z", "T", "X", "f", "P", "x", "V", "d", "q", "c", "E", "s", "g", "C", "t", "A", "l", "J", "v", "R", "W", "B", "G", "M", "i", "H", "I", "a", "h", "D", "b", "e", "m", "j", "K", "w", "u", "r", "k", "p", "z", "F", "Q", "y"];
    } else if ($rand == 'K') {

        $char = ["c", "y", "J", "D", "f", "m", "U", "v", "k", "Z", "s", "B", "i", "a", "h", "X", "g", "V", "w", "T", "A", "d", "K", "C", "l", "W", "t", "j", "M", "H", "z", "P", "x", "G", "u", "b", "Y", "R", "S", "e", "p", "Q", "q", "F", "r", "L", "E", "I"];
    } else if ($rand == 'L') {

        $char = ["Q", "e", "d", "R", "U", "J", "f", "B", "t", "F", "s", "Y", "y", "D", "p", "u", "r", "j", "h", "i", "X", "E", "Z", "x", "V", "g", "z", "T", "A", "S", "G", "b", "a", "K", "P", "I", "v", "w", "M", "m", "C", "l", "q", "c", "k", "W", "L", "H"];
    } else if ($rand == 'M') {

        $char = ["D", "i", "q", "k", "K", "r", "t", "I", "u", "h", "f", "m", "d", "Y", "G", "A", "P", "E", "J", "L", "a", "H", "b", "T", "w", "M", "W", "p", "Q", "c", "y", "C", "Z", "l", "g", "F", "V", "B", "v", "X", "j", "s", "U", "z", "S", "e", "R", "x"];
    } else if ($rand == 'N') {

        $char = ["s", "t", "u", "d", "x", "c", "R", "F", "b", "T", "W", "H", "C", "l", "h", "w", "J", "v", "Z", "U", "y", "m", "B", "A", "k", "j", "f", "S", "i", "g", "P", "G", "L", "r", "Q", "z", "D", "V", "K", "q", "I", "e", "Y", "M", "X", "E", "p", "a"];
    } else if ($rand == 'P') {

        $char = ["l", "P", "C", "u", "L", "g", "D", "F", "w", "t", "H", "b", "S", "B", "c", "Q", "Z", "x", "a", "U", "m", "J", "K", "v", "i", "E", "M", "W", "X", "G", "A", "V", "r", "q", "f", "d", "T", "k", "R", "j", "y", "z", "p", "e", "h", "Y", "s", "I"];
    } else if ($rand == 'Q') {

        $char = ["E", "e", "G", "k", "m", "t", "M", "Q", "I", "U", "x", "F", "C", "R", "Y", "T", "P", "H", "w", "S", "j", "A", "a", "c", "p", "u", "Z", "J", "X", "B", "l", "z", "V", "W", "r", "s", "i", "v", "g", "q", "b", "f", "d", "K", "D", "h", "L", "y"];
    } else if ($rand == 'R') {

        $char = ["q", "l", "Q", "E", "C", "D", "t", "U", "h", "f", "s", "J", "m", "g", "d", "p", "r", "T", "R", "B", "a", "S", "y", "Z", "I", "W", "b", "L", "j", "V", "x", "i", "A", "K", "P", "M", "Y", "v", "w", "F", "e", "u", "H", "X", "z", "G", "k", "c"];
    } else if ($rand == 'S') {

        $char = ["E", "v", "G", "y", "B", "t", "u", "a", "J", "c", "j", "A", "T", "Q", "k", "r", "R", "b", "F", "W", "X", "q", "V", "C", "z", "w", "M", "d", "h", "g", "m", "Z", "L", "D", "f", "x", "K", "i", "s", "l", "I", "H", "S", "p", "U", "Y", "P", "e"];
    } else if ($rand == 'T') {

        $char = ["I", "K", "a", "P", "b", "B", "v", "g", "T", "l", "E", "j", "V", "x", "G", "U", "F", "t", "i", "p", "r", "A", "S", "m", "L", "C", "X", "Q", "D", "z", "e", "W", "w", "h", "J", "Y", "c", "d", "M", "u", "R", "s", "H", "k", "f", "q", "Z", "y"];
    } else if ($rand == 'U') {

        $char = ["h", "u", "B", "M", "P", "a", "e", "R", "T", "z", "p", "x", "v", "w", "l", "g", "Z", "c", "E", "U", "r", "q", "J", "S", "k", "G", "L", "f", "i", "F", "I", "D", "b", "Y", "W", "j", "H", "Q", "C", "K", "X", "s", "A", "t", "V", "m", "d", "y"];
    } else if ($rand == 'V') {

        $char = ["Z", "H", "I", "m", "Y", "k", "G", "d", "t", "M", "y", "A", "P", "X", "p", "i", "f", "K", "Q", "C", "D", "z", "V", "W", "c", "B", "v", "g", "R", "e", "T", "u", "L", "F", "x", "j", "J", "h", "U", "q", "r", "l", "S", "a", "s", "E", "b", "w"];
    } else if ($rand == 'W') {

        $char = ["Z", "F", "g", "f", "e", "W", "p", "d", "m", "s", "M", "I", "G", "X", "V", "D", "h", "w", "Y", "x", "C", "t", "l", "c", "b", "E", "S", "y", "a", "r", "v", "j", "U", "R", "L", "k", "q", "A", "u", "B", "z", "T", "H", "P", "Q", "J", "i", "K"];
    } else if ($rand == 'X') {

        $char = ["l", "S", "y", "w", "Y", "R", "L", "z", "g", "m", "G", "c", "A", "r", "E", "x", "Z", "Q", "j", "d", "F", "B", "I", "P", "u", "J", "v", "D", "f", "K", "b", "X", "k", "H", "t", "M", "T", "h", "V", "a", "C", "i", "q", "p", "e", "W", "U", "s"];
    } else if ($rand == 'Y') {

        $char = ["q", "r", "F", "i", "k", "R", "V", "S", "J", "Q", "e", "t", "U", "Y", "D", "a", "y", "L", "b", "A", "w", "H", "P", "K", "u", "X", "I", "Z", "m", "G", "f", "T", "M", "d", "z", "x", "h", "B", "s", "C", "j", "l", "p", "c", "E", "W", "g", "v"];
    } else if ($rand == 'Z') {

        $char = ["J", "T", "L", "b", "S", "k", "e", "I", "f", "z", "q", "E", "G", "Y", "w", "D", "Z", "F", "R", "W", "d", "u", "j", "m", "l", "P", "a", "H", "y", "c", "v", "Q", "h", "r", "s", "V", "K", "t", "U", "i", "g", "x", "X", "A", "B", "M", "C", "p"];
    } else if ($rand == 'a') {
        $char = ["i", "w", "p", "X", "W", "u", "y", "t", "B", "m", "E", "C", "F", "K", "P", "M", "h", "a", "J", "b", "G", "x", "j", "c", "T", "Y", "f", "g", "z", "A", "L", "s", "Z", "Q", "e", "S", "H", "U", "r", "I", "q", "v", "R", "l", "D", "V", "k", "d"];
    } else if ($rand == 'b') {

        $char = ["M", "I", "F", "x", "s", "C", "Y", "S", "v", "c", "w", "e", "A", "k", "r", "j", "P", "B", "z", "X", "K", "T", "G", "H", "u", "d", "W", "Q", "h", "y", "b", "f", "a", "V", "g", "U", "Z", "E", "t", "l", "L", "R", "i", "D", "p", "J", "q", "m"];
    } else if ($rand == 'c') {

        $char = ["X", "k", "U", "M", "H", "g", "C", "w", "a", "y", "c", "Z", "v", "E", "L", "f", "t", "G", "V", "r", "x", "A", "P", "R", "u", "F", "b", "m", "d", "z", "h", "s", "W", "K", "T", "D", "I", "B", "j", "i", "J", "Q", "e", "Y", "l", "q", "S", "p"];
    } else if ($rand == 'd') {

        $char = ["P", "w", "u", "h", "A", "L", "x", "f", "K", "T", "y", "z", "D", "W", "U", "a", "Q", "k", "B", "m", "F", "I", "Y", "s", "J", "e", "E", "t", "G", "C", "j", "Z", "v", "q", "d", "c", "i", "M", "V", "H", "X", "l", "R", "b", "p", "g", "S", "r"];
    } else if ($rand == 'e') {

        $char = ["s", "l", "S", "P", "z", "g", "x", "D", "Q", "a", "H", "V", "K", "Z", "c", "G", "E", "Y", "r", "m", "A", "B", "w", "R", "d", "W", "q", "y", "T", "j", "U", "C", "I", "e", "f", "M", "v", "J", "L", "X", "k", "b", "t", "u", "p", "F", "h", "i"];
    } else if ($rand == 'f') {

        $char = ["d", "g", "F", "q", "y", "c", "S", "v", "Z", "G", "D", "Y", "K", "k", "x", "X", "a", "B", "E", "h", "T", "u", "H", "j", "p", "i", "s", "t", "z", "e", "L", "C", "r", "l", "P", "J", "W", "I", "V", "R", "U", "w", "b", "Q", "f", "A", "M", "m"];
    } else if ($rand == 'g') {

        $char = ["x", "Y", "i", "r", "E", "l", "L", "J", "F", "m", "R", "s", "B", "Q", "S", "V", "f", "A", "I", "D", "g", "H", "k", "d", "K", "U", "P", "q", "w", "u", "W", "Z", "a", "y", "G", "z", "e", "X", "c", "C", "b", "p", "M", "t", "h", "j", "v", "T"];
    } else if ($rand == 'h') {

        $char = ["x", "f", "u", "X", "H", "b", "M", "m", "G", "i", "c", "p", "Y", "j", "S", "h", "C", "R", "K", "T", "U", "k", "v", "z", "W", "l", "d", "w", "a", "Q", "J", "E", "F", "I", "y", "V", "t", "Z", "e", "A", "B", "D", "q", "r", "s", "g", "P", "L"];
    } else if ($rand == 'i') {

        $char = ["w", "T", "m", "v", "l", "L", "F", "b", "i", "r", "c", "h", "D", "R", "Z", "e", "q", "W", "j", "A", "I", "z", "J", "k", "u", "S", "B", "Q", "s", "p", "t", "x", "d", "y", "g", "U", "a", "f", "V", "G", "X", "P", "K", "Y", "M", "H", "E", "C"];
    } else if ($rand == 'j') {

        $char = ["s", "P", "J", "m", "S", "k", "Y", "v", "g", "b", "L", "f", "r", "K", "j", "M", "w", "p", "R", "d", "a", "l", "T", "A", "Q", "i", "e", "q", "E", "c", "X", "G", "B", "H", "u", "V", "t", "y", "W", "x", "I", "U", "z", "h", "Z", "C", "D", "F"];
    } else if ($rand == 'k') {

        $char = ["d", "z", "v", "u", "F", "P", "S", "c", "f", "E", "D", "B", "m", "G", "k", "T", "R", "h", "V", "s", "g", "K", "A", "e", "r", "w", "i", "x", "Y", "a", "W", "J", "b", "H", "Q", "l", "t", "X", "Z", "U", "q", "M", "I", "L", "C", "y", "j", "p"];
    } else if ($rand == 'l') {

        $char = ["x", "c", "J", "y", "a", "w", "v", "C", "e", "s", "K", "Q", "X", "b", "R", "t", "M", "d", "H", "F", "Z", "P", "A", "p", "E", "V", "r", "h", "B", "I", "Y", "f", "l", "j", "W", "z", "U", "g", "L", "T", "u", "k", "q", "G", "i", "S", "D", "m"];
    } else if ($rand == 'm') {

        $char = ["M", "w", "Z", "S", "t", "z", "P", "l", "i", "K", "J", "h", "V", "F", "b", "r", "C", "k", "L", "W", "m", "p", "e", "B", "v", "I", "D", "j", "a", "X", "s", "Q", "d", "f", "R", "E", "x", "c", "Y", "U", "H", "T", "g", "A", "G", "q", "y", "u"];
    } else if ($rand == 'n') {

        $char = ["u", "Q", "z", "A", "L", "r", "p", "w", "H", "v", "P", "V", "D", "K", "j", "B", "Y", "h", "S", "k", "F", "d", "l", "E", "i", "f", "a", "q", "x", "U", "R", "I", "t", "M", "J", "G", "e", "W", "y", "C", "m", "c", "X", "g", "s", "Z", "T", "b"];
    } else if ($rand == 'p') {

        $char = ["P", "d", "C", "x", "s", "J", "u", "q", "M", "A", "X", "L", "S", "i", "m", "Z", "g", "l", "T", "c", "G", "y", "E", "F", "R", "B", "D", "r", "K", "w", "Q", "H", "W", "t", "j", "Y", "V", "z", "a", "f", "e", "I", "k", "b", "v", "p", "h", "U"];
    } else if ($rand == 'q') {

        $char = ["K", "V", "L", "f", "w", "Q", "i", "T", "G", "F", "m", "U", "B", "q", "p", "r", "H", "u", "Z", "y", "P", "C", "x", "d", "Y", "M", "s", "z", "l", "v", "X", "j", "h", "J", "D", "S", "A", "t", "E", "g", "c", "e", "R", "W", "a", "b", "I", "k"];
    } else if ($rand == 'r') {

        $char = ["J", "K", "X", "W", "b", "G", "e", "H", "F", "u", "E", "L", "U", "B", "M", "x", "D", "R", "s", "C", "Y", "k", "i", "v", "A", "p", "P", "Z", "d", "Q", "a", "j", "l", "T", "f", "h", "z", "t", "q", "m", "V", "y", "w", "r", "c", "S", "I", "g"];
    } else if ($rand == 's') {

        $char = ["z", "b", "y", "t", "X", "M", "W", "r", "d", "C", "g", "Q", "f", "i", "U", "S", "h", "m", "L", "G", "l", "j", "s", "E", "a", "c", "H", "V", "R", "Z", "w", "u", "F", "e", "v", "I", "Y", "T", "q", "J", "A", "K", "D", "x", "k", "p", "B", "P"];
    } else if ($rand == 't') {

        $char = ["E", "v", "e", "w", "L", "F", "D", "A", "G", "W", "j", "k", "q", "x", "M", "Z", "Y", "c", "g", "Q", "a", "V", "b", "l", "B", "U", "z", "s", "f", "y", "C", "p", "S", "h", "R", "m", "r", "u", "J", "H", "X", "i", "K", "t", "I", "T", "d", "P"];
    } else if ($rand == 'u') {

        $char = ["a", "S", "D", "Q", "F", "T", "s", "t", "u", "Y", "c", "L", "v", "f", "k", "b", "G", "B", "e", "V", "y", "g", "x", "q", "z", "d", "l", "J", "U", "w", "W", "I", "X", "H", "R", "r", "C", "h", "i", "m", "j", "Z", "p", "A", "M", "P", "E", "K"];
    } else if ($rand == 'v') {

        $char = ["y", "Q", "S", "m", "T", "F", "g", "j", "L", "D", "I", "d", "c", "E", "z", "K", "B", "b", "Z", "k", "U", "a", "C", "w", "v", "x", "W", "H", "r", "A", "u", "Y", "t", "l", "h", "J", "f", "P", "G", "R", "e", "i", "q", "X", "p", "V", "s", "M"];
    } else if ($rand == 'w') {

        $char = ["c", "u", "H", "Z", "P", "D", "d", "y", "b", "L", "s", "F", "V", "a", "A", "v", "S", "T", "q", "C", "U", "i", "X", "J", "j", "M", "x", "g", "E", "R", "p", "I", "h", "r", "t", "f", "G", "z", "W", "k", "B", "Q", "w", "m", "e", "Y", "l", "K"];
    } else if ($rand == 'x') {

        $char = ["L", "b", "S", "x", "E", "m", "p", "r", "Q", "i", "W", "D", "d", "U", "h", "l", "P", "J", "v", "V", "Y", "s", "g", "K", "A", "I", "B", "y", "t", "C", "c", "G", "H", "X", "M", "j", "k", "F", "Z", "a", "f", "T", "z", "e", "u", "R", "q", "w"];
    } else if ($rand == 'y') {

        $char = ["b", "G", "u", "A", "i", "P", "T", "d", "v", "K", "L", "c", "j", "J", "Q", "Z", "Y", "g", "x", "p", "a", "s", "W", "y", "q", "H", "F", "S", "k", "I", "V", "w", "C", "r", "E", "X", "D", "t", "l", "z", "B", "f", "m", "U", "M", "R", "e", "h"];
    } else if ($rand == 'z') {
        $char = ["t", "v", "S", "b", "Z", "W", "T", "j", "Y", "P", "g", "f", "I", "x", "h", "z", "d", "B", "L", "u", "a", "V", "D", "H", "c", "r", "C", "Q", "F", "w", "G", "p", "U", "E", "R", "y", "X", "M", "q", "e", "i", "k", "m", "l", "K", "A", "s", "J"];
    }

    $newNumber = [];
    for ($i = 0; $i < count($number); $i++) {

        for ($j = 0; $j < count($char); $j++) {
            if ($char[$j] == $number[$i]) {
                $newNumber[] = $searck[$j];
            }
        }
    }
    return implode('', $newNumber);
}
?>