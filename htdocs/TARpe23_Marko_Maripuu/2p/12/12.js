var pealkiri1 = document.querySelector("h1");
let html = "<h1>Ostukorv</h1>";
pealkiri1.insertAdjacentHTML("afterend", html);

const newlist = document.createElement('ul');

newlist.setAttribute("id", "ostukorv");
newlist.textContent = '<li>Uus lõik alguses</li>';