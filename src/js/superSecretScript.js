$(document).ready(function(){
	$("#secret-canvas").hide();

	// when the canvas has been clicked on or in
	$("#canvasSuperSecretCanvas").on("click", function() {
		// check that the canvas has been filled with an image (in
		// this instance it will only have one specific image)
		var _canvas = $("#canvasSuperSecretCanvas");
			if(_canvas.html() === "filled") {
			// get a handle to the audio element on the page
			var clickSound = $("#clickSound");
			//var clickSound = document.getElementById('clickSound');
			// get the audio file to play
			clickSound = new Audio('attachments/boom.mp3');
			// set up an event handler for when it has finished playing
			clickSound.addEventListener("ended",function() {
				// force a refresh of the page
				window.location.reload(1);
			});
			// play the audio element
			clickSound.play();
		}
	});
});	


/**********************************************************************************
 * The following code is taken and adapted from this web page:
 * http://mattkirman.com/2009/05/11/how-to-recreate-the-konami-code-in-javascript/
 *********************************************************************************/

// check to make sure that the browser can handle window.addEventListener
if (window.addEventListener) {
    // create the keys and konami variables
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
    
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function(e){
        // push the keycode to the 'keys' array
        keys.push(e.keyCode);
        
        // and check to see if the user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {

            (function() {
				// code in here will execute right away
				// since the () at the end executes this (function(){})
				// alert('Two Up, Two Down, Let-Right, Left-Right, B, A');
				// The following image is an editted version of:
				//   http://wallpaperswide.com/konami_code-wallpapers.html
				var imgKonamiCode = new Image();
				imgKonamiCode.src = 'attachments/KonamiCode.png';
				imgKonamiCode.onload = function() {
					var _canvas = $("#canvasSuperSecretCanvas");
					var _canvasContext = _canvas[0].getContext("2d");
					if (_canvasContext != null){
						_canvasContext.drawImage(imgKonamiCode, 0, 0, imgKonamiCode.width, imgKonamiCode.height);
						_canvas.html("filled");
						$("#secret-canvas").show();
					}
				};
			})();
            
            // and finally clean up the keys array
            keys = [];
        };
    }, true);
};
