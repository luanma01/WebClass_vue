<?php
require_once('../init.php');

$result=mysqli_query($conn,"SELECT * FROM blog ORDER BY id DESC LIMIT 0,6");

if($result==false) echo json_encode(["code"=>-1,"msg"=>"SQL err"]);
else {
    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode(["code"=>1,"output"=>$output]);
}
?>