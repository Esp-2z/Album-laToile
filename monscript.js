const front = document.getElementById('cardFront');
const back = document.getElementById('cardBack');
let animating = false;

console.log("dddd");


back.addEventListener('click', () => {
    if (animating) return;
    animating = true;

front.classList.add('slide-out');

back.classList.add('come-forward');

setTimeout(() => {
    front.classList.remove('slide-out');
    front.classList.add('new-back');

    back.classList.remove('come-forward');
    back.classList.add('new-front');
 }, 680);

 setTimeout(() => {
    animating = false;
 }, 750);
});

 front.addEventListener('click', () => {
    if (!front.classList.contains('new-back')) return;
    if (animating) return;
    animating = true;

    back.classList.remove('new-front');
    back.classList.add('slide-out');

    front.classList.remove('new-back');
    front.classList.add('come-forward');

    setTimeout(() => {
        back.classList.remove('slide-out');
        back.classList.add('new-back');

        front.classList.remove('come-forward');
        front.classList.add('new-front');
    }, 680);

    setTimeout(() => {
        animating = false;
    }, 750);

 });


