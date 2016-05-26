var main = function () {
	"use strict";
	var $new_comment;
	$(".left button").on("click", function (event) {
		add_comment();
	});
	$("main section.left input").on("keypress", function (event) {
		if(event.keyCode == 13){
			add_comment();
		}
	});
};

var add_comment = function () {		
	if ($("main section.left input").val()!=="") {
		$new_comment = $("<p>").text($("main section.left input").val());
		$new_comment.hide();
		$("main section.right").append($new_comment);
		$new_comment.fadeIn();
		$("main section.left input").val("");
	}
}
$(document).ready(main);