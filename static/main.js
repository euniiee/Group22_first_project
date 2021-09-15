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
                showStar();
            });

            function showStar() {
                $.ajax({
                    type: 'GET',
                    url: '/api/weekly',
                    data: {},
                    success: function (response) {
                        alert(response['msg']);
                    }
                });
            }

        //     function likeStar(name) {
        //         $.ajax({
        //             type: 'POST',
        //             url: '/api/like',
        //             data: {sample_give:'샘플데이터'},
        //             success: function (response) {
        //                 alert(response['msg']);
        //             }
        //         });
        //     }
        //
        //     function deleteStar(name) {
        //         $.ajax({
        //             type: 'POST',
        //             url: '/api/delete',
        //             data: {sample_give:'샘플데이터'},
        //             success: function (response) {
        //                 alert(response['msg']);
        //             }
        //         });
        //     }
        //
        // </script>
//     </head>
//     <body>
//         <section class="hero is-warning">
//             <div class="hero-body">
//                 <div class="container center">
//                     <h1 class="title">
//                         마이 페이보릿 무비스타😆
//                     </h1>
//                     <h2 class="subtitle">
//                         순위를 매겨봅시다
//                     </h2>
//                 </div>
//             </div>
//         </section>
//         <div class="star-list" id="star-box">
//             <div class="card">
//                 <div class="card-content">
//                     <div class="media">
//                         <div class="media-left">
//                             <figure class="image is-48x48">
//                                 <img
//                                         src="https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201807%2F20180731143610623-6213324.jpg&type=u120_150&quality=95"
//                                         alt="Placeholder image"
//                                 />
//                             </figure>
//                         </div>
//                         <div class="media-content">
//                             <a href="#" target="_blank" class="star-name title is-4">김다미 (좋아요: 3)</a>
//                             <p class="subtitle is-6">안녕, 나의 소울메이트(가제)</p>
//                         </div>
//                     </div>
//                 </div>
//                 <footer class="card-footer">
//                     <a href="#" onclick="likeStar('김다미')" class="card-footer-item has-text-info">
//                         위로!
//                         <span class="icon">
//               <i class="fas fa-thumbs-up"></i>
//             </span>
//                     </a>
//                     <a href="#" onclick="deleteStar('김다미')" class="card-footer-item has-text-danger">
//                         삭제
//                         <span class="icon">
//               <i class="fas fa-ban"></i>
//             </span>
//                     </a>
//                 </footer>
//             </div>
//         </div>
//     </body>
// </html>