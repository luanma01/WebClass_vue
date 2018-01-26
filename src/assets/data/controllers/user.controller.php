<?php
//data/controllers/user.controller.php
//data/init.php
require_once("../init.php");//$conn
function register(){
	global $conn;//引入全局变量
	//从request中获得uname和upwd
	@$uname=$_REQUEST["uname"];
	@$password=$_REQUEST["password"];
	if($uname&&$password){
		//定义SQL语句insert into user...
		$sql="insert into `user`(uname,password) values('$uname','$password')";
		//执行SQL语句获得执行结果
		mysqli_query($conn,$sql);
	}
}
function checkName(){
	global $conn;
	$uname=$_REQUEST["uname"];//从request中获得uname
	if($uname){
		$sql=//定义SQL语句select * from user...
			"select * from classmate where uname='$uname'";
		$result=mysqli_query($conn,$sql);//执行SQL查询
		$users=//获得查询结果
			mysqli_fetch_all($result,1);//MYSQLI_ASSOC
		if(count($users)!=0)//如果查询结果中有数据
			echo json_encode(["code"=>-1,"msg"=>'ban']);//不能使用
		else//否则
			echo json_encode(["code"=>1,"msg"=>'ok']);//可以使用
	}
}
function login(){
	global $conn;
	//从request中获得uname和upwd
	@$uname=$_REQUEST["uname"];
	@$password=$_REQUEST["password"];
	if($uname&&$password){
		//定义SQL语句: select 
		$sql="select * from `user` where uname='$uname' and binary password='$password'";
		$result=mysqli_query($conn,$sql);//执行查询
		//获得查询结果
		$user=mysqli_fetch_all($result,1);
		if(count($user)!=0){//如果有结果
			session_start();//打开session
			$_SESSION["uid"]=$user[0]["uid"];
			echo json_encode(["code"=>1,"msg"=>'success',"uid"=>$user[0]["uid"]]);//登录成功
		}else//否则
            echo json_encode(["code"=>-1,"msg"=>'fail']);//登录失败
	}
}
function logout(){
	session_start();
	$_SESSION["uid"]=null;
}
function isLogin(){
	global $conn;
	session_start();
	@$id=$_SESSION["uid"];
	if($id){
		$sql=
			"select uname from `user` where id=$id";
		$result=mysqli_query($conn,$sql);
		$user=mysqli_fetch_all($result,1);
		echo json_encode(["ok"=>1,"uname"=>$user[0]["uname"]]);
	}else
		echo json_encode(["ok"=>0]);
}