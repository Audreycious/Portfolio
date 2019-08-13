
const STORE = {
    currentView: null,
    hamburgerMenuOpen: false
};


function buttonHandler(params) {
    // listen for when clicked
        // click trigger bounces to the appropriate section

    // Home Page View
    $("main").on('click', "[class^=home-button]", function() {
        console.log("Home clicked!");
        contentSectionFadeOut();
        contentSectionFadeIn(event.target);
        if (!$(event.target).hasClass("page420")) {
            blurHandler();
        }
    })

    // logo button
    $("main").on('click', "[class^=logo-button]", function() {
        console.log("Logo clicked!");
        contentSectionFadeOut();
        if (STORE.hamburgerMenuOpen) { 
            STORE.hamburgerMenuOpen = !STORE.hamburgerMenuOpen;
            blurOut();
        }
        contentSectionFadeIn(event.target);
    })

    // about button
    $("main").on('click', "[class^=about-button]", function() {
        console.log("About clicked!");
        contentSectionFadeOut();
        contentSectionFadeIn(event.target);
        if (!$(event.target).hasClass("page420")) {
            blurHandler();
        }
    })

    // projects button
    $("main").on('click', "[class^=projects-button]", function() {
        console.log("Projects clicked!");
        contentSectionFadeOut();
        contentSectionFadeIn(event.target);
        if (!$(event.target).hasClass("page420")) {
            blurHandler();
        }
    })

    $("main").on('click', "[class^=contact-button]", function() {
        console.log("Contact clicked!");
        contentSectionFadeOut();
        contentSectionFadeIn(event.target);
        if (!$(event.target).hasClass("page420")) {
            blurHandler();
        }
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


    $("main").on("click", "#projects-button-about-section", function () {
        $('#content-section').animate({scrollTop: 0}, "slow");
        contentSectionFadeOut();
        if (STORE.hamburgerMenuOpen = true) {
            STORE.hamburgerMenuOpen = !STORE.hamburgerMenuOpen;
            $("#hemburgairrrrr-content-nav").fadeOut("slow", function() {

            });
        }
        contentSectionFadeIn(event.target);
    })

    $("#contact-form").on("submit", function () {
        event.preventDefault();
    })
}

function contentSectionFadeOut() {
    $("#content-section").children().fadeOut(200, function() {

    });
    return;
}

function contentSectionFadeIn(thisVar) {
    console.log(thisVar.value);
    let thisSection = `.${thisVar.value}-section`;
    console.log(thisSection);
    $(thisSection).removeClass("hidden").fadeIn("slow", function() {

    });
    return;
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
