
const STORE = {
    homePageBG: null,
    aboutPageContent: null,
    projectsPageContent: null,
    heroPageContent: null
};


function buttonHandler(params) {
    // listen for when clicked
        // click trigger bounces to the appropriate section
    // home button
    $("body").on('click', "#home-button")
    // about button
    $("body").on('click', "#about-button")
    // projects button
    $("body").on('click', "#projects-button")
    // contact button - stretch
    $("body").on('click', "#contact-button")
    // email button
    $("body").on('click', "#email-button")
    // phone number button
    $("body").on('click', "#phone-button")
    // hamburger menu button
        // changes background to blurred version
    $("body").on('click', "#hamburger-button")

    // stretch: add a contact button that causes a pop up over the hero page and changes the background to the blurred version
    
}

function textFade(params) {
    // fade the hero text in from left to right when the home page loads
    // return
}













function viewHandler(params) {
    // being mindful for future development where I can have all the views load dynamically when the buttons are pressed. Would remove the bounce down button at that time.
}