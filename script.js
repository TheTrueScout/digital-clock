const displayDayMonth = document.querySelector('.day-month');
const displayTime = document.querySelector('.time')

updateTime();

function updateTime() {
  setInterval(() => {
    const dayLong = new Date().toLocaleDateString('en-US', { weekday: "long"});
    const dayShort = new Date().getDate();
    const month = new Date().toLocaleDateString('en-US', { month: "long"});


    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();


    displayDayMonth.innerHTML = `${dayLong} ${dayShort}, ${month}`
    displayTime.innerHTML =  `${hour}:${minutes}:${seconds}`

  }, 1000);
};
