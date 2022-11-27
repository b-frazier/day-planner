let date = document.getElementById('date');
let time = document.getElementById('time');
let saveBtn = document.getElementById('saveBtn');


let eightAm = document.getElementById('eightAm');

date.textContent = dayjs().format('MMM D, YYYY');

function updateTime(){
    let now = dayjs().format('h:mm a');
    time.textContent = now
}
setInterval(updateTime, 1000);


saveBtn.onclick = function() {
    const info = eightAm.value;
    localStorage.setItem('info', info)   
};

var x = localStorage.getItem('info')
eightAm.textContent = x;


