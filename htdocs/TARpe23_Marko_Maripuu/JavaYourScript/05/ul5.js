//temp
let temp = 20 //degrees celsius
if (temp >= 25) 
{
    console.log("Väga kuum ilm!");
}
else if (temp <= 25 && temp >= 15)
{
    console.log("Mõnus temperatuur...");
}
else 
{
    console.log("Jahe ilm!");
}

//login
let username = document.getElementById("username")
let isAdmin = (username = "L6he") ? "Greetings, Admin!" : "Greetings, User!";
console.log(isAdmin)