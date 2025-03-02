const todayDate = document.getElementById('today-date');
const  weekDayName = document.getElementById('day-name');
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const today = date.getDate();
const monthName = date.toLocaleString('en-US', { month: 'short' });
const dayName = date.toLocaleString('en-US', { weekday: 'short' })

weekDayName.innerText = dayName;
todayDate.innerText = monthName + ' ' + today + ' ' + year;