// write js code here if required
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

let countdown=setInterval(function(){
	
	let now=new Date().getTime();
	let distance=countDownDate-now;
	//let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("timers").innerHtml="05/01/2024, ";//+hours+":"+minutes+":"+seconds
	 if (distance < 0) {
    clearInterval(countdown);
   // document.getElementById("demo").innerHTML = "EXPIRED";
  }
},1000)
