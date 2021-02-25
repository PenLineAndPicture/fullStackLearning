window.scrollPosition = document.documentElement.scrollTop || 0; //  조건 || 0         [조건 또는 0]

var num = 0;

document.addEventListener('scroll', function(){

    let documentY = document.documentElement.scrollTop; //HTML의 세로로 스크롤 가능한 길이를 반환한다.
    let direction = documentY - window.scrollPosition >= 0 ? 1 : -1; // 변수 = (조건) ? a : b     [조건에 맞다면 a, 아니면 b]

    num = num + direction;
    
    console.log(num);

    window.scrollPosition = documentY; // Update scrollY
});