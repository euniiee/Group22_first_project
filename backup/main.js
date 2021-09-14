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

$(function(){
    $(".signup").click(
        function() {
            $(".join").fadeIn();
        });
    $(".modal_content2").click(
        function() {
            $(".join").fadeOut();
        });
    });

$(function(){
    $(".btnlogin").click(
        function() {
            $(".login").fadeIn();
        });
    $(".login").click(
        function() {
            $(".login").fadeOut();
        });
    });