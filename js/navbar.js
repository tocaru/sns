
$(function() {
    var link = $("#navbar a.dot");

    // Move to specific section when click on menu link
    link.on("click", function(e) {
        console.log("Link clicked!"); // 클릭 확인용 로그
        var target = $($(this).attr("href"));
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500);

        // Remove "active" class from all links
        link.removeClass("active");
        
        // Add "active" class to clicked link
        $(this).addClass("active");

        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on("scroll", function() {
        scrNav();
    });

    // scrNav function
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $("section").each(function() {
            var id = $(this).attr("id"),
                offset = $(this).offset().top - 1,
                height = $(this).height();

            if (sTop >= offset && sTop < offset + height) {
                // Remove "active" class from all links
                link.removeClass("active");
                
                // Add "active" class to corresponding link
                $("#navbar").find('[data-scroll="' + id + '"]').addClass("active");
            }
        });
    }
    scrNav();
});