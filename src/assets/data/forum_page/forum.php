<?php
require_once('../init.php');

$msg=$_REQUEST['msg'];
$uname=$_REQUEST['uname'];

$sql="INSERT INTO blog VALUES(null,'$msg',now(),'$uname')";
$result=mysqli_query($conn,$sql);
if($result===false) return "wrong";
?>