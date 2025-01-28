const nimed = ["mari maasikas",
 "jaan jõesaar",
  "kristiina kukk",
   "margus mustikas",
    "jaak järve",
     "kadi kask",
      "Toomas Tamm",
       "Kadi Meri",
        "Leena Laas",
         "Madis Mets",
          "Hannes Hõbe",
           "Anu Allikas",
            "Kristjan Käär",
             "Eva Esimene",
              "Jüri Jõgi",
               "Liis Lepik",
                "Kalle Kask",
                 "Tiina Teder",
                  "Kaidi Koppel",
                   "tiina Toom"
                ];

function fixNames() {
    let properNames = [];
    for (const name of nimed) {
        const low = name.toLocaleLowerCase()
        const splitNames = low.split(" ")
        let fixedName = ""
        for (const currentName of splitNames) {
            if (currentName.includes("-")) {
                const dashNames = currentName.split("-")
                fixedName += dashNames[0].substring(0, 1).toLocaleUpperCase() + dashNames[0].substring(1)
                fixedName += "-"
                fixedName += dashNames[1].substring(0, 1).toLocaleUpperCase() + dashNames[1].substring(1)
            }
            else {
                fixedName += currentName.substring(0, 1).toLocaleUpperCase() + currentName.substring(1)
            }
            fixedName += " "
        }
        fixedName += " "
        properNames.push(fixedName.trimEnd())
    }
    return properNames
}

console.log(fixNames())