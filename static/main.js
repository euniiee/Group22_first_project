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

            $(document).ready(function () {
                bestWeekly();
            });

            // 첫 화면 베스트주간

            function bestWeekly() {

                $.ajax({
                    type: 'GET',
                    url: '/api/weekly',
                    data: {},
                    success: function (response) {
                        $("#main").empty();
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

            // 베스트 월간

            function bestmonthly() {
                $.ajax({
                    type: 'GET',
                    url: '/api/monthly',
                    data: {},
                    success: function (response) {
                        $("#main").empty();
                        let month = response['month']
                        for (let i = 0; i < month.length; i++) {
                            let title = month[i]['title']
                            let imgsrc = month[i]['imgsrc']
                            let buy = month[i]['buy_link']
                            let author = month[i]['author']

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

            //베스트연간
            function bestyearly() {
                $.ajax({
                    type: 'GET',
                    url: '/api/yearly',
                    data: {},
                    success: function (response) {
                        $("#main").empty();
                        let year = response['year']
                        for (let i = 0; i < year.length; i++) {
                            let title = year[i]['title']
                            let imgsrc = year[i]['imgsrc']
                            let buy = year[i]['buy_link']
                            let author = year[i]['author']

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

            //스테디
            function steady() {
                $.ajax({
                    type: 'GET',
                    url: '/api/steady',
                    data: {},
                    success: function (response) {
                        $("#main").empty();
                        let steady = response['steady']
                        for (let i = 0; i < steady.length; i++) {
                            let title = steady[i]['title']
                            let imgsrc = steady[i]['imgsrc']
                            let buy = steady[i]['buy_link']
                            let author = steady[i]['author']

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
