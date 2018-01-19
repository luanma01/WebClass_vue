(()=>{
	//判断登陆状态
	ajax1({
			type:"get",
			url:"data/routes/isLogin.php"
		}).then(data=>{//data:{ok:1,uname:xxx}
			// console.log(data.ok);
			if(data.ok>0)
				document.getElementById("send-uname").innerHTML=data.uname;
			
		});
	//显示消息
	function showMsg(){
		ajax("get","data/forum_page/showMsg.php","").then(res=>{
			if(res.code>0){
				var output=res.output;
                var html="";
                for(var i=output.length-1;i>=0;i--){
                    var msgData=output[i];
                    var fullyear=(msgData.time).slice(0,4);
                    var month=(msgData.time).slice(4,6);
                    var day=(msgData.time).slice(6,8);
                    var h=(msgData.time).slice(8,10);
                    var m=(msgData.time).slice(10,12);
                    var s=(msgData.time).slice(12,14);
                    html+=
                        `<li>
						<p>
							<span>${msgData.uname}：</span>
							<span>${fullyear}年${month}月${day}日 ${h}:${m}:${s}</span>
						</p>
						<h3>${msgData.msg}</h3>
					</li>`;
                }
                document.getElementById("show-msg").innerHTML=html;
            }
		})
	}
	showMsg();
	//定时发送请求查询留言
	setInterval(showMsg,2000);
	//为发送控件绑定单击事件
	send_btn.onclick=()=>{
		var msg=document.getElementById("send-msg").value;
		var uname=document.getElementById("send-uname").innerHTML;
		if(msg!="")
		ajax("get","data/forum_page/forum.php?uname="+uname+"&msg="+msg,"","text").then(data=>{
			document.getElementById("send-msg").value=data;
			showMsg();
		})
	}
})();