<?php
require_once("init.php");
session_start();
@$id=$_SESSION["id"];
if($id){
	$sql="select * from classmate where id=$id";
	$result=mysqli_query($conn,$sql);
	$user=mysqli_fetch_all($result,1);

	echo $user[0]["avatar"];
}

?>