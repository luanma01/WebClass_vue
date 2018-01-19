(()=>{
	let movies=document.querySelectorAll("#movieList a");
	let videos=document.querySelectorAll("#videoList a");
	console.log(movies);
	for(let i=0;i<movies.length;i++){
		movies[i].onclick=()=>{
			document.getElementById("video").poster="video/posterM"+i+".png";
			document.getElementById("video").src="video/videoM"+i+".mp4";
		}
	}
})();