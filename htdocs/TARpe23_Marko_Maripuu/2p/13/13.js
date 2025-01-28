// document.querySelector('p').removeAttribute('id');

let target = document.getElementById("eemaldaID");
target.removeAttribute("id");

target.setAttribute("attr", "Marko Maripuu")

console.log(target.getAttribute("attr"))

// const dtitle = document.getElementById("data-title")
// const ddesc = document.getElementById("data-description")

// document.querySelector("h5").setAttribute("class", dtitle)
// document.querySelector("p").setAttribute("class", ddesc)

const cardDivs = document.querySelectorAll(".card");
cardDivs.forEach((card) => {
    const image = card.querySelector(".card-img-top");
    const title = image.getAttribute("data-title");
    const description = image.getAttribute("data-description");
    card.querySelector(".card-title").innerHTML = title;
    card.querySelector(".card-text").innerHTML = description;
});