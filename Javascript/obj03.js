//obj03.js

let arr = [1, 2, 3];

//arr[2] = 4;

//Java new Int[3];
//new int[5]; -> ArratList

//javascript 에 배열을 조작하는 함수

/*
앞  삭제 shift   추가 unshift
뒤  삭제 pop     추가 push
*/

//추가
console.log(arr);
arr.push(10); // 배열 뒤에 값 추가
arr.unshift(20); // 배열 앞에 값 추가
console.log(arr);

//삭제

console.log(arr.pop());
let shiftitem = arr.shift();
console.log(shiftitem);
console.log(arr);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//concat 배열 연결 시키기
console.log(arr1.concat(arr2));

let arr3 = [90, ...arr1, 90];
//let arr3 = [90, 1,2,3 , 90]; 

console.log(arr3);

console.log('-----------------');
let arr4 = [...arr1]; //주소가 아니라 배열 자체에 값으로 새로운 배열 (깊은 복사)
//깊은복사 VS 얕은복사
//DEEP COPY VS SHALLOW COPY
console.log(arr1);
console.log(arr4);
arr4[2] = 30;
console.log(arr1);
console.log(arr4);

//splice 함수/메소드

let arr5 = [1,2,3,4,5];
console.log(arr5);
arr5.splice(1, 2); //splice(위치인덱스, 삭제할 갯수)
console.log(arr5);
arr5.splice(1, 1, 30);//splice(위치인덱스, 삭제할 갯수 , 추가값)
//arr5[1] = 30;
console.log(arr5);
arr5.splice(2, 0, 40) // 2인덱스 위치, 삭제는 0개, 40 값추가
console.log(arr5);

console.log('-----------------');
let obj = {};
console.log(obj);

obj.menu = "김밥";
obj.price = 3500;

obj.price = 3800;
obj.location = "큰길";
console.log(obj);

console.log('-----------------');

let today = new Date();

console.log(today);
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

//String.valueOf
//Integer.parseInt

console.log(Math.round(1.55));
console.log(Math.trunc(123.123));

let result = document.getElementById('a')



