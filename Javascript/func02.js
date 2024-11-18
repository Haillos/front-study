// func02

function arrForEach( func ){
    let arr = [10, 20 , 30 , 40];

    for(let i in arr) {
        //i : index 배열 기준에서 접근 key
        //arr[i] : 내부에 있는 데이터 (value)
    func(arr[i], i);
    }
}

const innerFunc = (item, index) => {
    console.log(item + " " + index);
}

arrForEach(innerFunc);

arrForEach( (a, b) => {
    console.log(a + "------" + b); // 함수를 매개변수로 전달가능
}); 

const cb = () => {
    console.log('callback 함수');
}

const outCallback = (cb) => {
    console.log('out callback 실행할거 다하고');
    cb();
}

//setTimeout ( 함수,시간 ) : 일정시간 이후 함수가 실행
//시간 ms 단위 1000 -> 1초
setTimeout(
    ()=>{
        console.log('함수실행')
        outCallback(cb);
    }
    ,
    2000
);
