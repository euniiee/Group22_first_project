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

            $(document).ready(function () {
                bestWeekly();
            });

            function bestWeekly() {
                $.ajax({
                    type: 'GET',
                    url: '/api/weekly',
                    data: {},
                    success: function (response) {
                        let week = response['week']
                        for (let i = 0; i < week.length; i++) {
                            let title = week[i]['title']
                            let imgsrc = week[i]['imgsrc']
                            let buy = week[i]['buy_link']
                            let author = week[i]['author']

                            let temp_html = `<div class="card">
                            <img class="card-img-top" src="${imgsrc}"
                                 alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title" style="text-align: center">${title}</h5>
                                <span class="author">${author}</span>
                                <div class="btns" style="text-align: center">
                                    <a href="#" class="btn btn-primary"><i class="far fa-heart" style="user-select: auto;"></i></a>
                                    <a href="${buy}" target="_blank" class="btn btn-primary">보러가기</a>
                                </div>
                            </div>
                        </div>`
                            $('#main').append(temp_html);
                        }
                    }
                });
            }

            // function likeStar(name) {
            //     $.ajax({
            //         type: 'POST',
            //         url: '/api/like',
            //         data: {name_give:name},
            //         success: function (response) {
            //             alert(response['msg']);
            //             window.location.reload()
            //         }
            //     });
            // }

            // function deleteStar(name) {
            //     $.ajax({
            //         type: 'POST',
            //         url: '/api/delete',
            //         data: {name_give:name},
            //         success: function (response) {
            //             alert(response['msg']);
            //             window.location.reload()
            //         }
            //     });
            // }
