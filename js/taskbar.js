let points = document.getElementById('points');
const buttons = document.querySelectorAll('.task-btn');
let taskNumber = document.getElementById('task-count');
const activity = document.getElementById('activity');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
        const currentPoints = parseInt(points.innerText);
        points.innerText = currentPoints+1;
        const tasks = parseInt(taskNumber.innerText);
        const taskCard = button.closest('.task-card');
        const taskName = taskCard.getAttribute('data-task');
        taskNumber.innerText = tasks-1;
        alert("Borad Updated Succesfully");
        if(parseInt(taskNumber.innerText)===0) alert('Congrats!!! You have Completed all the tasks');
        const time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let timeFormat = hour >= 12 ? 'PM' : 'AM';
        hour = hour%12 || 12;
        min = min < 10 ? '0' + min : min;
        const timeString = hour + ':' + min + ' ' + timeFormat;
        const historyDiv = document.createElement('div');
        const history = document.createElement('p');
        history.innerText = "You have completed the task "+ taskName + " at " + timeString;
        historyDiv.appendChild(history);
        historyDiv.classList.add("bg-[#F4F7FF]", "p-2", "rounded-xl", "mt-3");
        activity.appendChild(historyDiv);
    })
})

