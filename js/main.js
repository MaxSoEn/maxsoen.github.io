$(document).ready(function() {
		
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function hidePage(){
	document.getElementById("myDiv").style.display = "none";	
	document.getElementsByClassName("container-fluid")[0].style.display = "inline";
	document.getElementById("temp").style.display = "block";
	document.getElementById("ice").style.display = "block";
	document.getElementById("co2").style.display = "block";
	document.getElementById("earth").style.display = "block";
}
function tempFunc(){
	document.getElementById("myDiv").style.display = "none";	
	document.getElementById("globe").style.display = "none";
	document.getElementById("container1").style.display = "none";
	document.getElementById("container2").style.display = "none";
	document.getElementById("container3").style.display = "block";
}
function iceFunc(){
	document.getElementById("myDiv").style.display = "none";	
	document.getElementById("globe").style.display = "none";
	document.getElementById("container1").style.display = "none";
	document.getElementById("container2").style.display = "block";
	document.getElementById("container3").style.display = "none";
}
function co2Func(){
	document.getElementById("myDiv").style.display = "none";	
	document.getElementById("globe").style.display = "none";
	document.getElementById("container1").style.display = "block";
	document.getElementById("container2").style.display = "none";
	document.getElementById("container3").style.display = "none";
}
function earFunc(){
	document.getElementById("myDiv").style.display = "none";	
	document.getElementById("globe").style.display = "block";
	document.getElementById("container1").style.display = "none";
	document.getElementById("container2").style.display = "none";
	document.getElementById("container3").style.display = "none";
}
function showPage() {
  document.getElementById("myDiv").style.display = "block";
  //myVar = setTimeout(hidePage, 4000);
}