(()=>{
	function loadImg(){
		ajax1({
			type:"get",
			url:"data/getData.php",
			dataType:"data"
		}).then(data=>{
			if(data!=0)
			document.getElementById("avatarImg").src=data;
		})
	}
	//
	function loadAvatar(){
		ajax1({
			type:"get",
			url:"data/routes/isLogin.php"
		}).then(data=>{//data:{ok:1,uname:xxx}
			if(data.ok==1){
				
				document.getElementById("avatarName").innerHTML=data.uname;
				document.getElementById("personal").href="user_basic.html";
				document.getElementById("personalRead").href="read_page.html";
				document.getElementById("personalVideo").href="video_page.html";
			}
		});
	}
	ajax1({
		type:"get",
		url:"html/aside.html",
		dataType:"html"
	}).then(html=>{
		document.getElementById("aside").innerHTML=html;	
		loadImg();
		loadAvatar();
	})
})();