//JavaScript for Jahmaul' Site

$(function() {
	$( "#tabs" ).tabs();
});

$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#flip2").click(function(){
		$("#panel2").slideToggle("slow");
	});
});