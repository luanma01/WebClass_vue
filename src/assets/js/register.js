(()=>{
	//查找id为txtName的文本框
	var txtName=document.getElementById("txtName");
	var txtPwd=document.getElementById("txtPwd");
	var checkMsg=document.getElementById("checkMsg");
	var rePwd=document.getElementById("rePwd");
	//为txtName添加失去焦点事件
	txtName.onkeyup=e=>{
		checkName(e.target);//当前触发事件的文本框
	}
	txtName.onblur=()=>{
		checkMsg.innerHTML=`<a href="login.html">已有账号?去登陆</a>`;
	}
	function checkName(txt){
		return new Promise(callback=>{
			ajax1({
				type:"post",
				url:"data/routes/checkName.php",
				data:"uname="+txt.value.trim(),
				dataType:"text"
			}).then(text=>{
				console.log(text);
				if(text=="false")
					checkMsg.innerHTML="用户名已存在!";
				else{
					checkMsg.innerHTML="ok";
					callback();}
			})
		})
	}
	//checkPsw
	rePwd.onblur=()=>{
		checkMsg.innerHTML=txtPwd.value===rePwd.value?`<a href="login.html">已有账号?去登陆</a>`:"密码必须一致！";
	}
	//查找id为btnReg的按钮,绑定单击事件
	document.getElementById("btnReg").onclick=()=>{
		if(txtPwd.value===rePwd.value){
			checkName(txtName)
			.then(()=>{
				ajax1({
					type:"post",
					url:"data/routes/register.php",
					data:"uname="+txtName.value.trim()+"&password="+txtPwd.value.trim(),
					dataType:"text"
				}).then(()=>{
					//注册成功，跳转回首页
					location="login.html";
				})
			})
		}
	}
})();