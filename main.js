/*mission page*/

$(document).ready(function () {   
     $('.voice').click(function () {
        $('.text').fadeToggle(2000);     
        $(this).toggleClass("bigger");
    });
});

$(document).ready(function () {
    $('.mission').css('background', 'linear-gradient(0deg, rgba(255,255,255,0) 50%, rgba(255, 214, 0, 0.5) 100%)');
});



/*archives page*/
$(document).ready(function () {
    $(function () {
        $(".sticky").draggable();
    });   
});


