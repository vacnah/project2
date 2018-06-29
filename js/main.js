$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();



    $('#scroll').on('click',function () {

        $('html,body').animate({scrollTop:0},2000);
    });

    $('input').on('input',function () {

        var word=$(this).val().length;
        if( 3>= word || word >=13){
           $(this).css('border-color','red');
        }else {
            $(this).css('border-color','#66afe9');

        }
    })


});
