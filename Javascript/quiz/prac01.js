let arr1 = [10, '20', 30];
let arr2 = ['10', '20', '30'];

const compareArr = (arr1, arr2) => {
    for (let i=0; i<arr1.length; i++){
        console.log(arr1[i] == arr2[i]);
    }
}

compareArr(arr1,arr2);

const personInfo = {
    name:"홍길동",
    age:25,
    phone:"010-1234-5678".split('-'),
    // split 매개변수 문자 기준으로 문자열을 잘라서 배열로 반환
    engName : "John Smith".toUpperCase(),
    //toUpperCase 대문자로 변환
    nickname:" 복습마왕 ".trim()
    //trim 공백 제거
    }
    
    console.log('변경 전');
    console.log(personInfo);

