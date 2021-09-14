$(function(){
    $(".card-img-top").click(
        function() {
            $(".modal").fadeIn();
        });
    $(".modal_content").click(
        function() {
            $(".modal").fadeOut();
        });
    });