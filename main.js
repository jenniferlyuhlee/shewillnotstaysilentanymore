/*about page*/
$(document).ready(function () {
    $('.about').css('background', 'linear-gradient(0deg, rgba(255,255,255,0) 50%, rgba(255, 214, 0, 0.5) 100%)');
});


/*mission page*/

$(document).ready(function () {   
     $('.voice').click(function () {
        $('.text').fadeToggle(2000);     
        $(this).toggleClass("bigger");
    });
});


/*archives page*/
$(document).ready(function () {
    $(function () {
        $(".sticky").draggable();
    });   
});


/*memorials page*/
console.log('accordion demo');

$(document).ready(function(){
	$('.item').click(function(){
		$(this).toggleClass('active');
	});
	$("#showhide").click(function(){
		$('.item').toggleClass('active');
	});

});

$(document).ready(function () {
    $('.memorials').css('background', 'linear-gradient(0deg, rgba(255,255,255,0) 40%, rgba(255, 214, 0, 0.5) 100%)');
});


