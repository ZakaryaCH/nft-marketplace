// Nice Select Init
$(document).ready(function () {
    $('.crypto-dropdown').niceSelect();
    $('.short-select').niceSelect();
    $('.filter-select').niceSelect();
});

// Navbar Scroll Top
$(window).scroll(function () {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// Smart Scroll Init
$(document).ready(function () {
    smartScroll.init({
        speed: 600, // default 500                   
        addActive: false, // default true                  
        activeClass: "active", // default active                   
        offset: 104 // default 100               
    });
});


// Upload Init
$('.upload input[type="file"]').on('change', function () {
    $('.upload-path').val(this.value.replace('C:\\fakepath\\', ''));
});



// Responsive Breakpoint
$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
        location.reload();
    });

    checkScreenSize();

    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth >= 1024) {
            // Game Holder Init
            $("div.game-card-holder").jPages({
                containerID: "game-card-container",
                perPage: 4,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });
            // Explore Holder init
            $("div.nft-holder").jPages({
                containerID: "nft-container",
                perPage: 16,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });
            // Creator Holder Init
            $("div.creator-holder").jPages({
                containerID: "creator-container",
                perPage: 12,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });

            // Listed Holder Init
            $("div.listed-holder").jPages({
                containerID: "listed-container",
                perPage: 8,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });

            // Unlisted Holder Init
            $("div.unlisted-holder").jPages({
                containerID: "unlisted-container",
                perPage: 8,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });

            // Item Explore Holder Init
            $("div.itm-holder-navi").jPages({
                containerID: "itm-explore-cont",
                perPage: 4,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });

        } else {

            // Game Holder Init
            $("div.game-card-holder").jPages({
                containerID: "game-card-container",
                perPage: 3,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });
            // Explore Holder init
            $("div.nft-holder").jPages({
                containerID: "nft-container",
                perPage: 12,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });
            // Creator Holder Init
            $("div.creator-holder").jPages({
                containerID: "creator-container",
                perPage: 12,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });

            // Listed Holder Init
            $("div.listed-holder").jPages({
                containerID: "listed-container",
                perPage: 6,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });

            // Unlisted Holder Init
            $("div.unlisted-holder").jPages({
                containerID: "unlisted-container",
                perPage: 6,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });
            // Item Explore Holder Init
            $("div.itm-holder-navi").jPages({
                containerID: "itm-explore-cont",
                perPage: 3,
                startPage: 1,
                startRange: 1,
                midRange: 6,
                endRange: 1,
                minHeight: false,
                next: "Next",
                previous: "Previous"
            });
        }
    }
});