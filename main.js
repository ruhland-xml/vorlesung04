function changeCircle01Color(){
	let circle01 = document.getElementById("circle-01");
	let circle02 = document.getElementById("circle-02");
	if ( circle01.classList.contains("svg-red")){
		circle01.classList.remove("svg-red");
		circle01.classList.add("svg-blue");			
	}
	else {
		circle01.classList.remove("svg-blue");
		circle01.classList.add("svg-red");			
	}
}


document.addEventListener("DOMContentLoaded", function(event){
	let colorbutton = document.getElementById("colorbutton");
	colorbutton.addEventListener("click",function(e){
		changeCircle01Color();
	});

	let circle01 = document.getElementById("circle-01");
	circle01.addEventListener("click",function(e){
		changeCircle01Color();
	});
});