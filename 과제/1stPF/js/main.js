//과제 - main.js
 

var photoSelect = ["image/ring.jpg", "image/earing.jpg", "image/necklace.jpg", "image/bracelet.jpg", "image/broche.jpg"]


let txt = [
    {
        "제목": "Diamond Ring",
        "가격": "$ 200",
        "내용": "Ring with Diamond, gold 18k."
},
    {
        "제목": "Blooming Earing",
        "가격": "$ 240",
        "내용": "Shape like blooming flower, branch that made of gold."
},
    {
        "제목": "Pearl Necklace",
        "가격": "$ 300",
        "내용": "Golden necklace decorated with shiny pearls."
},
    {
        "제목": "Golden Bracelet",
        "가격": "$ 150",
        "내용": "Made of 18K gold. Beautiful to look at."
},
    {
        "제목": "Diamond leaf broche",
        "가격": "$ 220",
        "내용": "Made of silver and tiny diamonds."
}

]; ////  txt ////////


/////////////////////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded", function () {

    
//var Img = document.getElementById("mainPhoto");
//
//photoSelect[i] = new Image();
//    
//    
//    // 1. 로드구역 확인
//    console.log("로딩완료!");
//    
//    
//
//
//document.getElementsByClassName("phototext")[0].style.fontFamily='Papyrus';

    $("#mainPhoto").css({
        background: "url(" + photoSelect[0] + ") no-repeat center/cover"
    }); ////////// css /////////////
    
    $(".ptitle").text(txt[0]["제목"]);
    $(".pprice").text(txt[0]["가격"]);
    $(".pcont").text(txt[0]["내용"]);
    
    

});
/////////////////////// 로딩구역 ////////////////////





function gallist(seq) {

    console.log(seq+1 + "번입니다");
    //var Img = document.getElementById("mainPhoto");

    let btns = $('.photo');
//    let btnsImg = btns.eq(seq).css("background-image").split("\"")[1].split("/");
//    btnsImg = btnsImg[btnsImg.length - 1];

//    console.log("이미지:" + btnsImg);

    $("#mainPhoto").css({
        background: "url(" + photoSelect[seq] + ") no-repeat center/cover"
    }); ////////// css /////////////
    
    $(".ptitle").text(txt[seq]["제목"]);
    $(".pprice").text(txt[seq]["가격"]);
    $(".pcont").text(txt[seq]["내용"]);
    
    /// 문제 리스트
    //1. 클릭되면 이미지 넣기(색은 되는데, 이미지는 안됨)
    //2. class "phototext"에 이름, 가격 넣기
    //3. phototext에 넣은 텍스트들 css적용


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