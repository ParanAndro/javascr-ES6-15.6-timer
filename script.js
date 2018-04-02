class Stopwatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}
	
	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
	}

}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());