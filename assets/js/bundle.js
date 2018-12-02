
jQuery(document).ready(function($){

    $('.bars').on('click', function(){

        if($(this).hasClass('close')){
            $(this).html('menu')
        }else{
            $(this).html('close')            
        }

        if($(this).hasClass('close')){
            $('body').removeClass('menu-open')
        }else{
            $('body').addClass('menu-open')
        }

        $(this).toggleClass('close')
    })
    
})


