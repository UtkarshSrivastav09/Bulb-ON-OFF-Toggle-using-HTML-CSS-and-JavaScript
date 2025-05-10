const bulb = document.querySelector('.bulb');
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    bulb.classList.toggle('glow');
    bulb.classList.toggle('border');
    bulb.classList.toggle('bg');
})