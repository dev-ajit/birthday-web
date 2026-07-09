// ============================
// Loader
// ============================

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
};

// ============================
// Surprise Button
// ============================

const btn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

btn.addEventListener("click", () => {

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {
        console.log("Autoplay blocked. Click again to play music.");
    });

    createHearts();
});

// ============================
// Photo Slider
// ============================

const images = [
    "images/Anku A.jpg",
    "images/Anku B.jpg",
    "images/Anku C.jpg",
    "images/Anku E.jpg",
    "images/anku6.jpeg",
    "images/anku7.jpeg",
    "images/anku8.jpeg",
    "images/anku9.jpeg",
    "images/anku10.jpeg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("slide").src = images[index];

},2500);

// ============================
// Typewriter Effect
// ============================

const text = `Happy Birthday My Sweet ANKU ❤️

You are the most beautiful gift in my life.

Your smile is my happiness.

Your love is my strength.

Every moment with you is special.

May your life always be filled with happiness,
success and endless smiles.

I Love You Forever ❤️

— Yours,
AJIT ❤️`;

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,60);
    }

}

btn.addEventListener("click",typing);

// ============================
// Floating Hearts
// ============================

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-20px";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animation="fall 6s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },300);

}

// ============================
// Falling Animation
// ============================

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);
opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);
opacity:0;

}

}
`;

document.head.appendChild(style);

// ============================
// Fireworks / Confetti
// ============================

function fireworks(){

    for(let i=0;i<80;i++){

        let star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.fontSize=(10+Math.random()*25)+"px";

        star.style.opacity="1";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },2000);

    }

}

btn.addEventListener("click",fireworks);