
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
    // home button
    // $("main").on('click', ".home-button", function() {
    //     $("header").html(`
    //         <div role="hero-text" class="hero-text">
    //             <h1>Audrey Foss</h1>
    //             <p>Future, expert, full-stack Web Developer based in Minneapolis, MN. 
    //             Specializing in creative content design, unique strategies, and superb customer service.</p>
    //         </div>
    //     `)
    // })
        // trigger the home view in the rendering area when either the logo or the hom button are clicked

    // about button
    // $("body").on('click', ".about-button")
        // trigger the about view when about is clicked

    // projects button
    // $("body").on('click', ".projects-button")
        // trigger the projects view when projects is clicked

    // contact button - stretch
    // $("body").on('click', ".contact-button")
        // trigger the contact popup when contact is clicked

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
    $("main").on('click', "input.hemburgairrrrr-menu-button", function () {
        console.log("Hamburger clicked!");
        STORE.hamburgerMenuOpen = !STORE.hamburgerMenuOpen;
        console.log(STORE.hamburgerMenuOpen);
        if (STORE.hamburgerMenuOpen) {
            // $("img#background-image").attr("src", "images/kingfisher_heroBG_hexagon_720square.png");

            // $("img#background-image-hexagon").addClass("click-opacity");

            $(".hero-text").addClass("blur-filter");

            // $("img#background").addClass("blur-filter");

            // $(".hero-text p").fadeOut(200, function() {

            // });
            
            $("#hemburgairrrrr-content-nav").fadeIn("slow", function() {

        })}
        else {
            // $("img#background-image").attr("src", "images/kingfisher_heroBG_flippedWide_1440x811.jpg");
            // $(".hero-text").removeClass("blur-filter");
            // $(".hero-text p").fadeIn("slow", function() {

            // });
            $(".hero-text").removeClass("blur-filter");
            $("#hemburgairrrrr-content-nav").fadeOut("slow", function() {

            })
        }
    })
        // trigger the hemburgairrrrr menu popup with new hyper links that use the buttons above

    // stretch: add a contact button that causes a pop up over the hero page and changes the background to the blurred version
    
}

function textFade(params) {
    // fade the hero text in from left to right when the home page loads
    // return
}







function viewHandler(params) {
    // being mindful for future development where I can have all the views load dynamically when the buttons are pressed. Would remove the bounce down button at that time.
}


buttonHandler();
