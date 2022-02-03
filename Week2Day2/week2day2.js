var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

console.log("challenge 1")

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id % 3 == 0) {
        console.log(pokémon[i].name);
    }
}

console.log("challenge 2")

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length > 1) {
        console.log(pokémon[i].name);
    }
}

console.log("challenge 3")

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[0] === "poison" && pokémon[i].types.length == 1) {
        console.log(pokémon[i].name);
    }
}

console.log("challenge 4")

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[1] == "flying") {
        console.log(pokémon[i].types[0]);
    }
}

console.log("bonus challenge")

for(i=0;i<pokémon.length;i++){
        if(pokémon[i].types[0] === "poison" && pokémon[i].types.length == 1){

            var newname = pokémon[i].name;
            const myArray = newname.split("");

            for(n=0;n<myArray.length / 2;n++){
                var temp = myArray[n];
                var last = (myArray.length - 1) - n;
                myArray[n] = myArray[last];
                myArray[last] = temp;  
            }
            console.log(myArray.join(''));
        }
    }


    // console.log("bonus challenge2")

    // for(i=0;i<pokémon.length;i++){
    //         if(pokémon[i].types[0] === "poison" && pokémon[i].types.length == 1){
    
    //             var newname = pokémon[i].name;
    //             // const myArray = newname.split("");
    
    //             for(n=0;n<newname.length / 2;n++){
    //                 var temp = newname[n];
    //                 var last = (newname.length - 1) - n;
    //                 newname[n] = newname[last];
    //                 newname[last] = temp;  
    //             }
    //             console.log(newname);
    //         }
    //     }