const imgEl = document.getElementById('jimage');
const linkEl = document.getElementById('mistari')

const srcArray = ['indexmultimedia/20230216_184757.jpg', 'indexmultimedia/20231230_120031.png', 'indexmultimedia/a.png', 'indexmultimedia/d.png', 'indexmultimedia/da-hl2-gpu.webp', 'indexmultimedia/doyoumind.jpg', 'indexmultimedia/f.png', 'indexmultimedia/haiiiii.jpg', 'indexmultimedia/IMG_20240813_000442_798.jpg', 'indexmultimedia/lotonmind.png', 'indexmultimedia/pineapple.gif', 'indexmultimedia/real_life_tenshinhan_by_shibuz4_db615mb-fullview.jpg', 'indexmultimedia/s.png', 'indexmultimedia/fly.png'];

const urls = ['https://www.half-life.com/en/halflife2/20th', 'https://youtu.be/dQw4w9WgXcQ', 'https://www.half-life.com/en/halflife/25th', 'https://www.youtube.com/watch?v=lw4j7dmYg_k', 'https://www.youtube.com/watch?v=aLZQ-0dHbiU'];

imgEl.addEventListener('click', () => {
    window.location.reload();
});

linkEl.addEventListener('click', () => {
    window.location.reload();
});

randomImage();

randomLink();

function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);

    if (localStorage.getItem('currentIndex') !== String(randomIndex)) {
        
        imgEl.src = srcArray[randomIndex];

        localStorage.setItem('currentIndex', randomIndex);

    } else {

        randomImage();

    }
}

function randomLink() {

    const randomIndex = Math.floor(Math.random()*urls.length);

    if (localStorage.getItem('currentIndex') !== String(randomIndex)) {
        
        linkEl.href = urls[randomIndex];

        localStorage.setItem('currentIndex', randomIndex);

    } else {

        randomLink();

    }
}
