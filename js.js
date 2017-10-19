/** Repeat this function for any links with different goto address **/
/** THIS CODE IS NOT My own, it is taken from an online resource and was slightly edited **/


/** Trying to make animation stay after being triggered (ONCE AGAIN NOT MY code)

$("#newget").one("mouseover", function() {
  $("#newget div").addClass('permahover');
});

**/

$(document).ready(function(){
	$('#smooth').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $("#smoother");

	    $('html, body').animate({
	        'scrollTop': $target.offset().top
	    }, 1200, function () {

	    });
	});
});

$(document).ready(function(){
	$('#smoothie').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $("#evensmoother");

	    $('html, body').animate({
	        'scrollTop': $target.offset().top
	    }, 1200, function () {

	    });
	});
});
