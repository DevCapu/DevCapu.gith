(function (){
  const button = document.querySelector('.hamburger');
  button.addEventListener('click', () => {
    console.log(button)
    button.classList.toggle('is-active');
  })
})()