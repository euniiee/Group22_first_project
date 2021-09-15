// Get the modal login
var modalLogin = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
}

// Get the modal join
var modalJoin = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modalJoin) {
        modalJoin.style.display = "none";
    }
}

// Get the modal img detail
var modaImgDetail = document.getElementById('id03');

window.onclick = function(event) {
    if (event.target == modaImgDetail) {
        modaImgDetail.style.display = "none";
    }
}

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