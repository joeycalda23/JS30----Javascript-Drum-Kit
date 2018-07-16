function playSound (event){
    var audioDataAttribute = `audio[data-key="${event.keyCode}"]`;
    var divDataAttribute = `div[data-key="${event.keyCode}"]`;
    const audio = document.querySelector(audioDataAttribute);
    const key = document.querySelector(divDataAttribute);
    if(!audio) return;
    audio.play();
    audio.currentTime=0;
    key.classList.toggle('key__playing');
};

function removeTransition(event) {
    if(event.propertyName !=='transform') return;
    this.classList.remove('key__playing');
}


window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));