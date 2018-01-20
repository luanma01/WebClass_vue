<?php
@$file=$_FILES["file"];
var_dump($file);
if($file){
	if($file["error"]>0) 
		echo "Error:".$file["error"]."<br>";
	else{
		if(file_exists("upload/".$file["name"])){
			echo $file["name"]."已存在";
		}else{
			move_uploaded_file($file["tmp_name"],"../../img/avatar/".$file["name"]);
		}
	}
}