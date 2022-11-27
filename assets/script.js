let date = document.getElementById('date');
let time = document.getElementById('time');
let task = document.getElementById('task-input');
let save8 = document.getElementById('8-save');

date.textContent = dayjs().format('MMM D, YYYY');
time.textContent = dayjs().format('h:mm a');

save8.onclick = function() {
    const info = task.value;
    localStorage.setItem('info', info) 
};





