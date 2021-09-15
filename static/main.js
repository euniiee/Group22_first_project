$(function () {
    $(".card-img-top").click(
        function () {
            $(".modal").fadeIn();
        });
    $(".modal_content").click(
        function () {
            $(".modal").fadeOut();
        });
});

$(function () {
    $(".signup").click(
        function () {
            $(".join").fadeIn();
        });
    $(".modal_content2").click(
        function () {
            $(".join").fadeOut();
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