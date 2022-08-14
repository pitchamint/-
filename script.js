const ratingContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const panel = document.getElementById('panel')
const sendBtn = document.getElementById('send')

ratingContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        e.target.parentNode.classList.add('active');
        selected = e.target.nextElementSibling.innerHTML;

    }
});

function removeActive(){
    for(let i=0 ; i<ratings.length ; i++){
        ratings[i].classList.remove('active');
    }
}

sendBtn.addEventListener('click',()=>{
    panel.innerHTML = `
    <img src="./img/heart.svg" alt="" class="img-complete">
    <strong>ขอบพระคุณที่ใช้บริการของเรา</strong>
    <br>
    <strong>ผลกราประเมิน : ${selected}</strong>`;
});