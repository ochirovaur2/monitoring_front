// import jQuery from "jquery";

import  "./tagcanvas.js"; 
window.onload = function() {
	let flag = true;
	let timerId = null
	function sendRequest() {
		var xhr = new XMLHttpRequest();

		xhr.open('POST', 'get_data', true);

		xhr.send(); // (1)

		xhr.onreadystatechange = function() { // (3)
		  if (xhr.readyState != 4) return;

		 	console.log(1)

		  if (xhr.status == 200) {
		    
		    var sphereTags = document.getElementById('tagsUl');
		    sphereTags.innerHTML = "" 
		    let response = JSON.parse(xhr.responseText);

		   	for (var component in response){
		   		let markup = '<li><a href="http://www.google.com" target="_blank" class="a-little-big-size color-yellow">' +  component + ': ' + response[component] + '</a></li>'
		   		sphereTags.insertAdjacentHTML('afterbegin', markup);
		   	}
		  } else {
		    console.log(xhr.status + ': ' + xhr.statusText)
		    
		  }

		}
		
		TagCanvas.Reload("myCanvas");
	}

	

	setInterval(sendRequest, 6000)
    
    
  TagCanvas.Start('myCanvas','tags',{
    textColour: null,
    outlineColour: 'white',
    reverse: true,
    depth: 0.7,
    maxSpeed: 0.0015,
    dragControl: true,
    initial: [0.5,-0.9],
    weight: true,
    decel: 1,
    outlineRadius: 10,
    offsetY	: -90
    // stretchY: 0.5
  });

  
};
