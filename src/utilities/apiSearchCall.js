/* input looks like 
[
    {
        id: ....
        name: ...
    }, 
    {
        id:...
        name:...
    }
]
*/

function cleanArrForSearch(input) {
    //clean array of tags so that we can search
    let cleanedInput = [];
    input.forEach((item) => {
        cleanedInput.push(item.name.replace(" ", "_")); // input is an array of objects
    });
    return cleanedInput;
}

async function apiSearchCall(input) {
    //input should be an array of tags given from SearchWithTags.js in Components
    let cleanedInput = cleanArrForSearch(input);
    let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${cleanedInput}`
    );
    let data = await response.json();
    return data;
}

async function apiIndividualCall(input) {
    let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${input}`
    );
    let data = await response.json();
    return data;
}

async function apiInitialCall() {
    let responseIngredients = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
        {
            mode: "cors",
        }
    );

    let responseDrinks = await fetch(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/randomselection.php`
    );
    let dataIng = await responseIngredients.json();
    let dataDri = await responseDrinks.json();
    let dataArr = [dataIng, dataDri];
    return dataArr;
}

export default apiSearchCall;
export { apiInitialCall, apiIndividualCall };
