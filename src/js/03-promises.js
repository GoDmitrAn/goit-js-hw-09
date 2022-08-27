import Notiflix from 'notiflix';
submitBtn = document.querySelector('[submit]')
formEl=document.querySelector('.form')

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData=new FormData(formEl)
  // createPromise(formData.get('amount'),formData.get('delay'))
  promise(formData.get('amount'), formData.get('delay')).then(value => {
    Notiflix.Notify.success(value);
  }).catch(error => {
    Notiflix.Notify.failure(error);
  })
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
