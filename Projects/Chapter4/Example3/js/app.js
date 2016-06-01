var main = function () {
	for (var i = 1; i <= 100; i++) {
		getFizzBuzz(i);
	}
	};

function getFizzBuzz(num) {
    if(num%3===0 || num%5===0 || num%5===15) return "?";
}

$(document).ready(main);