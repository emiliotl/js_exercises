

let balloon = document.getElementById('balloon');
balloon.innerText = String.fromCodePoint('0x1F388');
sizeInPercent = 100;


document.addEventListener('keydown', event => {
    if (sizeInPercent >= 1000) {
        balloon.innerText = String.fromCodePoint('0x1F4A5');
        document.removeEventListener('keydown');
    }
    if (event.key === 'ArrowUp') {
        sizeInPercent = sizeInPercent * 1.1;
    } else if (event.key === 'ArrowDown') {
        sizeInPercent = sizeInPercent * 0.9;
    }
    balloon.style.fontSize = String(sizeInPercent) + '%';
});


