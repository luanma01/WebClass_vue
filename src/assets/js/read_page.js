(()=>{
	var readPage=document.getElementById("readPage");
	var readList=document.getElementById("rt_nav").getElementsByTagName("a");
	var readPageList=document.getElementById("readPageList");
	//加载notes
	readList[0].onclick=()=>{loadNotes().then(()=>{
		//let books=readPage.getElementsByTagName("a");
		//for(let i=0;i<books.length;i++) books[i].onclick=()=>readbook(i);
		var readPageList=document.getElementById("readPageList");
		readPageList.onclick=e=>{
			if(e.target.nodeName=="H2"){
				ajax1({
					type:"get",
					url:"txt/"+e.target.innerHTML+".html",
					dataType:"txt"
				}).then(txt=>readPage.innerHTML=`<textarea>${txt}</textarea>`)
			}
		}
	})}
	//加载novels
	readList[1].onclick=()=>{loadNovels().then(()=>{
		//let books=readPage.getElementsByTagName("a");
		//for(let i=0;i<books.length;i++) books[i].onclick=()=>readbook(i);
		var readPageList=document.getElementById("readPageList");
		readPageList.onclick=e=>{
			if(e.target.nodeName=="H2"){ 
				ajax1({
					type:"get",
					url:"txt/"+e.target.innerHTML+".html",
					dataType:"txt"
				}).then(txt=>readPage.innerHTML=`<textarea>${txt}</textarea>`)
			}
		}
	})}
	
	function loadNotes(){
		return new Promise((resolve,reject)=>{
			ajax1({
				type:"get",
				url:"html/readPage/notes.html",
				dataType:"html"
			}).then(html=>{
				readPage.innerHTML=html;
				resolve();
			})
		})
	}
	
	function loadNovels(){
		return new Promise((resolve,reject)=>{
			ajax1({
				type:"get",
				url:"html/readPage/novels.html",
				dataType:"html"
			}).then(html=>{
				readPage.innerHTML=html;
				resolve();
			})
		})
	}

})();