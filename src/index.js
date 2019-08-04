
const STORE = {
    homePageBG: null,
    aboutPageContent: null,
    projectsPageContent: null,
    heroPageContent: null,
    hamburgerMenuOpen: false
};


function buttonHandler(params) {
    // listen for when clicked
        // click trigger bounces to the appropriate section

    // Home Page View
    $("main").on('click', ".home-link", function() {
        console.log("Home or Logo clicked!");
        $("#content-section").children().addClass("hidden");
        $("#home-section").removeClass("hidden").fadeIn("slow");
        blurHandler();
    })

    // about button
    $("main").on('click', "[class^=about-button]", function() {
        console.log("About clicked!");
        $("#content-section").children().addClass("hidden");
        $("#about-section").removeClass("hidden").fadeIn("slow");
        blurHandler();
    })

    // projects button
    $("main").on('click', "[class^=projects-button]", function() {
        console.log("Projects clicked!");
        $("#content-section").children().addClass("hidden");
        $("#projects-section").removeClass("hidden").fadeIn("slow");
        blurHandler();
    })

    $("body").on('click', "[class^=contact-button]", function() {
        console.log("Contact clicked!");
        $("#content-section").children().addClass("hidden");
        $("#contact-section").removeClass("hidden").fadeIn("slow");
        blurHandler();
    })

    // email button
    // $("body").on('click', ".email-button")
        // trigger the the creation of a new email when email hyperlink is clicked
            // add a subject of "I'm interested in your services"

    // phone number button
    // $("body").on('click', ".phone-button")
        // trigger the calling with the set up calling service when the phone number is clicked
            // stretch - if no set up calling service, ask to send it to your phone as a text

    // hemburgairrrrr menu button
        // changes background to blurred version
    $("main").on('click', "input.hemburgairrrrr-menu-button",  function () {
        blurHandler()
    })
        // trigger the hemburgairrrrr menu popup with new hyper links that use the buttons above

}

// A function that handles how the contact form functions when text is input vs when the text box is empty
function contactLabelHandler() {
    $('.contact-input').keyup(function(){
        if ($(this).val() == '') {  
            $(this).prev().css({opacity: 0});
        }
        else {
            $(this).prev().css({opacity: 100});
        }
    });
}

function blurHandler() {
    STORE.hamburgerMenuOpen = !STORE.hamburgerMenuOpen;
        if (STORE.hamburgerMenuOpen) {
            blurIn();
        }
        else {
            blurOut();
        }
}

function blurIn() {
    $("#content-section").addClass("blur-filter");
    $("#hemburgairrrrr-content-nav").fadeIn("slow", function() {

    })
}

function blurOut() {
    $("#content-section").removeClass("blur-filter");
    $("#hemburgairrrrr-content-nav").fadeOut("slow", function() {

    });
}

function textFade(params) {
    // fade the hero text in from left to right when the home page loads
    // return
}







function viewHandler(params) {
    // being mindful for future development where I can have all the views load dynamically when the buttons are pressed. Would remove the bounce down button at that time.
}


buttonHandler();
contactLabelHandler();
