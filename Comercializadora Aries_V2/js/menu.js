$(document).ready(function () {
    $('.ui.accordion').accordion();
    
    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

