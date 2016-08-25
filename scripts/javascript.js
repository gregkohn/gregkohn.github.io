///// Import dependencies

// @codekit-prepend "modernizr.full.js"
// @codekit-prepend "jquery-1.10.2.min.js"
// @codekit-prepend "jquery.scrollTo.min.js"
// @codekit-prepend "scrollReveal.min.js"



//Sitewide functions

var app = app || {


	init: function(){

		app.nav();

	},

	// stagger: function(selector, delay_step){

	// 	$(selector).each(function(i){
	// 		$(this).css("-webkit-transition-delay",(i*delay_step)+"ms").css("transition-delay",(i*delay_step)+"ms").css("-webkit-animation-delay",(i*delay_step)+"ms").css("animation-delay",(i*delay_step)+"ms");		
	// 	});

	// },

	nav: function(){

		$("#hamburger").on("click", function(){
			$(this).toggleClass("is-active");
			$("#tophat").toggleClass("is-transparent");
			$("nav").toggleClass("is-visible");
			$("html").toggleClass("is-frozen");
		});


		//In case you choose something on the current page
		$("a.nav__link--hash").on("click", function(){
			$("#hamburger").removeClass("is-active");
			$("#tophat").removeClass("is-transparent");
			$("nav").removeClass("is-visible");
			$("html").removeClass("is-frozen");
		});

	}

}


//Home page functions

var home = home || {

	init: function(){

		home.splash();
		home.arrow();

	},

	splash: function(){

		//Reset vertical scroll to top
		//window.scrollTo(0,0);

		//Freeze scrollbars during initial name animation
		//$("html").addClass("freeze");

		//Run name animation
		home.name_animation();


	},

	name_animation: function(){

		setTimeout(function(){

			$(".name").removeClass("is-larger");

		}, 1000);

		setTimeout(function(){

			$("#tophat").removeClass("is-hidden");
			$(".intro__arrow").removeClass("is-hidden");
			$("html").removeClass("freeze");

		}, 2800); //2300ms is longest letter delay + 500ms for animation completion

	},

	arrow: function() {

		$(".intro__arrow span").on("click", function(){
			$.scrollTo(".home-section--skills", 800);
		});

	}


}


//Project page functions

var project = project || {

	init: function(){

		project.details_btn();

	},

	details_btn: function(){

		$(".project-intro__btn--details").on("click", function(){
			var info_position = $(".project-info").offset().top - 50;
			$.scrollTo(info_position, 500);
		});

	}


}



$(document).ready(function(){
	app.init();
});