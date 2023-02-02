const tl = gsap.timeline({
    defaults: {duration: 0.75, 
              ease: Back.easeOut}})

tl.fromTo('.cookie-container', {scale:0}, {scale: 1})
tl.fromTo('.cookie-svg', {opacity: 0, x:-50, rotation: '-45deg'}, 
                     {opacity: 1, x:0, rotation: '0deg'})
tl.fromTo('.text', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<')

//Cookie jump
tl.fromTo('.cookie-svg', {y:0, rotation:'0deg'}, 
                    {y:-20, rotation:'-20deg', yoyo:true, repeat:-1})
tl.fromTo('#crumbs', {y:0}, 
                    {y:-20, yoyo:true, repeat:-1}, '<')

//Fading the cookie out
const button = document.querySelector('button');
button.addEventListener('click', () => {
  gsap.to('.cookie-container', {opacity:0, y:100, duration: 0.75, ease: Power1.easeOut})
})
