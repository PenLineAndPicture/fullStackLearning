//// 쇼핑몰 JS - main.js /////

///// 로드구역 //////////////////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!");
        
        // 이동버튼 클릭 시 슬라이드 넘기기
        // 클릭 이벤트 대상: .abtn
        
        // 이동버튼
        var btn = document.querySelectorAll('.abtn');
        console.log("버튼개수: "+ btn.length);
        
        // 왼쪽 버튼
        btn[0].onclick = function(){
            console.log("왼쪽");
            
            //이동함수 호출
            goSlide(0);
            
            //a태그 기본이동 막기!
            return false;
        };
        
        //오른쪽 버튼
        btn[1].onclick = function(){
            console.log("오른쪽");
            
            //이동함수 호출
            goSlide(1);
            
            //a태그 기본이동 막기!
            return false
        };
    
        /*************************************************
            함수명: goSlide
            기능: 슬라이드가 넘어가도록 기능구현
        *************************************************/
        var goSlide = function(){

        };

        /*************************************************
            함수명: autoSlide
            기능: 자동넘기기 셋팅함수(Interval)
        *************************************************/
        var autoSlide = function(){

            console.log("방향구분: "+ dir);
        };

        /*************************************************
            함수명: clearAuto
            기능: 자동넘김 지우기 함수(ClearInterval)
        *************************************************/
        var clearAuto = function(){};

    }); /////////////// 로드구역 ///////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
