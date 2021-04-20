document.addEventListener("DOMContentLoaded", function(){

let li = document.querySelectorAll('li');
  li.forEach(e => {e.addEventListener('click', (e) => {
    e.target.classList.toggle('checked') 
  } )} )


 
})