var timeout;

var up = 1;
var down = -1;
var num = 969;

let psts = 0;

window.onmousewheel = function (e) {
    console.dir(e);

    clearTimeout(timeout);

    timeout = setTimeout(function () {
        if (e.deltaY > 0) {
            console.log("down");
            window.scrollBy(0, num * up, 'smooth');
        } else {
            console.log("up");
            window.scrollBy(0, num * down, 'smooth');
        }

        /////// 광스크롤 방지 ///////

        /*if (psts === 1) return true;

        psts = 1;

        setTimeout(function () {
            psts = 0;
        }, 100);*/

        /////// 광스크롤 방지 ///////

    }, 400);

    /*timeout = setTimeout(function () {

        var num = 1;
        var count = 0;
        
        
        if (e.deltaY > 0) {
            console.log("down");
            count = +1;
            
            location.href = "#part2";
        }
        
        if (e.deltaY < 0) {
            console.log("down");
            location.href = "#part1";
        }
        
        
    }, 100);*/



};


// 1. 막 스크롤 하면 틀이 무너지는거 해결해야됨
// 2. 넓이를 퍼센테이지로 잡도록 해야됨
// 3. 퍼센테이지로 변환했을 경우, top값을 알아야됨

