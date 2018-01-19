(()=>{
	let txtUname=document.getElementById("txtUname");
	let txtName=document.getElementById("txtName");
	let txtGender=document.getElementsByName("gender");
	let txtBirth=document.getElementById("txtBirth");
	let txtWeChat=document.getElementById("txtWeChat");
	let txtAvatar=document.getElementById("txtAvatar");
	let imgAvatar=document.querySelector("form td:nth-child(3) img");
	let btn=document.querySelector("form button");
	//载入个人原始信息
	ajax1({
		type:"get",
		url:"data/user_basic/user_basic.php"
	}).then(data=>{
		txtUname.value=data.uname;
		txtName.value=data.name;
		if(data.gender==1) txtGender[0].checked=true;
		if(data.gender==0) txtGender[1].checked=true;
		txtBirth.value=data.birthday;
		txtWeChat.value=data.weChat;
		imgAvatar.src=data.avatar;
	});
	//修改资料
	btn.onclick=()=>updateTxt();
	function updateTxt(){
		let gender=document.querySelector("input:checked");
		console.log(gender);
		ajax1({
			type:"post",
			url:"data/user_basic/update.php",
			data:"uname="+txtUname.value+"&name="+txtName.value+"&birthday="+txtBirth.value+"&weChat="+txtWeChat.value+"&gender="+gender.value,//+"&avatar="+txtAvatar.value,
			dataType:"text"
		}).then(()=>location.reload())
	}
	//修改头像
//		function getPath(obj,fileQuery,transImg){
//			var imgSrc='',imgArr=[],strSrc='';
//			var file=fileQuery.files[0];
//			var reader=new FileReader();
//			reader.onload=function(e){
//				imgSrc=fileQuery.value;
//				imgArr=imgSrc.split(".");
//				strSrc=imgArr[imgArr.length-1].toLowerCase();
//				if(strSrc.localeCompare("jpg")===0||strSrc.localeCompare("jpeg")===0||strSrc.localeCompare("gif")===0||strSrc.localeCompare("png")===0){
//					obj.setAttribute("src",e.target.result);
//				}else{
//					throw new Error("只支持图片文件(.jpa .jpeg .png .gif)");
//				}
//			}
//			reader.readAsDataURL(file);
//		}
//		function show(){
//			var file_img=document.getElementById("imgAvatar"),
//		txtAvatar=document.getElementById("txtAvatar");
//		getPath(file_img,txtAvatar,file_img);
//		}
//		txtAvatar.onchange=()=>show()
	//上传头像
		txtAvatar.addEventListener("change",function(){
			ajax1({
				type:"post",
				url:"data/user_basic/update_avatar.php",
				data:new FormData(document.querySelector("form")),
				processData:false,
				contentType:false
			}).then(()=>{location.reload(true);console.log("file ok");})
		});
})();