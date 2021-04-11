// Keys associated with file names (images and sound files)
const instruments = {
    'w': 'tom1',
    'a': 'tom2',
    's': 'tom3',
    'd': 'tom4',
    'j': 'snare',
    'k': 'crash',
    'l': 'kick'
}

// Add click event listener to each drum button
const instrumentButtons = document.querySelectorAll('.drum');
for (let i = 0; i < instrumentButtons.length; i++) {
    instrumentButtons[i].addEventListener('click', function (event) {
        const key = instrumentButtons[i].innerText;
        playSound(instruments[key]);
        animateBackground(key);
    })
}

// Add event listeners for keys (w,a,s,d,j,k,l) associated to drum instruments
document.addEventListener("keydown", function (event) {
    const pressedKey = event.key.toLowerCase();
    const selectedInstrument = instruments[pressedKey];
    if (selectedInstrument) {
        playSound(selectedInstrument);
        animateBackground(pressedKey);
    }
})

// Play sound as per the pressed key
function playSound(instrumentName) {
    let audio = new Audio(`./sounds/${instrumentName}.mp3`);
    audio.play();
}

// Animate the button associated with the pressed key
function animateBackground(pressedKey) {
    const elem = document.querySelector(`.${pressedKey}`);
    console.log(elem);
    elem.classList.add('pressed');
    setTimeout(() => {
        elem.classList.remove('pressed');
    }, 100)
}