

$(document).ready(function(){
	
	window.sr = ScrollReveal();
	sr.reveal('.sr-contact');

	$('#fantasti-button').click(function(){
		window.open('https://jenniesnider.wordpress.com/', '_blank');
	})

	$('#pod-button').click(function(){
		window.open('https://obscure-beyond-31667.herokuapp.com/', '_blank');
	})

	$('#stage-button').click(function(){
		window.open('https://kennethlw.github.io/StageDive/', '_blank');
	})

	$('#cat-button').click(function(){
		window.open('https://orangedalek.github.io/Cat-Collector/', '_blank');
	})
})


$(document).ready(function(){
	$('.carousel').carousel({
  	interval: 4000
	})
});

$(".left").click(function(){
    $("#app-slides").carousel("prev");
})

$(".right").click(function(){
    $("#app-slides").carousel("next");
})

