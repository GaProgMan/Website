/*// GitHub canvas
var imgGitHub = new Image();
imgGitHub.src = 'Attachments/GitHub.png';
imgGitHub.onload = function() {
	$( "#codeLinksCanvasGitHub" ).getContext("2d").drawImage(imgGitHub, 0, 0);
	// Javascript way of doing it 
	//var _canvasContext = document.getElementById('codeLinksCanvasGitHub').getContext("2d");
	//if (_canvasContext != null){
	//	_canvasContext.drawImage(imgGitHub, 0, 0);
	//}
};
	
document.getElementById("codeLinksCanvasGitHub").onclick = function(e){
	window.open('https://github.com/GaProgMan','_blank');
};

// Gists canvas
var imgGists = new Image();
imgGists.src = 'Attachments/Gists.png';
imgGists.onload = function() {
	// jQuery way of doing it
	$( "#codeLinksCanvasGists" ).getContext("2d").drawImage(imgGists, 0, 0);
	// Javascript way of doing it
	//var _canvasContext = document.getElementById('codeLinksCanvasGists').getContext("2d");
	//if (_canvasContext != null){
	//	_canvasContext.drawImage(imgGists, 0, 0);
	//}
};

document.getElementById("codeLinksCanvasGists").onclick = function(e){
	window.open('https://gist.github.com/GaProgMan', '_blank');
};

// Japanese blog canvas
var imgNihon = new Image();
imgNihon.src = 'Attachments/Nihon.png';
imgNihon.onload = function() {
	// jQuery way of doing it
	$( "#blogLinksNihon" ).getContext("2d").drawImage(imgNihon, 0, 0);
	// Javascript way of doing it
	//var _canvasContext = document.getElementById('blogLinksNihon').getContext("2d");
	//if (_canvasContext != null){
	//	_canvasContext.drawImage(imgNihon, 0, 0);
	//}
};

document.getElementById("blogLinksNihon").onclick = function(e){
	window.open('http://nihon.gaprogman.com','_blank');
};

// English language blog
var imgEnglish = new Image();
imgEnglish.src = 'Attachments/English.png';
imgEnglish.onload = function() {
	// jQuery way of doing it
	$( "#blogLinksEnglish" ).getContext("2d").drawImage(imgEnglish, 0, 0);
	// Javascript way of doing it
	//var _canvasContext = document.getElementById('blogLinksEnglish').getContext("2d");
	//if (_canvasContext != null){
	//	_canvasContext.drawImage(imgEnglish, 0, 0);
	//}
};

document.getElementById("blogLinksEnglish").onclick = function(e){
	window.open('http://blog.gaprogman.com','_blank');
}

// Not so secret canvas
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
}*/

/***********************************************************************
 * The following code is taken and adapted from this web page:
 * http://mattkirman.com/2009/05/11/how-to-recreate-the-konami-code-in-javascript/
 **********************************************************************/

// check to make sure that the browser can handle window.addEventListener
if (window.addEventListener) {
    // create the keys and konami variables
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
    
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function (e) {
        // push the keycode to the 'keys' array
        keys.push(e.keyCode);
        
        // and check to see if the user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {

            (function () {
				// code in here will execute right away
				// since the () at the end executes this (function(){})
				// alert('Two Up, Two Down, Let-Right, Left-Right, B, A');
				// The following image is an editted version of:
				//   http://wallpaperswide.com/konami_code-wallpapers.html
				var imgGameLink = new Image();
				imgGameLink.src = '../src/assets/game-link.png';
				imgGameLink.onload = function () {
					var canvas = $("#superSecretCanvas")[0];
					var canvasContext = canvas.getContext("2d");
					if (canvasContext !== null) {
						canvasContext.drawImage(imgGameLink, 0, 0, imgGameLink.width, imgGameLink.height);
						canvas.innerHTML = "filled";
                        canvas.onclick = function (e) {
                            window.open('javascriptGame/test.html');
                        };
					}
				};
			})();
            
            // and finally clean up the keys array
            keys = [];
        }
    }, true);
}