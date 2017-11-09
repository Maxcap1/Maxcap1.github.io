/** Repeat this function for any links with different goto address **/
/** THIS CODE IS NOT My own, it is taken from an online resource and was slightly edited **/


/** Trying to make animation stay after being triggered (ONCE AGAIN NOT MY code)

$("#newget").one("mouseover", function() {
  $("#newget div").addClass('permahover');
});

**/



/** Trial USER / PASS form **/
/** Failed attempt at slide down navbar :( **/
$(document).ready(function() {
   $('div.fadedown').fadeIn(1000).removeClass('fadedown')
 }
)

$(document).ready(function () {
    $('div.hidden').fadeIn(2000).removeClass('hidden');
});

$(document).ready(function () {
    $('div.hiddenn').fadeIn(2000).removeClass('hiddenn');
});

$(document).ready(function () {
    $('div.hiddennn').fadeIn(3000).removeClass('hiddennn');
});

$(document).ready(function () {
    $('div.hiddennnn').fadeIn(3000).removeClass('hiddennnn');
});

$(document).ready(function () {
    $('div.hidde').fadeIn(3000).removeClass('hidde');
});




function ElogIn(){
var username = document.getElementById("usernamee").value;
var password = document.getElementById("passworde").value;
if ( username == "Johnny" && password == "Doey123"){
alert ("Logged in successfully! Press 'Ok' to be redirected to the user interface");
window.location = "Employer.html"; 
return false;
}
else{
alert("Sorry, we couldn't find this account in the database. Please try again.");
return false;
}
}

function logIn(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "John" && password == "Doe123"){
alert ("Logged in successfully! Press 'Ok' to be redirected to the user interface");
window.location = "navbar.html"; 
return false;
}
else{
alert("Sorry, we couldn't find this account in the database. Please try again.");
return false;
}
}

$(document).ready(function(){
	$(document).keydown(function(event) {
	    	    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
         
		event.preventDefault();
		
	     }
	});

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
	       if (event.ctrlKey == true) {
           
		   event.preventDefault();
	       }
	});
});
    
/** This function smooth scrolls to a certain location div when a certain div is clicked **/
    


$(document).ready(function(){
	$('#superscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $("#scrolldummy");

	    $('html, body').animate({
	        'scrollTop': $target.offset().top
	    }, 1700, function () {

	    });
	});
}); 


$(document).ready(function(){
	$('#smooth').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $("#scrolldummy");

	    $('html, body').animate({
	        'scrollTop': $target.offset().top
	    }, 1700, function () {

	    });
	});
});

$(document).ready(function(){       
   var scroll_start = 0;
   var maxcapp = $('maxcapp');
   var offset = maxcapp.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollLeft();
      if(scroll_start > offset.Left) {
          $('#navbar').css('background-color', '#ffffff');
       } else {
          $('#navbar').css('background-color', 'transparent');
       }
   });
});



$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


$(document).ready(function() {
      var docHeight = $(document).height(),
      windowHeight = $(window).height(),
      scrollPercent;

      $(window).scroll(function() {
        scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

        $('.scroll-progress').width(scrollPercent + '%');
        });
        });