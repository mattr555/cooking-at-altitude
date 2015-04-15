$(document).ready(function(){
	var NUM_PARTICLES = 100

	$('#alt_slider').on('input', function(){
		var to_remove = Math.floor(10*Math.log2(this.value)),
			$particles = $('.particle');
		console.log(to_remove);
		$particles.show();

		for (var i = 0; i < NUM_PARTICLES; i++){
			if (i < to_remove){
				$particles.eq(i).hide();
			}
		}
	});

	var $altparticles = $('#alt_particles');

	for (var i = 0; i < NUM_PARTICLES; i++) {
		$('<div class="particle"></div>')
			.css('top', Math.floor(Math.random()*300))
			.css('left', Math.floor(Math.random()*300))
			.appendTo($altparticles);
	}
});