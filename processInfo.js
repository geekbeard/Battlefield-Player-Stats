document.addEventListener('DOMContentLoaded', function () {
  //document.querySelector('button').addEventListener('click', showInfo);
  document.getElementById("btn").addEventListener('click', showInfo);
  

});



function showInfo() {
	
	
	var inptNick = document.getElementById("pln");
	var plInfoDiv = document.getElementById("nickInfo");
	
	while (plInfoDiv.hasChildNodes()) {
		plInfoDiv.removeChild(plInfoDiv.lastChild);
	}
	
	var sigs = ["http://bfbc2.statsverse.com/sig/detail2/pc/"+inptNick.value+".png","http://bfbc2.statsverse.com/sig/detail2/ps3/"+inptNick.value+".png","http://bfbc2.statsverse.com/sig/detail2/360/"+inptNick.value+".png","http://bf2.statsverse.com/sig/detail2/pc/"+inptNick.value+".png","http://g.bf3stats.com/pc/H4pfi0Bs/"+inptNick.value+".png"];
	// 0 = bf2bc2 + pc ; 1 = bf2bc2 + ps3 ; 2 = bf2bc2 + xbox ; 3 = bf2 + pc ; 4 = bf3 + pc
	
	var arrlength = sigs.length;
    var element = null;
	
	for (var i = 0; i < arrlength; i++) {
	
		var imgelem = document.createElement("img");
		imgelem.setAttribute("src", sigs[i]);
		//imgelem.setAttribute("src", "images/hydrangeas.jpg");
		document.getElementById("nickInfo").appendChild(imgelem);
	
		
		imgelem.onerror = function () {
			this.src = 'no.png';
			plInfoDiv.removeChild(plInfoDiv.lastChild);
			 // place your error.png image instead
		};
		

	//http://g.bf3stats.com/pc/H4pfi0Bs/693611968.png
	//image.src = "http://g.bf3stats.com/pc/H4pfi0Bs/"+inptNick.value+".png";
	//image.src = "http://bfbc2.statsverse.com/sig/detail2/pc/"+inptNick.value+".png";
	
	
	//plInfoDiv.innerHTML= "<img src=\"http://bfbc2.statsverse.com/sig/detail2/pc/"+inptNick.value+".png\">";
	//http://bfbc2.statsverse.com/sig/detail2/pc/Drunx.png

}

}

function saveChbState() {
	//var chBox = "pc";
	
	var chBoxes = ["bf2","bf2bc2","bf3","pc","ps","xbox"];
	var chBoxEl = null;
	var arrlength = chBoxes.length;
    var element = null;
	
	for (var i = 0; i < arrlength; i++) {
		element = chBoxes[i];
		// Do something with element i.
		chBoxEl = document.getElementById(element);
		localStorage.setItem('ch_'+element,chBoxEl.checked );		
		
	}
	
	
	
	


}