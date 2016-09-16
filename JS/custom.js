$(function(){
	/*##### Animation scrolling vers une section ####*/
	/*Navigation to accueil*/
	$('#bpaccueil, #bpbrand').click(function() {
	    $('html,body').animate({
	        scrollTop: $('header').offset().top},
	        'slow');
	});
	/*Navigation to historique*/
	$('#bphistorique').click(function() {
	    $('html,body').animate({
	        scrollTop: $('#historique').offset().top},
	        'slow');
	});
	/*Navigation to chaussespieds*/
	$('#bpchaussespieds').click(function() {
	    $('html,body').animate({
	        scrollTop: $('#chaussespieds').offset().top},
	        'slow');
	});
	/*Navigation to tiresbottes*/
	$('#bptiresbottes').click(function() {
	    $('html,body').animate({
	        scrollTop: $('#tiresbottes').offset().top},
	        'slow');
	});
	/*Navigation to personalise*/
	$('#bppersonalise').click(function() {
	    $('html,body').animate({
	        scrollTop: $('#personalise').offset().top},
	        'slow');
	});
	/*Navigation to footer*/
	$('#bpfooter').click(function() {
	    $('html,body').animate({
	        scrollTop: $('#footer').offset().top},
	        'slow');
	});
	/*##### Mailto ####*/
	/*Using contact form to create mailto content*/
	$('#submitEmail').click(function(){
		/*Use the textarea content to put in body mailto*/
		var body = $('#emailContent').val();
		/*Use the email form to send to contact for response*/
		var email = $('#emailReponse').val();
		/*Add href link with mailto content and close modal contact*/
		$(this).attr('href', 'mailto:contact@wildshoes.com?body='+body+'%0D%0AMerci de me répondre à l\'adresse suivante : '+email);
		$('#contact').modal('toggle');
	});

	/*##### Navbar Color change ####*/
	/*For screen size under 1000px width remove class navbarClear on load and scroll screen*/
	/*Statements on load*/
	if ($(window).width() < 769) {
			$("nav").removeClass("navbarClear");
	} else {
		var scrollStart = $(window).scrollTop();
		if (scrollStart > 500) {
			$("nav").removeClass("navbarClear");
		} else if (scrollStart > 910){
			$("nav").removeClass("navbarClear");
		} else {
			$("nav").addClass("navbarClear");
		}
	}
	/*Statements for scroll*/
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if ($(window).width() < 769) {
			$("nav").removeClass("navbarClear");
		} else if ($(window).width() < 1300) {
		    if (scroll > 500) {
		    	$("nav").removeClass("navbarClear");
		    } else {
		    	$("nav").addClass("navbarClear");
		    }
		} else if (scroll > 910) {
			$("nav").removeClass("navbarClear");
		} else {
			$("nav").addClass("navbarClear");
		}
	});
});