<!-- GitHub canvas !-->
var imgGitHub = new Image();
imgGitHub.src = 'Attachments/GitHub.png';
	imgGitHub.onload = function() {
		var _canvasContext = document.getElementById('codeLinksCanvasGitHub').getContext("2d");
		if (_canvasContext != null){
			_canvasContext.drawImage(imgGitHub, 0, 0);
		}
	};
	
document.getElementById("codeLinksCanvasGitHub").onclick = function(e){
	window.open('https://github.com/GaProgMan','_blank');
};

<!-- Gists canvas !-->
var imgGists = new Image();
	imgGists.src = 'Attachments/Gists.png';
	imgGists.onload = function() {
		var _canvasContext = document.getElementById('codeLinksCanvasGists').getContext("2d");
		if (_canvasContext != null){
			_canvasContext.drawImage(imgGists, 0, 0);
		}
	};

document.getElementById("codeLinksCanvasGists").onclick = function(e){
	window.open('https://gist.github.com/GaProgMan', '_blank');
};

<!-- Japanese blog canvas !-->
var imgNihon = new Image();
	imgNihon.src = 'Attachments/Nihon.png';
	imgNihon.onload = function() {
		var _canvasContext = document.getElementById('blogLinksNihon').getContext("2d");
		if (_canvasContext != null){
			_canvasContext.drawImage(imgNihon, 0, 0);
		}
	};

document.getElementById("blogLinksNihon").onclick = function(e){
	window.open('http://nihon.gaprogman.com','_blank');
};

<!-- English language blog -->
var imgEnglish = new Image();
	imgEnglish.src = 'Attachments/English.png';
	imgEnglish.onload = function() {
		var _canvasContext = document.getElementById('blogLinksEnglish').getContext("2d");
		if (_canvasContext != null){
			_canvasContext.drawImage(imgEnglish, 0, 0);
		}
	};

document.getElementById("blogLinksEnglish").onclick = function(e){
	window.open('http://blog.gaprogman.com','_blank');
}

<!-- not so secret canvas -->
document.getElementById("canvasSuperSecretCanvas").onclick = function(e){
	<!-- check that the canvas has been filled with an image (in -->
	<!-- this instance it will only have one specific image) -->
	var _canvas = document.getElementById('canvasSuperSecretCanvas');
	if(_canvas.innerHTML == "filled") {
		<!-- get a handle to the audio element on the page -->
		var clickSound = document.getElementById('clickSound');
		<!-- get the audio file to play -->
		clickSound = new Audio('Attachments/boom.mp3');
		<!-- set up an event handler for when it has finished playing -->
		clickSound.addEventListener("ended",function() {
			<!-- force a refresh of the page -->
			window.location.reload(1);
			});
		<!-- play the audio element -->
		clickSound.play();
	}
}