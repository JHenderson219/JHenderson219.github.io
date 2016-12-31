document.addEventListener("DOMContentLoaded", function(){
	var emailVisible=false;
	$("#emailButton").on("click", function(){
		if (!emailVisible){
		$("#emailButton").empty().append("Make it disappear! <i class='fa fa-envelope' aria-hidden='true'></i>")
		$("#emailSpot").empty().append("<h3 class='text-center'> Reach me at Hendersonj219@gmail.com </h3>")
		}
	});
});