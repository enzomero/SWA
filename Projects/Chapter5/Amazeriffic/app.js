var $element, $content, toDosR, new_task;
var main = function () {
		"use strict"
	var toDos = [
		"To buy product",
		"Refresh some new tasks",
		"To be ready for lection in monday",
		"To responce for letters customers from LinkedIn",
		"To walk in the park with Gracy",
		"Finish to write the book"
	];

	$(".tabs a span").toArray().forEach(function (element) {
		$(element).on("click", function () {
			$element = $(element);
			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			if ($element.parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				for (var i=toDos.length; i>=0; i--) {
					$content.append($("<li>").text(toDos[i]));
				}
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				})
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(3)")) {
				$content = $("<input type='text' name='input'><button>Add</button>");
				$("main .content").append($content);
				$(".content button").on("click", function (event) {
					toDos.push($(".content input").val());
					console.log($(".content input").val());
				});
			}
			return false;
		});

		
	});	
	$(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);