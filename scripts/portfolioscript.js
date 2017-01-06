document.addEventListener("DOMContentLoaded", function(){
	//Thanks to W3Schools for the code for the modal. http://www.w3schools.com/howto/howto_css_modals.asp
	var emailModal = document.getElementById('emailModal');
	var emailBtn = document.getElementById('emailBtn');
	var modalClose = document.getElementsByClassName("close")[0];
	var navbar = document.getElementById("navbar");
	var copyEmail= document.getElementById("copyEmail");


	copyEmail.onclick = function(){
		window.prompt("Copy to clipboard: Ctrl+C on Windows, Cmd+C on Mac", "Hendersonj219@gmail.com");
	}
	emailBtn.onclick = function (){
		emailModal.style.display = "block";
		navbar.style.display="none";
	}
	modalClose.onclick = function(){
		emailModal.style.display="none";
		navbar.style.display = "block";
	}
	window.onclick = function(event) {
		if(event.target==emailModal){
			emailModal.style.display = "none";
			navbar.style.display = "block";
		}
	}
});