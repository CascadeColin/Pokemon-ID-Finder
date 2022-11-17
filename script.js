// CALLBACK FUNCTION EXAMPLE //
///////////////////////////////

// names = ["jack", "jill", "sam", "colin"];

// const myForEach = (arr, callback) => {
//     for (let i=0; i<arr.length; i++) {
//         const element = arr[i];
//         console.log(element);
//         callback(element);
//     }
// }

// myForEach(names, (name) => {
//     console.log(name);
// })


// ASYNC CALLBACK EXAMPLE //
////////////////////////////

// const getPokemon = (id, cb) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(response => response.json())
//     .then(data => {
//         cb(data)
//     })
// }

// getPokemon(211, (pokemon) => {
//     console.log(pokemon)
// })

// SAME AS ABOVE, BUT IN "TRY/CATCH" FORMAT //
//////////////////////////////////////////////

const btnEl = document.querySelector("#button");
const inputEl = document.querySelector("#input");
const result = document.querySelector("#result");

const getPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json()
        result.textContent = "Name: " + data.name;
    } catch(err) {
        result.textContent = err;
    }
}

const getPokemonByName = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json()
        result.textContent = "ID: " + data.id;

    } catch(err) {
        result.textContent = err;
    }
    
}

let btnClicked = () => {
    inputName = Number(inputEl.value);
    if (isNaN(inputName)) {
        getPokemonByName(input.value.toLowerCase());
    } else {
        getPokemon(inputEl.value);
    }
}

btnEl.addEventListener("click", btnClicked);

