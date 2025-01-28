/*
Marko Maripuu
Metshein Ülesanne 2
15/10/2024
*/

//Kellaaeg
let hrs = 2;
let mins = 38;
let secs = 59;
console.log(`${hrs}:${mins}:${secs} PM`)

//Tsitaat lause ees
let cite = '"Foolishness, Dante. Foolishness. Might controls everything. And without strength you cannot protect anything. Let alone yourself."'
console.log(`${cite} \n―Vergil expressing his disappointment to Dante, after their fight atop Temen-ni-gru`)

//Mallide kasutamine
let firstName = "Jason"
let surname = "Angove"
console.log(`${firstName} ${surname}'s initials are ${firstName.charAt(0)}.${surname.charAt(0)}.`)

//Perenime pikkus
let Name = "Vajnšenker, Vanja"
let commaIndex = Name.indexOf(",")
let onlySurname = Name.slice(commaIndex + 2)
console.log(onlySurname.toUpperCase(onlySurname))

//E-posti aadressi muutmine
let epost = "freedaihello@netlog.com";
console.log(epost.replaceAll("netlog", "gmail"))

//Andmerida analüüs
let dataRow = "24,Adam,Belušič,abelusic@croatianniggatechnology.com,idk,40.19.226.175"
console.log(dataRow.slice(16, 52) + " ja " + dataRow.slice(56))
