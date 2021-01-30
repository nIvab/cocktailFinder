/*
The input of this function will be a JSON in the form of 
{
    "drinks": [
        {
            "strDrink": ...
            "strDrinkThumb":....
            "idDrink":....
        }
        {
            "strDrink": ...
            "strDrinkThumb":....
            "idDrink":....
        }
        .
        .
        .
    ]
}

The purpose of this function is to take all the drinks that the search provides us, 
and collate the large JSON files associated with each drink into one object. Thus 
allowing us to pass through all the needed content for our drink cards 

This will be used in App.js 
*/

function aggregateID(input) {
    console.log("AGGREGATE_SEARCH", input);
    let idArr = [];
    input = input.drinks;
    console.log("INPUT___aggregateID", input);
    input.forEach((element) => {
        idArr.push(element.idDrink);
    });
    return idArr;
}

// function aggregateSearch(inputArr){
//     let drinksObj = {};
//     forEachj
// }

export default aggregateID;
