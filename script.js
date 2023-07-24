const fechaObjetivo = new Date("2023-07-29T00:00:00").getTime();
let llegoACero = false;

function actualizarCronometro() {
	const ahora = new Date().getTime();
	const tiempoRestante = fechaObjetivo - ahora;

	if (tiempoRestante > 0) {
		const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
		const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
		const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

		document.getElementById("dias").innerText = agregarCero(dias);
		document.getElementById("horas").innerText = agregarCero(horas);
		document.getElementById("minutos").innerText = agregarCero(minutos);
		document.getElementById("segundos").innerText = agregarCero(segundos);
	} else if (!llegoACero) {
		document.getElementById("dias").innerText = "00";
		document.getElementById("horas").innerText = "00";
		document.getElementById("minutos").innerText = "00";
		document.getElementById("segundos").innerText = "00";
		llegoACero = true;
		lanzarConfeti();
	}
}

function agregarCero(numero) {
	return numero < 10 ? "0" + numero : numero;
}

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

function lanzarConfeti() {
	const confettiSettings = {
		angle: randomInRange(55, 125),
		spread: randomInRange(50, 70),
		particleCount: randomInRange(50, 100),
		origin: { y: 0.6 },
	};

	// Bucle para lanzar confeti cada segundo después de llegar a cero
	const confetiInterval = setInterval(() => {
		confetti(confettiSettings);
	}, 1000);

	// Detener el intervalo después de un tiempo (por ejemplo, 5 segundos)
	setTimeout(() => {
		clearInterval(confetiInterval);
	}, 20000);
}

setInterval(actualizarCronometro, 1000);
