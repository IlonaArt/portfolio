const buttonScroll = document.querySelector('.button-scroll');
const block = document.querySelector('body');
const anchors = document.querySelectorAll('.project-link[href*="#"]')

buttonScroll.addEventListener('click', function (e) {
  block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
});


window.addEventListener('scroll', function (){
  buttonScroll.hidden = (scrollY < document.documentElement.clientHeight);
});



for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}