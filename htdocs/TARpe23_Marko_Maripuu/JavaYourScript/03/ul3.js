function calculateTravelTime() 
{
//time
let distance = document.getElementById("distance").value; //km
let speed = document.getElementById("speed").value; //km/h
console.log(`It takes ${distance / speed} hours to pass ${distance} km while driving at ${speed} km/h.`)
}


//post viewing
let posts = 137
console.log(`It takes ${posts / 10} sites to view all posts at once.`)

//server labor cost
let power = 400 //watts
let price = 9.69 //cents/kWh
let consumption = power / 1000
let laborCost = consumption * price
console.log(`The server's labor cost for one hour is ${laborCost.toFixed(2)}€.`)