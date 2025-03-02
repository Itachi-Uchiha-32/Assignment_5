let points = document.getElementById('points');
const buttons = document.querySelectorAll('.task-btn');
let taskNumber = document.getElementById('task-count');
const activity = document.getElementById('activity');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const currentPoints = parseInt(points.innerText);
        points.innerText = currentPoints+1;
        const tasks = parseInt(taskNumber.innerText);
        taskNumber.innerText = tasks-1;
        alert("Borad Updated Succesfully")
        const time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let timeFormat = hour >= 12 ? 'PM' : 'AM';
        hour = hour%12 || 12;
        min = min < 10 ? '0' + min : min;
        const timeString = hour + ':' + min + ' ' + timeFormat;
        const historyDiv = document.createElement('div');
        const history = document.createElement('p');
        history.innerText = "You have completed the task at " + timeString;
        historyDiv.appendChild(history);
        historyDiv.classList.add("bg-[#F4F7FF]", "p-2", "rounded-xl", "mt-3");
        activity.appendChild(historyDiv);
    })
})