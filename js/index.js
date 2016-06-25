function start() {

$('a').click(function (e) {
	e.preventDefault();
});

$("p.readmore").click(function () {
	$("p.readmore").hide ();
	$("p.hide").slideDown(1500);
	$("p.readless.hide").show ();
});

$("p.readless.hide").click (function () {
	$("p.readless.hide").hide ();
	$("p.hide").slideUp(1);
	$("p.readmore").show();
});

$("a.learnmore").click(function () {
	$("#learnmoretext").slideDown ("fast");
	$("a.learnmore").hide ();
});

}

$(document).ready(start);




