$(document).ready(function () {
    $(function () {
        $(".sticky").draggable();
    });   
});



$(document).ready(function () {   
     $('.voice').click(function () {
        $('.text').toggle(2000);     
        $(this).toggleClass("bigger");
    });
    
});


