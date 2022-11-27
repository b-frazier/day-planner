let date = document.getElementById('date');
let time = document.getElementById('time');
let saveBtn = document.getElementById('saveBtn');


let eightAm = document.getElementById('eightAm');

date.textContent = dayjs().format('MMM D, YYYY');
time.textContent = dayjs().format('h:mm a');

saveBtn.onclick = function() {
    const info = eightAm.value;
    localStorage.setItem('info', info)   
};

let x = localStorage.getItem('info')
eightAm.textContent = x;




