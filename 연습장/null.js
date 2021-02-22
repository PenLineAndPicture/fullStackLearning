/////////////// 객체 기본 //////////////////

//빈 객체 선언
var card = {};
console.log(card);


//객체에 프로퍼티 집어넣기
card.name = "joker";
card.rank = "joker";
card.value = 14;
console.log(card);


//프로퍼티 삭제
delete card.rank;
console.log(card);


//프로퍼티 있는지 확인
console.log("rank" in card);


/////////////// 객체 기본 //////////////////

/////////////// 함수 기본 //////////////////


//인수 하나
function squre(x){return x * x}
console.log(squre(4));


//인수 둘
function plus(x,y){return x + y}
console.log(plus(2,5));



//함수 리터럴

/*console.log(add(3));
var add = function(x){return x + x};*/

//끌어올려지지 않음

var add = function(x){return x + x};
console.log(add(3));


/////////////// 함수 기본 //////////////////

/////////////// 메서드 //////////////////


var circle = {  //객체
    center: {x:1.0, y:2.0},   //원 중점(객체)
    radius: 2.5,              //원의 반지름
    area: function(){         //원 넓이 구하기(메서드)
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());



circle.translate = function(a,b){
    this.center.x = this.center.x + a;  //this: 이 함수를 가지고 있는 객체
    this.center.y = this.center.y + b;  //this: 이 함수를 가지고 있는 객체
}

circle.translate(1,2);
console.log(circle.center);


/////////////// 메서드 //////////////////

/////////////// 생성자 //////////////////


function Card(suit, rank){  //인수 suit와 rank를 가지는 함수 Card를 생성
    this.suit = suit;   //이 최상위 객체(this)에 suit인수는 suit프로퍼티가 된다.
    this.rank = rank;   //이 최상위 객체(this)에 rank인수는 rank프로퍼티가 된다.
}


var card1 = new Card("하트", "A");    //객체 card1 - 하트와 A를 차례로 생성자(new) 이용
console.log(card1);                  // 객체에 suit에는 하트, Rank에는 A가 집어넣어진다.


//프로퍼티 값이 다른 객체 여러 개를 생성하기 쉬워진다.


//연습

function Class(name, position, rank){
    this.name = name;
    this.position = position;
    this.rank = rank + "★";
}

var chen = new Class("첸", "Guard", "6");
console.log(chen);

var angelina = new Class("안젤리나", "Supporter", "6");
console.log(angelina);

var vigna = new Class("비그나", "Guard", "4");
console.log(vigna);

var meteorlight = new Class("메테오라이트", "Sniper", "5");
console.log(meteorlight);

/////////////// 생성자 //////////////////

/////////////// 배열 //////////////////


var evens = [2, 4, 6, 8];
console.log(evens.length);


/////////////// 배열 //////////////////