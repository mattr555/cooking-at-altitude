$(document).ready(function(){
	var NUM_PARTICLES = 100

	$('#alt_slider').on('input', function(){
		var to_remove = Math.floor(10*Math.sqrt(this.value)),
			$particles = $('.particle');
		console.log(to_remove);
		$particles.show();

		for (var i = 0; i < NUM_PARTICLES; i++){
			if (i < to_remove){
				$particles.eq(i).hide();
			}
		}
	});

	var $altparticles = $('#alt_particles'),
		$press_alt = $('#press_alt'),
		$press_press = $('#press_press'),
		$press_bp = $('#press_bp');

	for (var i = 0; i < NUM_PARTICLES; i++) {
		$('<div class="particle"></div>')
			.css('top', Math.floor(Math.random()*300))
			.css('left', Math.floor(Math.random()*300))
			.appendTo($altparticles);
	}

	function altToPressure(alt){
		return 29.921* Math.pow(1-6.8753*0.000001 * alt, 5.2559);
	}

	function pressureToBP(press){
		return 49.161 * Math.log(press) + 44.932;
	}

	function FtoC(F){
		return (F-32)*5/9;
	}

	$('#press_slider').on('input', function(){
		var alt = this.value,
			press = altToPressure(alt),
			bp = FtoC(pressureToBP(press));
		$press_alt.html(alt);
		$press_press.html((25.4*press).toFixed(2));
		$press_bp.html(bp.toFixed(2));
	})
});