(()=>{
	var txtName=document.getElementById("txtName");
	var txtPwd=document.getElementById("txtPwd");
	var checkMsg=document.getElementById("checkMsg");
	txtPwd.onblur=()=>{checkMsg.innerHTML=`<a href="register.html">还没账号？去注册</a>`;}
	document.getElementById("btnLogin").onclick=()=>{
		ajax1({
			type:"post",
			url:"data/routes/login.php",
			data:"uname="+txtName.value.trim()+"&password="+txtPwd.value.trim(),
			dataType:"text"
		}).then(text=>{
			if(text=="false")
				checkMsg.innerHTML="用户名或密码错误!";
			else
				location="index.html";
		})
	};
})();