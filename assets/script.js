let date = document.getElementById('date');
let time = document.getElementById('time');

// buttons
let saveBtnEight = document.getElementById('saveBtnEight');
let saveBtnNine = document.getElementById('saveBtnNine');
let saveBtnTen = document.getElementById('saveBtnTen');
let saveBtnElv = document.getElementById('saveBtnElv');
let saveBtnTwv = document.getElementById('saveBtnTwv');
let saveBtnTht = document.getElementById('saveBtnTht');
let saveBtnOne = document.getElementById('saveBtnOne');
let saveBtnTwo = document.getElementById('saveBtnTwo');
let saveBtnThree = document.getElementById('saveBtnThree');
let saveBtnFour = document.getElementById('saveBtnFour');
let saveBtnFive = document.getElementById('saveBtnFive');
let clearBtn = document.getElementById('clearBtn');

// text boxes
let eightA = document.getElementById('eightA');
let nineA = document.getElementById('nineA');
let tenA = document.getElementById('tenA');
let elvA = document.getElementById('elvA');
let twvP = document.getElementById('twvP');
let oneP = document.getElementById('oneP');
let twoP = document.getElementById('twoP');
let threeP = document.getElementById('threeP');
let fourP = document.getElementById('fourP');
let fiveP = document.getElementById('fiveP');

date.textContent = dayjs().format('MMM D, YYYY');

function updateTime(){
    let now = dayjs().format('h:mm a');
    time.textContent = now
}
setInterval(updateTime, 1000);


saveBtnEight.onclick = function() {
    const eight = eightA.value;
    localStorage.setItem('eight', eight)   
};
var eight = localStorage.getItem('eight')
eightA.textContent = eight;

saveBtnNine.onclick = function() {
    const nine = nineA.value;
    localStorage.setItem('nine', nine);   
};
var nine = localStorage.getItem('nine')
nineA.textContent = nine;

saveBtnTen.onclick = function() {
    const ten = tenA.value;
    localStorage.setItem('ten', ten);   
};
var ten = localStorage.getItem('ten')
tenA.textContent = ten;

saveBtnElv.onclick = function() {
    const elv = elvA.value;
    localStorage.setItem('eleven', elv);   
};
var elv = localStorage.getItem('eleven')
elvA.textContent = elv;

saveBtnTwv.onclick = function() {
    const twv = twvP.value;
    localStorage.setItem('twelve', twv);   
};
var twv = localStorage.getItem('twelve')
twvP.textContent = twv;

saveBtnOne.onclick = function() {
    const one = oneP.value;
    localStorage.setItem('one', one);   
};
var one = localStorage.getItem('one')
oneP.textContent = one;

saveBtnTwo.onclick = function() {
    const two = twoP.value;
    localStorage.setItem('two', two);   
};
var two = localStorage.getItem('two')
twoP.textContent = two;

saveBtnThree.onclick = function() {
    const three = threeP.value;
    localStorage.setItem('three', three);   
};
var three = localStorage.getItem('three')
threeP.textContent = three;

saveBtnFour.onclick = function() {
    const four = fourP.value;
    localStorage.setItem('four', four);   
};
var four = localStorage.getItem('four')
fourP.textContent = four;

saveBtnFive.onclick = function() {
    const five = fiveP.value;
    localStorage.setItem('five', five);   
};
var five = localStorage.getItem('five')
fiveP.textContent = five;

clearBtn.onclick = function(){
    localStorage.clear();
    location.reload();
}