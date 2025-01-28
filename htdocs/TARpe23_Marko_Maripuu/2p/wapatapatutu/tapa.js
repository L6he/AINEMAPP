//Pealkirjale klõpsates mudab sellele järgnev lõik värvi
//MUDA MUDA MUDA MUDA
let hl1t = document.getElementById("hl1");
    let hl1p = document.getElementById("hl1pa");
let hl2t = document.getElementById("hl2");
    let hl2p = document.getElementById("hl2pa");
let hlat = document.getElementById("hla");
    let hlap = document.getElementById("hlapa");

const setBg = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    hl1p.style.backgroundColor = "#" + randomColor;
}
const clrBg = () => {
    hl1p.style.backgroundColor = "rgba(0,0,0,0.0)";
}

const setBg2 = () => {
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    hl2p.style.backgroundColor = "#" + randomColor2;
}
const clrBg2 = () => {
    hl2p.style.backgroundColor = "rgba(0,0,0,0.0)";
}

const setBg3 = () => {
    var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    hlap.style.backgroundColor = "#" + randomColor3;
}
const clrBg3 = () => {
    hlap.style.backgroundColor = "rgba(0,0,0,0.0)";
}

hl1t.addEventListener("click", setBg);
hl1p.addEventListener("mouseover", clrBg);

hl2t.addEventListener("click", setBg2);
hl2p.addEventListener("mouseover", clrBg2);

hlat.addEventListener("click", setBg3);
hlap.addEventListener("mouseover", clrBg3);