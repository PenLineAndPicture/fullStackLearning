//과제 - main.js

var Img = document.getElementById("mainPhoto");

/////////////////////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded",function(){
    
    // 1. 로드구역 확인
    console.log("로딩완료!");
    
});
/////////////////////// 로딩구역 ////////////////////


function gallist(seq){
    
    var Img = document.getElementById("mainPhoto");
    
    
    /// 문제 리스트
    //1. 클릭되면 이미지 넣기(색은 되는데, 이미지는 안됨)
    //2. class "phototext"에 이름, 가격 넣기
    //3. phototext에 넣은 텍스트들 css적용
    
    
    if(seq === 0){
        console.log("첫번째입니다.")
        Img.style.backgroundColor = "red";
    };
    if(seq === 1){
        console.log("두번째입니다.")
        Img.style.backgroundColor = "yellow";
    };
    if(seq === 2){
        console.log("세번째입니다.")
        Img.style.backgroundColor = "blue";
    };
    if(seq === 3){
        console.log("네번째입니다.")
        Img.style.backgroundColor = "lime";
    };
    if(seq === 4){
        console.log("다섯번째입니다.")
        Img.style.backgroundColor = "purple";
    };
}