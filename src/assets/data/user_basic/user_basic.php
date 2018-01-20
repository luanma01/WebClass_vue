<?php
header("Content-Type:application/json");
require_once("../init.php");
session_start();
$id=$_SESSION["id"];
$result=mysqli_query($conn,"SELECT * FROM classmate WHERE id=$id");
$data=mysqli_fetch_assoc($result);
echo json_encode($data);
?>