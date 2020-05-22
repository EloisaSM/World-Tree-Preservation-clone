$(document).ready(function(){
    $('.gallery-content').click(function(){ 
        const h4 = $(this).find("h4").text();
        $(".modal-container h4").text(h4);

        const img = $(this).find("img").attr("src");
        $(".main-image .modal-image").attr("src", img);

        $('.modal-container').show("slow");
    });

    $('.close-button').click(function(){
        $('.modal-container').hide("100");
    });
});