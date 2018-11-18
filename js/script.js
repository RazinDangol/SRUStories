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
	//Setting survey results to the voting function
    $("academicsrad").onclick = voteFunc;
    $("collegeliferad").onclick = voteFunc;
    $("clubsrad").onclick = voteFunc;

	// Login form specific events 
	$("login-btn").onclick = loginForm; // Open the login form
	$("login-close").onclick = formClose; // Close the login form

	// Close the form if user clicks outside the form 
	var outsideForm = $("login-form");
	window.onclick = function(event){
		if(event.target ==  outsideForm){
			formClose();
		}
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

function voteFunc(){
   survey = $("surveyarea")
    survey.innerHTML = "Thanks for voting for the next post!"
}
// Open the login form
function loginForm(){
	$("login-form").style.display = "block";
}

// Close the login form
function formClose(){
	$("login-form").style.display = "none";
}

