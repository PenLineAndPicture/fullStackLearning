//////////////////////////////////////////////
////// 원 페이지 자동 스크롤 JS 모바일버전 ///////
/////////////////////////////////////////////

////// 전역변수 구역 /////////////////

// 현재 페이지 번호
let pno = 0;

// 전체 페이지수(상수로 변경불가!)
const totnum = 7;

// 광스크롤 막기(0-허용,1-불허용)
let psts = 0;

// 모바일 여부(1-모바일, 0-모바일아님)
let mob = 0;
if($(window).width() < 500) mob=1;
console.log("모바일여부:"+mob);

/////////////////////////////////////

$(function () { ///// jQB /////////////////
    
    // 모바일일때 body에 스크롤바 생성하기
    if(mob){
        $("body").css({
            overflowY: "scroll"
        });//// css //////
    } ///////// if //////////
    
    /*
    [ 자동스크롤 모바일 구현 ]
    
    1. 모바일 이벤트 처리 : 터치스크린에서 사용하는 이벤트 종류
        1) touchstart - 손가락이 화면에 닿을때 발생
        2) touchend - 손가락이 화면에서 떨어질때 발생
        3) touchmove - 손가락이 화면에 닿은채로 움직일때 발생
        
    2. 화면터치(클릭) 이벤트 관련 위치값 종류
        1) screenX, screenY : 디바이스 화면을 기준한 x,y좌표
        2) clientX, clientY : 브라우저 화면을 기준한 x,y좌표
            (단, 스크롤미포함)
        3) pageX, pageY : 스크롤을 포함한 브라우저 화면 기준 x,y좌표
        
        ※ 모바일 터치스크린 기준으로 위치값은 screenX,screenY를 사용!
            
    3. 터치(스와이프)방향 알아내기
    - 원리: 처음터치한 위치에서 나중 터치가 끝난위치를 뺀다.
        작은수 - 큰수 = 음수
        큰수 - 작은수 = 양수
    이런 결과로 볼때 스크롤방향과 매칭해보면
        음수가 나오면 아래쪽방향 스와이프 -> 스크롤 위로
        양수가 나오면 윗쪽방향 스와이프 -> 스크롤 아래로 
    */          
    
    //// 터치방향을 위한 변수 ////
    let tcd1, tcd2;
    
    ///// 1.터치시작시 화면 터치위치값 변수에 넣기 //////
    // 대상: document
    // 사용위치속성: screenY (페이지이동이 Y축방향이므로!)
    $(document).on("touchstart",function(e){//e-이벤트전달변수
        
        // 모바일 터치 위치값 변수에 할당하기
        tcd1 = e.originalEvent.touches[0].screenY;
        console.log("터치시작:"+tcd1);
        
    });////// touchstart 함수 /////////////////////
    ///////////////////////////////////////////////
    
    ///// 2.터치가 끝날때 화면 터치위치값 변수에 넣기 //////
    // 대상: document
    // 사용위치속성: screenY (페이지이동이 Y축방향이므로!)
    $(document).on("touchend",function(e){//e-이벤트전달변수
        
        // 모바일 터치 위치값 변수에 할당하기
        tcd2 = e.originalEvent.changedTouches[0].screenY;
        console.log("터치끝:"+tcd2);
        
        /// 방향 판별하기 ///////
        let delta = tcd1 - tcd2;
        // 기본 마우스 휠과 같은 변수명 사용함~(편리하려고)
        console.log("차:"+delta);
        
        /////////////////////////////////////////////////////
        ///////// 여기서부터는 마우스휠코드와 동일함 /////////////
        // 단, 양수/음수의 의미는 다름!
        
        //1. 양수: 윗쪽방향 스와이프 -> 스크롤 아래로 -> 페이지번호증가
        if (delta > 0) { 
            pno++;
            if (pno === totnum) pno = totnum - 1; //끝번호고정!
        } /////////// if ////////////////////////////////////
        
        //2. 음수: 아래쪽방향 스와이프 -> 스크롤 위로 -> 페이지번호감소
        else {
            pno--;
            if (pno < 0) pno = 0; //첫번호고정!
        } /////////// else //////////////////////////////////

        console.log("페이지번호:"+pno);

        // 3. 이동할 페이지(.page)의 위치값 알아내기
        // -> 위치값은 클래스의 순번으로 알아냄-> pno 변수사용!
        let pgpos = $(".page").eq(pno).offset().top;
        // offset().top은 현재 선택요소의 top위치값을 숫자로 리턴함!

        //console.log("이동위치:"+pgpos);

        // 4. 실제 이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 600, "easeOutQuint"); /// animate ///


        // 5. 메뉴변경하기 - 페이지 순번과 동일함!
        // GNB네비게이션 클래스 넣기
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");


        
        
        
    });////// touchstart 함수 /////////////////////
    ///////////////////////////////////////////////
    /*
    [ 모바일 이벤트 관련 속성, 컬렉션 ]
    1. originalEvent - 모바일 관련 이벤트 처리 속성
    2. touches[0] - 터치이벤트를 담은 컬렉션 (0번은 담겨진것 하나)
    3. changedTouches[0] - 변경된 터치이벤트를 담은 컬렉션
    */
    
    
    
    
    
    /*
    [ 자동스크롤 구현! ]
    
    1. 기능: 마우스휠을 위나 아래로 작동 시킬때
        페이지가 위나 아래로 자동으로 애니메이션 되는 기능
    
    2. 이벤트: 마우스휠을 움직일때 발생하는 이벤트는?
        - mousewheel (오리지널 이벤트)
        - wheel (신규이벤트-벤더사의 웹표준이 아직아님!)
        - DOMMouseScroll (파이어폭스 전용 휠이벤트)
        -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
        mousewheel + DOMMouseScroll 을 같이 사용할 것임!
        
    3. 마우스 휠 이벤트와 함수를 연결하는 방법:
        - on(이벤트명,함수)
        -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
        (참고로 bind(이벤트명,함수) 제이쿼리 버전 3부터 지원중단!)
        
    4. 마우스 휠 이벤트 대상: 보통 document에 적용함
    
        -> 유의 사항: document, window, body 3가지 중요객체에서
        기본기능 중단을 못하도록 코드가 변경되었음(2019년경)
        이것을 대상으로 해서 e.preventDefault() 같은 코딩하면
        에러가 나면서 작동도 불가함!(만약 사용하려면 body내부에 
        body를 대신하는 요소를 따로 만들어서 사용해야한다!)
    */

    ///// 자동스크롤 구현 ////////////////
    // 이벤트를 띄어쓰기로 여러개 쓸 수 있음!
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        //e.preventDefault();<- 이걸 쓰면 에러가남!!!
        // document, body, window 객체는 막을 수 없다!
        // 여기서는 body에 overflow:hidden으로 대체함!(스크롤막기!)

        //console.log("스크롤중~!");

        // 광스크롤 막기 /////////////////////////////
        if (psts === 1) return true;
        // return false 하면 에러남! 왜? document니까!법이 바뀜!
        // return true 돌아가되 기능은 켜놓고 가(스크롤되게해!)
        // 우리는 이미 overflow:hidden 으로 스크롤막아서 상관없음!
        psts = 1; //잠금!
        setTimeout(function () {
            psts = 0;
        }, 1200); /// setTimeout ////
        ///////////////////////////////////////////

        // 1. 마우스휠 방향 알아내기
        e = window.event || e;
        // 이벤트 전달값이 window 오리지널 이벤트가 사용가능하면
        // 사용되도록 보완코드를 작성함!
        // 변수 = 경우1 || 경우2;
        // 변수에 경우1 과 경우2 중 true(유효한것)인것이 할당됨!
        /*
        wheelDelta 라는 값을 알아야 방향을 알 수 있다!
        wheelDelta란?
        - ie, chrome 브라우저 등 공용(opera는 detail을 사용함)
        - 마우스 이벤트에 따라 발생하는 이벤트 횟수 및 방향, 이동거리
        */
        let delta = e.detail ? e.detail : e.wheelDelta;
        // 변수에 유효한 설정이 적용되어 할당됨!

        console.log("휠정보:" + delta);
        
        ///// 파이어폭스 일때 델타값 방향 반대로 하기!//////
        // JS 내장함수 test()를 이용하여
        // navigator.userAgent - 현재 브라우저 정보읽어옴!
        // "Firefox"라는 정보가 있으면 test() 에서 true값 리턴함!
        // 그래서 if문 안으로 들어가서 처리함(부호반대로!)
        
        //console.log("브라우저정보:"+navigator.userAgent);
        //console.log("정보여부:"+(/Firefox/i.test(navigator.userAgent)));
        
        // 정규식.test(가져올값) -> 정규식에 쓴 문자 있으면 true
        /*
            [ 간단한 정규식 표현기호 ]
            1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬를 사용함
            2. 모든 패턴 문자열을 찾을때 g라는 플래그문자를 사용함
            3. 대소문자 구분없이 찾을대 i라는 플래그문자를 사용함
            예) /,/g -> 모든 콤마를 찾아라!
            /Firefox/i 
            -> 모든"Firefox"라는 문자를 대소문자 관계없이 찾아라!
        */
        if(/Firefox/i.test(navigator.userAgent)){
            delta = -delta;//변수앞에 마이너스쓰면 부호가 반대됨!
        } ///////////// if /////////////////////////////////
        

        // 2. 마우스휠 방향에 따라 페이지 번호 증감!
        if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
            pno++;
            if (pno === totnum) pno = totnum - 1; //끝번호고정!
        } /////////// if ////////////////////////////////////
        else { // 120 윗방향 스크롤(이전페이지)
            pno--;
            if (pno < 0) pno = 0; //첫번호고정!
        } /////////// else //////////////////////////////////

        console.log("페이지번호:"+pno);

        // 3. 이동할 페이지(.page)의 위치값 알아내기
        // -> 위치값은 클래스의 순번으로 알아냄-> pno 변수사용!
        let pgpos = $(".page").eq(pno).offset().top;
        // offset().top은 현재 선택요소의 top위치값을 숫자로 리턴함!

        //console.log("이동위치:"+pgpos);

        // 4. 실제 이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 1200, "easeInOutQuint"); /// animate ///


        // 5. 메뉴변경하기 - 페이지 순번과 동일함!
        // GNB네비게이션 클래스 넣기
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");




    }); //////// mousewheel ///////////////////////////////
    //////////////////////////////////////////////////////





}); ///////// jQB ///////////////////////
