//과제 - main.js

/////////////////////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded",function(){
    
    // 1. 로드구역 확인
    console.log("로딩완료!");
    
});
/////////////////////// 로딩구역 ////////////////////




//아이템 넣기

var photo = document.getElementsByClassName("photo");

if(photo[0] === document.getElementsByClassName("photo")[0]){
    console.log("일치");
};

if(photo.onclick === photo[0]){
    document.getElementsByClassName("mphoto")[0].src="ring.jpg";
};