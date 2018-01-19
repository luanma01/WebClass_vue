//加载index.html->自动执行header.js
(()=>{
	function loadStatus(){
		//判断登录:
		var loginList=document.getElementById("loginList");
		var welcomeList=document.getElementById("welcomeList");
		ajax1({
			type:"get",
			url:"data/routes/isLogin.php"
		}).then(data=>{//data:{ok:1,uname:xxx}
			if(data.ok>0){
				loginList.style.display="none";
				welcomeList.style.display="flex";
				document.getElementById("uname").innerHTML=data.uname;
			}else{
				loginList.style.display="flex";
				welcomeList.style.display="none";
			}
		});
	}
	//向header.html发送ajax get请求
	ajax1({
		type:"get",
		url:"html/header.html",
		dataType:"html"
	})
	//然后，将获得的html片段，设置为header的内容
	.then(html=>{
		var header=document.getElementById("header");
		header.innerHTML=html;

		loadStatus();

		//注销: 
		document.getElementById("logout").onclick=()=>{
			ajax1({
				type:"get",
				url:"data/routes/logout.php",
				dataType:"text"
			}).then(()=>{
				location.replace("index.html");
			})
		}
	})
})();