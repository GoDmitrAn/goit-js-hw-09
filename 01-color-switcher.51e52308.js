const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body"),a=document.querySelector("p");function d(e){!0===e.disabled?e.disabled=!1:e.disabled=!0}e.style.padding="1em",e.style.margin="1em",t.style.padding="1em",t.style.margin="1em",a.style.width="100%",l.style.height="100vh",l.style.display="flex",l.style.flexWrap="wrap",l.style.alignItems="flex-start",l.style.justifyContent="center",t.disabled=!0;let n=null;function r(){l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(()=>{d(e),d(t),n=setInterval(r,2e3)})),t.addEventListener("click",(()=>{d(e),d(t),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.51e52308.js.map