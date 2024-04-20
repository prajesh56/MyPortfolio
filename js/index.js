

/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Skill portfolio page
	
	$(".skill").on('click', function () {
		$("body").addClass("skill-on");
	});
	$(".skill-close").on('click', function () {
		$("body").removeClass("skill-on");
	});

	
	//experience portfolio page
	
	$(".experience").on('click', function () {
		$("body").addClass("experience-on");
	});
	$(".experience-close").on('click', function () {
		$("body").removeClass("experience-on");
	});

	
	//qualification portfolio page
	
	$(".qualification").on('click', function () {
		$("body").addClass("qualification-on");
	});
	$(".qualification-close").on('click', function () {
		$("body").removeClass("qualification-on");
	});

})(jQuery);

// start of script to handle visibility of about section above 610px

function updateBodyClass() {
  	var width = document.body.clientWidth;
    if (width > 610) {
		$("body").removeClass("about-on");
    } 
}

// Call the function initially to set the class on page load
updateBodyClass();

// Add an event listener for window resize
window.addEventListener('resize', updateBodyClass);

// end of script to handle visibility of about section above 610pxss