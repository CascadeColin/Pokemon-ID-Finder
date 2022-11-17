/////////////////////////////////////////////
// ASYNC CALLBACK EXAMPLE USING FETCH/THEN //
/////////////////////////////////////////////

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

//////////////////////////////////////////////
// SAME AS ABOVE, BUT IN "TRY/CATCH" FORMAT //
//////////////////////////////////////////////

const btnEl = document.querySelector("#button");
const inputEl = document.querySelector("#input");
const result = document.querySelector("#result");

// almost identical to "fetch/then" in functionality.  "Try/Catch" is an ES7 feature and more readable in my opinion.
const getPokemon = async (id) => {
    try {
        // The fetch URL is a template literal as defined by using backticks (`) and form strings, just like ' and ".  "${id}" is an expression and the value is converted to a string, and is the major benefit of using ` instead of ' or ".
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json()
        result.textContent = "Name: " + data.name;
    } catch(err) {
        result.textContent = "Please enter a valid name or ID (spelling matters!)";
    }
}

// almost identical to "fetch/then" in functionality.  "Try/Catch" is an ES7 feature and more readable in my opinion.
// can also be written as "async function getPokemonByName(id) {}"
const getPokemonByName = async (id) => {
    try {
        // "await" tells the function to wait for a promise before continuing.  In this case, we are waiting for a response from PokeAPI, and then attributing that response to "const response".
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json()
        result.textContent = "ID: " + data.id;
    } catch(err) {
        // "result.textContent = err" will display the unfiltered error response, which is useful for us but not a good look in a frontend deployment.  "err" is just a parameter name, you can call it whatever you want, but using "err" is readable and good practice because "error" is a reserved keyword.
        result.textContent = "Please enter a valid name or ID (spelling matters!)";
    }
}

let btnClicked = () => {

    // Number() converts a string to a number.  If it cannot convert the string, it returns "NaN".  NaN is a number type variable, so JS will still treat it like it's a number.
    inputName = Number(inputEl.value);

    //"isNaN() is a check to see if a number variable is NaN.  This if statement kicks the request to "search by name" if the user inputs a non-number (and thus NaN value).

    if (isNaN(inputName)) {
        getPokemonByName(input.value.toLowerCase());
    // searches by ID if the input value can be converted into a number that is not NaN

    } else {
        getPokemon(inputEl.value);
    }
}

btnEl.addEventListener("click", btnClicked);