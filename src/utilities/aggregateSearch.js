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

The purpose of this function is to aggregate all the id's of drinks from 
the result of apiSearchCall to facilitate the use of apiIndividual call


This will be used in App.js 
*/

function aggregateID(input) {
    let idArr = [];
    input = input.drinks;
    input.forEach((element) => {
        idArr.push(element.idDrink);
    });
    return idArr;
}

export default aggregateID;
