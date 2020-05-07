const msTen = document.getElementById("msTens");
const msHund = document.getElementById("msHundreds");
const secs = document.getElementById("secondOnes");
const secsTen = document.getElementById("secondTens");

const start = document.getElementById("start");
const reest = document.getElementById("reset");

var milliTen = 0;
var milliHund = 0;
var seconds = 0;
var secondsTen = 0;

var timer = setInterval(()=>{
	milliTen++;
	msTen.textContent = milliTen;

	if(milliTen === 9){
		milliTen = 0;
		milliHund++;
		msHund.textContent = milliHund;

		if(milliHund === 9){
			milliHund = 0;
			seconds++;
			secs.textContent = seconds;

			if(seconds === 9){
				seconds = 0;
				secondsTen++;
				secsTen.textContent = secondsTen;

				if(secondsTen === 1){
					milliTen = 0;
					milliHund = 0;
					seconds = 0;
       
					msTen.textContent = milliTen;
					msHund.textContent = milliHund;
					secs.textContent = seconds;

					clearInterval(timer);
				}
			}
		}
	}


}, 10);