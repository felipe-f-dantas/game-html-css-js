const felipe = document.querySelector('.felipe');
const spider = document.querySelector('.spider');

const jump = () =>{
    felipe.classList.add('jump');
    setTimeout(() => {
        felipe.classList.remove('jump');

    }, 500);
}

const loop = setInterval(()=>{

    const spiderPosition = spider.offsetLeft;

    const felipePosition = +window.getComputedStyle(felipe).bottom.replace('px','');
    
    console.log(felipePosition)
    if(spiderPosition <= 120 && spiderPosition >0 &&felipePosition < 190){

        spider.style.animation = 'none';
        spider.style.left = `${spiderPosition}px`;

        felipe.style.animation = 'none';
        felipe.style.left = `${felipePosition}px`;

        felipe.src = 'img/gameover.png';
        felipe.style.width = '230px';
        felipe.style.marginLeft = '50px';

        clearInterval(loop);

        const pergunta = window.confirm("Reiniciar?");
        if (pergunta === true) {
            const restart = window.location.reload();        }       
        else {
            window.location.href = '../index.html'
        }
    }

},10)




document.addEventListener('keydown',jump);
document.addEventListener('touchstart',jump);

