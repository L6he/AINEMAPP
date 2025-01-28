let num = 0
let lebroneeringJames = 3

switch (true) {
    case (num < 0):
        glumber = "The number is negative.";
        break; 
    case (num > 0):
        glumber = "The number is positive.";
        break;
    case (num == 0):
        glumber = "The number is zero.";
        break;  
}

switch (true) {
    case (lebroneeringJames >= 1 && lebroneeringJames < 3):
        laud = "Valige laud kahele inimesele.";
        break;
    case (lebroneeringJames >= 3 && lebroneeringJames < 5):
        laud = "Valige laud neljale inimesele.";
        break;
    case (lebroneeringJames >= 5 && lebroneeringJames < 7):
        laud = "Valige laud kuuele inimesele.";
        break;
}
console.log(glumber)
console.log(laud)