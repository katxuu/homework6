var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {

	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("Play Video");
} 

function pauseVid() { 

	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 

	video.playbackRate = (video.playbackRate * 0.8);
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {

	video.playbackRate = (video.playbackRate * 1.25);
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {

	if (video.currentTime < 536){
		video.currentTime = (video.currentTime + 60);
	} else {
		video.currentTime = 0;
		video.playbackRate = 1;
	}

	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  
  if(video.muted == false){
  		video.muted = true;
  		document.querySelector("#mute").innerHTML = "Unmute";
  		console.log("Muted");
  	} 
  else {
  		video.muted = false;
  		document.querySelector("#mute").innerHTML = "Mute";
  		console.log("Unmuted");
  	}
}

function changeVolume() {

	var vol = document.querySelector("#volumeSlider").value;

	video.volume = vol/100;
	document.querySelector("#volume").innerHTML = vol + "%";

	console.log("Volume is "+ video.volume);

}
       

function gray() { 

	document.querySelector("#myVideo").classList.add("grayscale");
	console.log("In grayscale");
}

function color() {

	document.querySelector("#myVideo").classList.remove("grayscale");
	console.log("In color"); 
}