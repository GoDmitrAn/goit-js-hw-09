function t(t){!0===t.disabled?t.disabled=!1:t.disabled=!0}startBtnEL=document.querySelector("button[data-start]"),stopBtnEL=document.querySelector("[data-stop]"),bodyEl=document.querySelector("body"),paragrapfEl=document.querySelector("p"),startBtnEL.style.padding="1em",startBtnEL.style.margin="1em",stopBtnEL.style.padding="1em",stopBtnEL.style.margin="1em",paragrapfEl.style.width="100%",bodyEl.style.height="100vh",bodyEl.style.display="flex",bodyEl.style.flexWrap="wrap",bodyEl.style.alignItems="flex-start",bodyEl.style.justifyContent="center",stopBtnEL.disabled=!0;let e=null;function l(){bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}startBtnEL.addEventListener("click",(()=>{t(startBtnEL),t(stopBtnEL),e=setInterval(l,2e3)})),stopBtnEL.addEventListener("click",(()=>{t(startBtnEL),t(stopBtnEL),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.a50b2f4a.js.map
