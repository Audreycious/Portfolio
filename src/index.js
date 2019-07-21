
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
    $("body").on('click', ".home-button")
        // trigger the home view in the rendering area when either the logo or the hom button are clicked

    // about button
    $("body").on('click', ".about-button")
        // trigger the about view when about is clicked

    // projects button
    $("body").on('click', ".projects-button")
        // trigger the projects view when projects is clicked

    // contact button - stretch
    $("body").on('click', ".contact-button")
        // trigger the contact popup when contact is clicked

    // email button
    $("body").on('click', ".email-button")
        // trigger the the creation of a new email when email hyperlink is clicked
            // add a subject of "I'm interested in your services"

    // phone number button
    $("body").on('click', ".phone-button")
        // trigger the calling with the set up calling service when the phone number is clicked
            // stretch - if no set up calling service, ask to send it to your phone as a text

    // hamburger menu button
        // changes background to blurred version
    $("body").on('click', ".hamburger-button")
        // trigger the hamburger menu popup with new hyper links that use the buttons above

    // stretch: add a contact button that causes a pop up over the hero page and changes the background to the blurred version
    
}

function textFade(params) {
    // fade the hero text in from left to right when the home page loads
    // return
}













function viewHandler(params) {
    // being mindful for future development where I can have all the views load dynamically when the buttons are pressed. Would remove the bounce down button at that time.
}