(()=>{
	ajax("get","html/footer.html","","text").then(html=>{
		document.getElementById("footer").innerHTML=html;
	})
})();