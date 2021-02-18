//과제 - main.js

<<<<<<< Updated upstream

var Img = document.getElementById("mainPhoto");
=======
photoSelect[i] = new Image();

var photoSelect = ["image/ring.jpg", "image/earing.jpg", "image/necklace.jpg", "image/bracelet.jpg", "image/broche.jpg"]
>>>>>>> Stashed changes

/////////////////////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역 확인
    console.log("로딩완료!");

});
/////////////////////// 로딩구역 ////////////////////

let txt = [
    {
        "제목": "11보석이야",
        "내용": "11아주좋은거~~~~"
},
    {
        "제목": "22멋진 보석이야",
        "내용": "22Rmxrerere~~~~"
}

]; ////  txt ////////

;


function gallist(seq) {

    //var Img = document.getElementById("mainPhoto");

    let btns = $('.photo');
    let btnsImg = btns.eq(seq).css("background-image").split("\"")[1].split("/");
    btnsImg = btnsImg[btnsImg.length - 1];

    console.log("이미지:" + btnsImg);

    $("#mainPhoto").css({
        background: "url(image/" + btnsImg + ") no-repeat center/cover"
    }); ////////// css /////////////
    
    $(".ptit").text(txt[seq]["제목"]);
    $(".pcont").text(txt[seq]["내용"]);

    /// 문제 리스트
    //1. 클릭되면 이미지 넣기(색은 되는데, 이미지는 안됨)
    //2. class "phototext"에 이름, 가격 넣기
    //3. phototext에 넣은 텍스트들 css적용

<<<<<<< Updated upstream
    //    
    //    if(seq === 0){
    //        console.log("첫번째입니다.")
    //        Img.style.backgroundColor = "red";
    //    };
    //    if(seq === 1){
    //        console.log("두번째입니다.")
    //        Img.style.backgroundColor = "yellow";
    //    };
    //    if(seq === 2){
    //        console.log("세번째입니다.")
    //        Img.style.backgroundColor = "blue";
    //    };
    //    if(seq === 3){
    //        console.log("네번째입니다.")
    //        Img.style.backgroundColor = "lime";
    //    };
    //    if(seq === 4){
    //        console.log("다섯번째입니다.")
    //        Img.style.backgroundColor = "purple";
    //    };
}
=======
function gallist(seq){
    console.log(seq+1 + "번입니다");
};
>>>>>>> Stashed changes
