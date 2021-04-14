let score = 0;

const title = document.createElement('h1');
title.innerHTML = 'whack a mole';
document.body.appendChild(title);

// created scorekeeper
const scoreTracher = document.createElement('p');
document.body.appendChild(scoreTracher);
scoreTracher.innerHTML = 'SCORE: ' + score;

// created timekeeper
const timeKeeper = document.createElement('p');
document.body.appendChild(timeKeeper);

//create mole
const mole = document.createElement('img');
mole.src = 'https://www.clipartmax.com/png/small/28-288482_mole-clipart-whack-a-mole-from-whack-a-mole.png';
document.body.appendChild(mole);

function getSimpleTime(date) {
    return String((date.getHours() % 12)).padStart(2, '0') + 
    ':' + String(date.getMinutes()).padStart(2, '0') +
    ':' + String(date.getSeconds()).padStart(2, '0')

};

function updateTime (){
    let time = new Date();
    timeKeeper.innerHTML = 'Time: ' + getSimpleTime(time);
}

//time interval
setInterval(
    function() {
        updateTime();
    },
    1000
)

//mole interval
setInterval(function () {
    mole.style.position= 'absolute';
    updateMolePosition(Math.random () * 300, (Math.random() * 500) + 200);

},1000);
function updateMolePosition(x,y) {
    mole.style.left = x + 'px';
    mole.style.top = y + 'px';
}

mole.addEventListener('click', function () {
    score++;
    scoreTracher.innerHTML = 'SCORE: ' + score;
})