$(function(){
	/*##### Animation scrolling vers une section ####*/
	/*Navigation to accueil*/
	$("#bpaccueil").click(function() {
	    $('html,body').animate({
	        scrollTop: $("header").offset().top},
	        'slow');
	});
	/*Navigation to historique*/
	$("#bphistorique").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#historique").offset().top},
	        'slow');
	});
	/*Navigation to chaussespieds*/
	$("#bpchaussespieds").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#chaussespieds").offset().top},
	        'slow');
	});
	/*Navigation to tiresbottes*/
	$("#bptiresbottes").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#tiresbottes").offset().top},
	        'slow');
	});
	/*Navigation to personalise*/
	$("#bppersonalise").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#personalise").offset().top},
	        'slow');
	});
	/*Navigation to footer*/
	$("#bpfooter").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#footer").offset().top},
	        'slow');
	});
	/*##### Mailto ####*/
	/*Using contact form to create mailto content*/
	$('#submitEmail').click(function(){
		var body = $('#emailContent').val();
		var email = $('#emailReponse').val();
		$(this).attr("href", "mailto:contact@wildshoes.com?body="+body+"%0D%0AMerci de me répondre à l'adresse suivante : "+email);
	})
});
