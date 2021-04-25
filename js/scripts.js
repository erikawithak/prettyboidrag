(function ($) {
	$("button.form-trigger").on("click", function () {
		$("form.contact-form").css("display", "flex");
	});

	$("form.contact-form .close").on("click", function () {
		$(this).parent().hide();
	});
})(jQuery);
