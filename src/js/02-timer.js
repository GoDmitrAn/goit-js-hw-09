import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
let dateInterval
buttonEl = document.querySelector('[data-start]');

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
    onChange: function (selectedDates) {
        dateInterval = Date.parse(selectedDates) - options.defaultDate
        startBlocked(dateInterval)
        },
    onClose(selectedDates) {
        console.log(Date.parse(selectedDates));
    }    
};
function startBlocked(data) {
    if (data < 0) {
        buttonEl.disabled = true;
        setTimeout(()=>alert("Please choose a date in the future"),500)
    }
    else {
        buttonEl.disabled = false;
    }
    }

const fp = flatpickr("#datetime-picker", options);
