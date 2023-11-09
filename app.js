const shareBtn=document.querySelector('.share-btn ');
const shareOption=document.querySelector('.share-options');

shareBtn.addEventListener('click',()=>{
    shareOption.classList.toggle('active');
})