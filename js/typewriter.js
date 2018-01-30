var app = document.getElementById('fapp');

var typewriter = new Typewriter(fapp, {
    loop: true
});

window.addEventListener('load',

    typewriter.typeString('Design')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Develop')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Build')
    .pauseFor(5000)
    .start());
