let date = document.getElementById('date');
let task = document.getElementById('task-input');
let save8 = document.getElementById('8-save');

date.textContent = dayjs().format('MMM D, YYYY');


save8.onclick = function() {
    const info = task.value;
    localStorage.setItem('info', info) 
};





