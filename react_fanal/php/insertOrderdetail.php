<?php
// update-user.php is for updating an existing user.
// Method: POST - http://localhost/php-react/update-user.php
// Required Fields: id --> EmpId, user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (
    isset($data->seq) &&
    isset($data->OrderId) &&
    isset($data->ProdId) &&
    isset($data->Qty) &&
    isset($data->Discount) &&
    is_numeric($data->Qty)
) {
    $seq = $data->seq;
    $OrderId = $data->OrderId;
    $ProdId =  $data->ProdId;
    $Qty =  $data->Qty;
    $Discount = $data->Discount;

    $sql = "INSERT INTO `orderdetail`(`seq`,`OrderId`, `ProdId`, `Qty`, `Discount`) VALUES ('$seq','$OrderId','$ProdId','$Qty','$Discount')";
    $query = mysqli_query($db_connection,$sql);
    if ($query) {
        $last_id = mysqli_insert_id($db_connection);
        echo json_encode(["success" => 1, "msg" => "新增成功", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 1, "msg" => "新增失敗"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "新增失敗"]);
}
?>