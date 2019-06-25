$(document).ready(function () {

// //   // Scroll down
// //   $(function(){
// //     $(document).on('click','#btn-landing',function () {

// //         const aboutme = $('#section-aboutme').position().top;
// //         $('html, body').animate({
// //             scrollTop: aboutme
// //         }, 700);
// //     })
// //  });


    // // // Scroll top
    // $(function () {
        var upArrow = $('#upArrow').hide();
        $(window).scroll(function () {

            console.log('reached dest')
            var scrollTop = $(window).scrollTop();
            // console.log(scrollTop)
            // console.log("offset:" + $('#contact').offset().top)
            if (scrollTop > $('#contact').offset().top) {

                upArrow.show();
              
                // // smooth scroll top
                // upArrow.click(function () {

                //     $('html,body').animate({
                //         scrollTop: 0
                //     })
                // })

            } else {
               upArrow.hide();
            }
        }) //window scroll listener
    // })  





}) //document load 