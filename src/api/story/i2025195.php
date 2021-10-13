<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../config-api.php';
include_once "../account/access-token.php";



$checkClient = checkAccessToken($_POST["token"], $_POST["id"]);

if ($checkClient == "accep") {
  //Đường dẫn lưu ảnh đến Server
  $target_dir = "../../../public/files/";
  $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
  $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
  // Kiểm tra xem tệp hình ảnh là hình ảnh thực tế hay hình ảnh giả mạo
  $check = getimagesize($_FILES["myFile"]["tmp_name"]);
  if ($check !== false) {
    //Di chuyển tệp sang thư mục tải lên
    if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file)) {
      echo json_encode(["resul" => $_FILES["myFile"]["name"]]);
    } else {
      echo "Xin lỗi, đã xảy ra lỗi khi tải tệp của bạn lên.";
    }
  } else {
    echo "Tệp không phải là hình ảnh.";
  }
} else {
  echo json_encode(["check" => $checkClient]);
}
?>
