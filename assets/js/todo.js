$("ul").on("click", "li", function () {
	$(this).toggleClass("selected");
})

$("ul").on("click", "span", function () {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	})
})

$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todo + "</li>");
	}
})

$("#icon").click(function () {
	$("input[type='text']").fadeToggle(200);
})