var width = prompt("What would you like the width to be?");
var length = prompt("and the length?");
var even = " ";
var odd = "#";
//get size variables

for(var j = 0; j < length; j++){
  var line = "";
  //loop to print line
  for (var i = 0; i<width; i++){
    if(i % 2 === 0){
  	    line +=even;
  	  } else {
    	   line +=odd;
  	  }
  }
  line += "\n";
  console.log(line);
  if(even === "#"){
    var even = " ";
    var odd = "#";
  }else{
    var even = "#";
    var odd = " ";
  }
}
