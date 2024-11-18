//obj02.js

let scores = [10, 30, 50 , 40];

//for 

for(let i = 0; i<scores.length; i++){
    console.log(scores[i]);
}

//for in
//for(String item : stringArr)
for(let i in scores){
    console.log(i + ' ' + scores[i]);
}

//for of
//item value score
for(let item of scores){ //for(String item : string Arr)
    console.log(item);
}

//forEach 함수인 형태로 내부 값에 접근하여 체크
scores.forEach( (item, index)=>{
    console.log(item + ' ' + index);
})