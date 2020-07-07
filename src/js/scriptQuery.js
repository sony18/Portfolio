$(document).ready(function () {

    // // // Scroll top
        var upArrow = $('#upArrow').hide();
        $(window).scroll(function () {

            console.log('reached dest')
            var scrollTop = $(window).scrollTop();
            // console.log(scrollTop)
            // console.log("offset:" + $('#contact').offset().top)
            if (scrollTop > $('#contact').offset().top) {

                upArrow.show();              
           
            } else {
               upArrow.hide();
            }
        }) //window scroll listener
    
}) //document load 