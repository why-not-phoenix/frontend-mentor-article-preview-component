
var removedElement = $(".footer-2 div.share").clone();
var isShareHovered = false;
var isPopoverHovered = false;

applyClass();

// Reapply classes on window resize
$(window).resize(function () {
    // Clear existing classes before reapplying
    $(".big-screen-wrap").removeClass("row g-0");
    $("header").removeClass("col-md-5");
    $("main").removeClass("col-md-7");
    $(".card-img").removeClass("img-fluid rounded-start card-img-top");
    $(".footer-2").removeClass("pop-over");

    // Reapply classes based on new screen width
    applyClass();
});



function applyClass() {
    // Get screen width
var minWidth = window.innerWidth; 

if (minWidth > 760) {

    // Add bootstrap classes for large screen layout
    $(".big-screen-wrap").addClass("row g-0");
    $("header").addClass("col-md-5");
    $("main").addClass("col-md-7");
    $(".card-img").addClass("img-fluid rounded-start");

    // Remove bootstrap class for small screen layout
    $(".card-img").removeClass("card-img-top");
    
    $(document).ready(function () {
        // Variables to track hover states
        var isShareHovered = false;
        var isPopoverHovered = false;
    
        // Show popover when share icon is hovered
        $(".share").hover(
            function () {
                isShareHovered = true;
                $(".footer-2").removeClass("hidden").addClass("pop-over");
                $(".footer-2 div.share").hide();
            },
            function () {
                isShareHovered = false;
                // Set a timeout to check if the popover should hide
                setTimeout(hidePopover, 200);
            }
        );
    
        // Keep popover visible when hovered
        $(".footer-2").hover(
            function () {
                isPopoverHovered = true;
            },
            function () {
                isPopoverHovered = false;
                // Set a timeout to check if the popover should hide
                setTimeout(hidePopover, 200);
            }
        );
    });
    
} else {
    
    var shareClicked = false;

    $(".share-icon").click(function () {
        if (!shareClicked){
            shareClicked = true;
            $(".card-footer").addClass("hidden");
            $(".footer-2").removeClass("hidden");
        } else {
            shareClicked = false; // Reset state
            $(".card-footer").removeClass("hidden");
            $(".footer-2").addClass("hidden");
        }})

}
}

// Function to hide the popover
function hidePopover() {
    if (!isShareHovered && !isPopoverHovered) {
        $(".footer-2").addClass("hidden").removeClass("pop-over");
        $(".footer-2 div.share").show();
    }
}