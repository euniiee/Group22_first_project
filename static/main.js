// 로그인 모달
var modalLogin = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
}

// 회원가입 모달
var modalJoin = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modalJoin) {
        modalJoin.style.display = "none";
    }
}

// 상세보기 모달
$(function(){
    $(".card-img-top").click(
        function() {
            $(".modal_detail").fadeIn();
        });
    $(".detail_content").click(
        function() {
            $(".modal_detail").fadeOut();
        });
    });

// <----API---->

$.ajax({
    type: "GET",
    url: "/test?title_give=봄날은 간다",
    data: {},
    success: function (response) {
        console.log(response)
    }
})

$.ajax({
    type: "POST",
    url: "/test",
    data: {title_give:'봄날은간다'},
    success: function(response){
        console.log(response)
    }
})