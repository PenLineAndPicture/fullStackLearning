/////////////////////////////////////////////////
////// 원 페이지 스크롤 JS - 스크롤수평방향이동///////
/////////////////////////////////////////////////

////// 전역변수 구역 /////////////////
// 스크롤위치
let scno = 0;
// 전체페이지 크기(이동한계값 계산용)
let totsize;
/////////////////////////////////////

$(function () { ///// jQB /////////////////
    
    // 전체움직일 사이즈 한계수 계산하기!
    // 계산법: 전체랩박스 가로크기 - 윈도우가로크기
    totsize = $(".wrap").width() - $(window).width();
    console.log("한계사이즈:"+totsize);
    
    
    
    /*
    [ 가로스크롤 구현! ]
    - 원리: 스크롤시 가로방향이동을 애니메이션으로 scrollLeft값을
    변경하여 움직이게 구현한다.
    - 주의사항: 스크롤의 한계값은 전체 페이지크기에서 화면크기를 뺀 그값이 한계이다!
    */

    ///// 가로스크롤 구현 ////////////////
    // 이벤트를 띄어쓰기로 여러개 쓸 수 있음!
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        // 광스크롤막기 불필요!!!(계속스크롤 되야하니까!)

        // 1. 마우스휠 방향 알아내기
        e = window.event || e;
        let delta = e.detail ? e.detail : e.wheelDelta;
        // 변수에 유효한 설정이 적용되어 할당됨!

        //console.log("휠정보:" + delta);
        if(/Firefox/i.test(navigator.userAgent)){
            delta = -delta;//변수앞에 마이너스쓰면 부호가 반대됨!
        } ///////////// if /////////////////////////////////
        

        // 2. 마우스휠 방향에 따라 스크롤 위치값 증감!
        if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
            scno+=120;// 120px씩 증가!
            if (scno > totsize) scno = totsize; //한계값고정!
        } /////////// if ////////////////////////////////////
        else { // 120 윗방향 스크롤(이전페이지)
            scno-=120;// 120px씩 감소!
            if (scno < 0) scno = 0; //첫번째 한계값 고정!
        } /////////// else //////////////////////////////////

        //console.log("스크롤위치값:"+scno);

        // 3. 실제 이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollLeft: scno + "px"
        }, 2000, "easeOutQuint"); /// animate ///
        // 이징을 in값을 없애야 처음 스크롤 출발이 경쾌하다!!!




    }); //////// mousewheel ///////////////////////////////
    //////////////////////////////////////////////////////





}); ///////// jQB ///////////////////////
