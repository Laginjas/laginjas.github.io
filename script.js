$(document).ready(function() {
    $('button').click(function() {
        let selector = $(this).data('filter');
        
        if (selector === ".pies, .beverages") {
            $('#menu-1001 .cs-item').fadeIn(500);
        } else {
            $('#menu-1001 .cs-item').not(selector).fadeOut(500);
            $(selector).fadeIn(500);
        }
    });
});