var $new_comment;
var $old_comment;

var main = function () {
	"use strict";
	$(".left button").on("click", function (event) {
		add_comment();
	});
	$("main section.left input").on("keypress", function (event) {
		if(event.keyCode == 13){
			add_comment();
		}
	});
	$("main section.right p").on("click", function () {
			window.alert("Are you surios!?");
		});
};

var add_comment = function () {		
	if ($("main section.left input").val()!=="") {
		$new_comment = $("<p>").text($("main section.left input").val());
		$new_comment.hide();
		$("main section.right").append($new_comment);
		$new_comment.fadeIn();
		$old_comment = $("main section.right p:first-child");
		$("main section.left input").val("");
		$("main section.right p:first-child").remove();
	}
}
$(document).ready(main);