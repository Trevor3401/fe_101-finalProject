

$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 10) {
        $("#backtotop").fadeIn();
    } else {
        $("#backtotop").stop().fadeOut();
    }
}); 
    