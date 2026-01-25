const timeText = document.querySelector('#welcome')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning) {timeText.textContent = "Good morning! Ready to start the day?"}
if (isAfternoon) {timeText.textContent = "Hey there! Hope your day's going well."}
if (isEvening) {timeText.textContent = "Good evening! Hope you had a great day."}

