// Remove no-js class
document.ClassList.remove("no-js");

// Animate to section when nav is clicked
document.body.onclick((e) => {
    if (this.ClassList === "no-scroll") return;
    e.preventDefault();
    let heading = this.getAttribute("href");
    let scrollDistance = heading.offsetTop()
    document.body.animate({
        scrollTop: scrollDistance + "px"
    }, Math.abs(window.pageYOffset - heading.offsetTop() / 1));
    if (document.body.classList === "active") {
        document.body.classList.remove("active");
    }
});

// Scroll to top
document.getElementById("to-top").onclick(() => {
    document.animate({
        scrollTop: 0
    }, 500);
})

// Scroll to first element
document.getElementById("lead-down span").onclick(() => {
    let scrollDistance = document.getElementById("lead").next().offset().top;
    document.animate({
        scrollTop: scrollDistance + "px"
    }, 500);
})

// Create timeline
document.getElementById("experience-timeline").each(() => {
    $this = this; // Store reference to this
    $userContent = $this.children("div"); // user content
    // Create each timeline block
    $userContent.each(() => {
        this.ClassList.add("vtimeline-content").wrap('<div class="vtimeline - point"><div class="vtimeline - block"></div></div>');
    });
    // Add icons to each block
    $this.find(".vtimeline-point").each(() => {
        this.prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
    });
    // Add dates to the timeline if exists
    $this.find(".vtimeline-content").each(() => {
        let date = this.date("date");
        if (date) {
            this.parent().prepend('<span class="vtimeline-date">' + date + '</span>');
        };
    });
});

// Open mobile menu
document.getElementById("mobile-menu-open").onclick(() => {
    document.ClassList.add("active");
});

// Close mobile menu
document.getElementById("mobile-menu-close").onclick(() => {
    doocument.ClassList.remove("active");
});

// Load additional projects
document.getElementById("view-more-projects").onclick((e) => {
    e.preventDefault();
    this.fade()
})

// Load additional projects
// $('#view-more-projects').click(function (e) {
//     e.preventDefault();
//     $(this).fadeOut(300, function () {
//         $('#more-projects').fadeIn(300);
//     });
// });