import flatpickr from "flatpickr";
const Ukrainian = require("flatpickr/dist/l10n/uk.js").default.uk;
flatpickr.localize(Ukrainian);
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css")
import Notiflix from 'notiflix';

const buttonEl = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker')
const spanElDays = document.querySelector('[data-days]')
const spanElHours = document.querySelector('[data-hours]')
const spanElMinutes = document.querySelector('[data-minutes]')
const spanElSeconds = document.querySelector('[data-seconds]')



let dateInterval

const options = {
    altInput: true,
    // altFormat: "F j, Y",
    // minDate: "today",
    dateFormat: "Y-m-d H:i",
    enableTime: true,
    time_24hr: true,
    defaultDate:new Date(),
    minuteIncrement: 1,
    mode: 'single',
    onOpen:function(){ buttonEl.disabled = true;},
    onChange: function (selectedDates) {
       
        dateInterval = Date.parse(selectedDates) - options.defaultDate
        startBlocked(dateInterval)
        },
    onClose(selectedDates) {
       
        buttonEl.addEventListener('click',timeRemaining)
    }    
};
const fp = flatpickr("#datetime-picker", options);

function startBlocked(data) {
    if (data < 0) {
        buttonEl.disabled = true;
        setTimeout(() => {
            Notiflix.Notify.failure("Please choose a date in the future", {
                position: "center-top",
                fontSize: "18px",
                width: '380px',
            });
        }, 250)
    }
    else {
        buttonEl.disabled = false;
    }
    }
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function timeRemaining() {
    buttonEl.disabled = true;
    fp._input.disabled = true;
    const { days, hours, minutes, seconds } = convertMs(dateInterval);
    markupTimer(days, hours, minutes, seconds)
    timerId = setInterval(startTimer, 1000)
        }
function addLeadingZero(value) {
    return String(value).padStart(2,"0")
}
function markupTimer(userDays, userHour, userMin, userSec) {
    spanElDays.textContent = addLeadingZero(userDays);
    spanElHours.textContent = addLeadingZero(userHour);
    spanElMinutes.textContent = addLeadingZero(userMin);
    spanElSeconds.textContent = addLeadingZero(userSec);
}
function startTimer() {
    if (dateInterval < 1000) {
        clearInterval(timerId);
        buttonEl.disabled = false;
        fp._input.disabled = false;
    }
    const { days, hours, minutes, seconds } = convertMs(dateInterval);
    markupTimer(days, hours, minutes, seconds);
    dateInterval -= 1000;
    }

