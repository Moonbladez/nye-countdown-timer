//dom elements
const daysContainer = document.querySelector("#days")
const hoursContainer = document.querySelector("#hours")
const minutesContainer = document.querySelector("#minutes")
const secondsContainer = document.querySelector("#seconds")
const countdown = document.querySelector(".countdown")
const year = document.querySelector(".year")
const loading = document.querySelector(".loader-container")

const currentYear = new Date().getFullYear()

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

//set background year 
year.innerText = currentYear + 1;

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    //seconds / 60(minutes) / 60(hours) / 24(days)
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    //hours remaining in a day
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    //minutes remaining in the hour
    const minutes = Math.floor(difference / 1000 / 60) % 60
    //seconds remaining in the minute
    const seconds = Math.floor(difference / 1000) % 60

    daysContainer.innerHTML = days;
    hoursContainer.innerHTML = hours < 10 ? "0" + hours : hours;
    minutesContainer.innerHTML = minutes < 10 ? "0" + minutess : minutes;
    secondsContainer.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}


//show spinner
setTimeout(() => {
    loading.remove();
    countdown.style.display = "flex"
}, 1500)

setInterval(updateCountdown, 1000)