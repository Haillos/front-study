function fff(){
    console.log(1);
    console.log(2);
    //return
    //console.log(3);

    return 3;
}

let result = fff();

console.log(result);

const af = ()=>{
    console.log(4);
    console.log(5);
    return 6;
}

console.log(af());

// const af2 = ()=>7;
const af2 = () => 1+2+3+4

// () => 7;
// () => { return 7;}

console.log(af2());

function scope1(){ 
        let x = 10;
}

//console.log(x);

if(true){
    let y = 300;
}

//console.log(y);

let z = 300;

if(true){
    console.log(z);
}

function scope2(){
    console.log(z);
} // 함수는 부르지 않으면 출력되지 않는다.

scope2();

{ // scope 영역 : 
    let qqq = 100;
} 

ccc = 3000;
var ccc; // 호이스팅 : 코드를 선언과 할당으로 나누었을 때 

//dd = 30;
//let dd;
//console.log(dd);

console.log(ccc);

check();
function check(){ // 호이스팅 선언부를 위로 올려줌
    console.log('check');
}
check();

(function(){
    console.log('1회용 함수');
})();

(function oneuse(){
    console.log('1회용 함수');
})();

oneuse;
