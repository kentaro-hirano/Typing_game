'use strict';

{
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
        loc = 0;
    }

    let words = [
        'red',
        'blue',
        'pink',
    ];
    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');

    document.addEventListener('click', () => {
        if (isPlaying === true) {
            return;
        }

        isPlaying = true;
        startTime = Date.now();
        setWord();
    });

    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]) {
            return;
        }
        loc++;

        //1: _ed
        //2: __d
        //3: ___
        target.textContent = '_'.repeat(loc) + word.substring(loc);
        const restart = document.getElementById('restart');

        if (loc === word.length) {
            if (words.length === 0) {
                const elapesedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                const result = document.getElementById('result');
                result.textContent = `Finished! ${elapesedTime} seconds!`;
                restart.classList.add('restart');
                restart.textContent = "Restart";
                return;
            }
            setWord();
        }
    });

    function reStart() {
        restart.addEventListener('click', () => {
            startTime = Date.now();
            restart.classList.remove('restart');
            restart.textContent = "";
            result.textContent = "";
            words = [
                'red',
                'blue',
                'pink',
            ];
            setWord();
        });

    }
    reStart();
}