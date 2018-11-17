window.onload = function(){
	// check if the browser is Chrome 
	var acceptedBrowser = (navigator.vendor=="Google Inc.");
	
	// if chrome then fix the header to the top
	if(acceptedBrowser){
		$("header").addClassName("header-top");
	}
	else{
		// show the message 
		$("message").style.visibility = "visible";
		$("close").onclick = msgClose;
	}

	var navLinks = $$(".navigation>a");
	// Attaching the mouse over and mouse out events to every nav links
	for(var i = 0;i<navLinks.length;i++){
		navLinks[i].onmouseover = navMouseOver;
		navLinks[i].onmouseout = navMouseOut;
	}
};

// highlight the navbar item when mouse hover
function navMouseOver(){
	this.addClassName("nav-highlight");
}

// remove the highlight when mouse hovers out 
function navMouseOut(){
	this.removeClassName("nav-highlight");
}

// Remove the message when user clicks on close button
function msgClose(){
	$("message").remove();
	$("header").addClassName("header-top"); // moving header to top of the page
}