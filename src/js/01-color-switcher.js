startBtnEL = document.querySelector('[data-start]')
stopBtnEL = document.querySelector('[data-stop]')
bodyEl = document.querySelector('body')
paragrapfEl=document.querySelector('p')


startBtnEL.style.padding = '1em'
startBtnEL.style.margin='1em'
stopBtnEL.style.padding = '1em'
stopBtnEL.style.margin = '1em'
paragrapfEl.style.width='100%'

bodyEl.style.height = '100vh'
bodyEl.style.display = 'flex'
bodyEl.style.flexWrap = 'wrap'
bodyEl.style.alignItems = 'flex-start'
bodyEl.style.justifyContent = 'center'

stopBtnEL.disabled = true

function toogleBtn(button) {
  button.disabled === true ? button.disabled =false : button.disabled =true
  }
let timerId = null
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bodyRandomizeColor() {

  bodyEl.style.backgroundColor = getRandomHexColor();
}
startBtnEL.addEventListener('click', () => {
  toogleBtn(startBtnEL)
  toogleBtn(stopBtnEL)
  timerId = setInterval(bodyRandomizeColor, 2000)
  
})
stopBtnEL.addEventListener('click', () => {
  toogleBtn(startBtnEL)
  toogleBtn(stopBtnEL)
  clearInterval(timerId);
})

