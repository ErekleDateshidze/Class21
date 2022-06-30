const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tusdat", "Wednsday", "Tursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHtml = "Dark mode"
    }
    else {
        html.classList.add('dark')
        e.target.innerHtml = "Light mode"
    }
})


function setTIme() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hour = time.getHours()
    const hoursForClok = hour >= 13 ? hour % 12 : hours;
    const minutes = time.getMinutes()
    const second = time.getSeconds()
    const ampm = hour >= 12 ? "PM" : "AM"

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`
}