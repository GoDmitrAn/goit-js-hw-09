import Notiflix from 'notiflix';
formEl=document.querySelector('.form')

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(formEl);
  let delay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  
  for (let i = 1; i <= formData.get('amount'); i += 1){
      promise(i, delay).then(value => {
          Notiflix.Notify.success(value);
        }).catch(error => {
          Notiflix.Notify.failure(error);
        })
           delay += step;
          
      }
 

})
const promise = function createPromise(position, delay){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
          const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
            // Fulfill
            resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
              ;
          } else {
            // Reject
            reject(`❌ Rejected promise ${position} in ${delay}ms`)
              ;
          }
      }, delay)

  })
}
