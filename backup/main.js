/* 상세보기 모달 */
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
/* 회원가입모달 */
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
/* 로그인 모달 */
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