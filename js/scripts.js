// (function ($) {
// 	$("button.form-trigger").on("click", function () {
// 		$("form.contact-form").css("display", "flex");
// 	});

// 	$("form.contact-form .close").on("click", function () {
// 		$(this).parent().hide();
// 	});

// 	window.onload = function () {
// 		var el = document.getElementById("g-recaptcha-response");
// 		if (el) {
// 			el.setAttribute("required", "required");
// 		}
// 	};
// })(jQuery);

const testFolder = './images/';
const fs = 'fs';

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});
