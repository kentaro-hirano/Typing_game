'use strict'

{

    function setWord() {
        word = words.splice([Math.floor(Math.random() * words.length)], 1)[0];
        target.textContent = word;
        loc = 0;
    }

    let words = ['red', 'blue', 'pink'];
    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');


    document.addEventListener('click', () => {
        if (isPlaying) {
            return;
        }
        isPlaying = true;
        startTime = Date.now();
        setWord();
    })

    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]) {
            return;
        }
        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);

        if (loc === word.length) {
            if (words.length === 0) {
                const elapesedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                const result = document.getElementById('result');
                result.textContent = `Finished! ${elapesedTime} seconds`;
                const restart = document.getElementById('restart');
                restart.classList.add('restart');
                restart.textContent = "Restart";
                return;
            }
            setWord();
        }
    });

    reStart();

    function reStart() {
        restart.addEventListener('click', () => {
            result.textContent = "";
            restart.classList.remove('restart');
            restart.textContent = "";
            startTime = Date.now();
            words = ['red', 'blue', 'pink'];
            setWord();
        });
    }
}