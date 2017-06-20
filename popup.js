document.addEventListener('DOMContentLoaded', function(){
	function callFunctionality(){
		chrome.tabs.executeScript({
			file: "functionality.js"
		});
	}
	document.getElementById("button1").addEventListener("click", callFunctionality());
})

