//========== loader ========================//
	    //paste this code under the head tag or in a separate js file.
		// Wait for window load
		$(window).load(function() {
			// Animate loader off screen
			$(".se-pre-con").fadeOut("slow");;
		});
//========== dropdown hover ========================//	
  	 $(".btn-group, .dropdown").hover(
        function () {
            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).addClass('open');
        },
        function () {
            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).removeClass('open');
        });
//========== contact navbar hidden   ========================//	
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		  if (prevScrollpos > currentScrollPos) {
		    document.getElementById("navbar").style.top = "0";
		  } else {
		    document.getElementById("navbar").style.top = "-50px";
		  }
		  prevScrollpos = currentScrollPos;
		}
//========== wow animate  ========================//	
	    new WOW().init();
//========== source hidden ========================//	

		// Disable inspect element
		// $(document).bind("contextmenu",function(e) {
		//  e.preventDefault();
		// });
		// $(document).keydown(function(e){
		//     if(e.which === 123){
		//        return false;
		//     }
		// });
		/*-----ctrl + U disable-----*/

		// document.onkeydown = function(e) {
		//     if(e.keyCode == 123) {
		//      return false;
		//     }
		//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
		//      return false;
		//     }
		//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
		//      return false;
		//     }
		//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
		//      return false;
		//     }

		//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
		//      return false;
		//     }   
		//     if(e.ctrlKey && e.keyCode == 'I'.charCodeAt(0)){
		//      return false;
		//     }    
		// }
//========== scroll back top ========================//	

		// ===== Scroll to Top ==== 
		$(window).scroll(function() {
		    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
		        $('#return-to-top').fadeIn(200);    // Fade in the arrow
		    } else {
		        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
		    }
		});
		$('#return-to-top').click(function() {      // When arrow is clicked
		    $('body,html').animate({
		        scrollTop : 0                       // Scroll to top of body
		    }, 500);
		});
//========== end ========================//	