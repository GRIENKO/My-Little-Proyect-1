const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('siempre supe que dirias que si :3 jijiji te amo ')
})
const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
   const randomX = parseInt(Math.random()*100)
   const randomY = parseInt(Math.random()*100)
   noBtn.style.setProperty('top',randomY+'%');
   noBtn.style.setProperty('left',randomX+'%');
   noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})