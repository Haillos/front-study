// func01.js

function func01(){
    console.log('func01');
}

func01();

function func01_2(){
    return "func01_2";
}

console.log(func01_2());

const func02_2 = function() {
    console.log('func02');
}

//func002(); > 실행안됨
func02_2();

const func03 = ()=>{
    console.log('func03');
}

func03();

//매개변수 / 인수

function func05(a, b){
    console.log(a+ " " + b);
}

func05(10,20);
func05("a","b");

const func06 = function func006(a, b){
    console.log(a + " " + b);
}
func06(30,40);

const func07 = function(a, b){
    console.log(a + " " + b);
}
func07(80,40);

const func08 = (a, b) => {
    console.log(a + " " + b);
}
func08(100,150);

func08();

function func(a,b){
    console.log(a + " " + b);
}
func(10,20);

function func11(a, b){
    console.log(a);
    b();
}

function temp(){
    console.log('temp func');
}

function temp2(t){
    //code
    console.log('temp2 func');
    //code
    //10s
    t();
}


func11(100, temp);

//callback 함수

//temp2 함수를 실행하고나서 temp 함수를 실행
temp2(temp);
//temp();
temp2( ()=> {
    console.log('바로 만든 함수');
})


