var today = new Date();
var now = today.getHours();

function getMealByTime() {
    if(5<now && now<11){
        console.log('아침');
        //return '아침';
    } else if (11<=now && now<15){
        console.log('점심');
    } else if (17<=now && now<21){
        console.log('저녁');
    } else if (21<=now && now<24){
        console.log('야식');
    } else {
        console.log('금식');
    }
}

getMealByTime();

//const getMealByTime =function(){}

//const getMealByTime =function func(){}

//const getMealByTime =()=>{}