function method1(){
	var frame = document.getElementsByName("contentFrame")[0];	
	var temp = parent.contentFrame.document.title;
    var temp1 = temp.indexOf("Tutorial");
    var tutPage = parseInt(temp.substring((temp1 + 9),temp.length));  //Extract page number
    var answer = frame.contentWindow.ans;
    console.log(frame.contentWindow);
    var qs = getQueryStrings();
    var unit = qs["lname"].substring(1,qs["lname"].indexOf(".htm"));
    if(unit == '13B'){
    	unit = '13';
    }
    var imported = document.createElement('script');
    imported.src = ('http://raise.spd.louisville.edu/includes/variables' + unit + '.js') ;
    document.head.appendChild(imported);
	var answerBox = frame.contentDocument.getElementById('answerBox');
	console.log(window);
	answerBox.value = ans[tutpage];
	//checkAnswer()
}

// taken from https://stackoverflow.com/questions/2907482/how-to-get-the-query-string-by-javascript
function getQueryStrings() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 

  return assoc; 
}
method1(); 