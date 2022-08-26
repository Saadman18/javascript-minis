
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const click = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    click.classList.add('play');

});

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove('play'); 

};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
