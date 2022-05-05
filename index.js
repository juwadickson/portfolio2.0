$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('navToggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('navToggle');

        if($(window).scrollTop() > 500){
            $('.header').css({'background-color': '#6c5ce783'});
        }else{
            $('.header').css({'background': 'none'});
        }

        if($(window).scrollTop() > 800){
            $('#gotop').css({'display': 'flex'});
        }else{
            $('#gotop').css({'display': 'none'});
        }
    });

    
})