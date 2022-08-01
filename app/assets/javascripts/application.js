/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}


function toggleText() {

    // Get all the elements from the page
    var points =
        document.getElementById("defaulttext");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("readmore");

    // If the display property of the dots
    // to be displayed is already set to
    // 'none' (that is hidden) then this
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        buttonText.innerHTML = "Read more...";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Read Less...";
    }
}

function ShowCookieConfirmation(parentid,objectid) {
	alert();
	
	cookieBanner = document.getElementById(parentid);

	HideMessage = document.getElementById(objectid);
	
	HideMessage.style.display = 'none';
	
	if (HideMessage.style.display === 'none') {
    HideMessage.style.display = 'block';

    
  } else {
    HideMessage.style.display = 'none';

   
  }


}
$(document).ready(function () {
	
	$("#btnAcceptCookies").click(function(){
        $("#default_cookie_banner").hide();
		$("#reject_cookie_message").hide();
		$("#accept_cookie_message").show();
    });
	
	$("#btnRejectCookies").click(function(){
        $("#default_cookie_banner").hide();
		$("#accept_cookie_message").hide();
		$("#reject_cookie_message").show();
    });
	
	
	$("#btnAccepthide").click(function(){
        $("#default_cookie_banner").hide();
		$("#accept_cookie_message").hide();
		$("#reject_cookie_message").hide();
    });
	
	$("#btnRejectthide").click(function(){
        $("#default_cookie_banner").hide();
		$("#accept_cookie_message").hide();
		$("#reject_cookie_message").hide();
    });
	
	
  window.MOJFrontend.initAll()
  window.GOVUKFrontend.initAll()
})




new MOJFrontend.FilterToggleButton({
  bigModeMediaQuery: "(min-width: 48.063em)",
  startHidden: true,
  toggleButton: {
    container: $(".moj-action-bar__filter"),
    showText: "Search schedules",
    hideText: "Hide search",
    classes: "govuk-button--secondary",
  },
  closeButton: {
    container: $(".moj-filter__header-action"),
    text: "Close",
  },
  filter: {
    container: $(".moj-filter"),
  },
});
