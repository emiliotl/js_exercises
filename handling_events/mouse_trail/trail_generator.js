

let trails = document.getElementsByClassName('trail');
trails[0].innerText = String.fromCodePoint('0x1F525');
trails[1].innerText = String.fromCodePoint('0x1F602');
trails[2].innerText = String.fromCodePoint('0x1F44C');
trails[3].innerText = String.fromCodePoint('0x1F6AC');
trails[4].innerText = String.fromCodePoint('0x1F525');

for (let trail of trails) {
    trail.style.position = 'relative';
}

document.addEventListener('mousemove', event => {
    for (let i = 0; i < trails.length; i++) {
        trails[i].style.zIndex = i;
        trails[i].style.top = String(event.clientY) + 'px';
        trails[i].style.left = String(event.clientX) + 'px';
    }
})