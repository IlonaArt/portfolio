const buttonScroll = document.querySelector('.button-scroll');
const block = document.querySelector('.primary-section');
const link = document.querySelector('.project-link');
const anchors = document.querySelectorAll('a[href*="#"]')

buttonScroll.addEventListener('click', function (e) {
  buttonScroll.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
  window.scrollTo(scrollX, 0);
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