$(function(){
	/*##### Animation scrolling vers une section ####*/
	/*Navigation vers rubrique historique*/
	$("#bphistorique").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#historique").offset().top},
	        'slow');
	});
	/*Navigation vers rubrique chaussespieds*/
	$("#bpchaussespieds").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#chaussespieds").offset().top},
	        'slow');
	});
	/*Navigation vers rubrique tiresbottes*/
	$("#bptiresbottes").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#tiresbottes").offset().top},
	        'slow');
	});
	/*Navigation vers rubrique personalise*/
	$("#bppersonalise").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#personalise").offset().top},
	        'slow');
	});
	/*Navigation vers rubrique footer*/
	$("#bpfooter").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#footer").offset().top},
	        'slow');
	});
});
