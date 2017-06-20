function method1(){
	var temp = parent.contentFrame.document.title;
    var temp1 = temp.indexOf("Tutorial");
    var tutPage = parseInt(temp.substring((temp1 + 9),temp.length));  //Extract page number
    if(typeof ans == 'undefined' && typeof corAns == 'undefined'){
	    var qs = getQueryStrings();
	    var unit = qs["lname"].substring(1,qs.indexOf(".htm"));
	} else{

	}
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