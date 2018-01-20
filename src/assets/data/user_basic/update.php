<?php
require_once("../init.php");
$uname=$_REQUEST["uname"];
$name=$_REQUEST["name"];
$gender=$_REQUEST["gender"];
$birthday=$_REQUEST["birthday"];
//$avatar=$_REQUEST["avatar"];
$weChat=$_REQUEST["weChat"];

$sql="UPDATE classmate SET name='$name',birthday='$birthday',gender='$gender',weChat='$weChat' WHERE uname='$uname'";
mysqli_query($conn,$sql);
?>