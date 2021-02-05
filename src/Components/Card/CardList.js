import React from "react";
import { motion } from "framer-motion";

import "./CardList.css";
import imperialToMetric from "../../utilities/imperialToMetric";
import Card from "./Card";
/* the input for cardlist, list has the following structure 
{
    drinks:[
        0:{ ...}
        1:{...}
    ]
}

 */

function getIngredientsAndMeasurements(input) {
    let ingredientArr = [];
    for (let i = 1; i <= 15; i++) {
        if (input[`strIngredient${i}`] == null) {
            break;
        } else {
            ingredientArr.push([
                input[`strIngredient${i}`],
                imperialToMetric(input[`strMeasure${i}`]),
                // first item in each sub array is the ingredient, second element is
                // the amount needed. BEHAVIOUR EXHIBITED IN LINE 42
            ]);
        }
    }
    return ingredientArr;
}
function cleanInput(input) {
    let cleaned = [];
    if (input.strDrinkThumb == null) {
        console.log("the null");
        cleaned.push({
            key: input.idDrink,
            drink: input.strDrink,
            image: input.strImageSource,
            ingredients: getIngredientsAndMeasurements(input),
            instructions: input.strInstructions,
        });
    } else {
        cleaned.push({
            key: input.idDrink,
            drink: input.strDrink,
            image: input.strDrinkThumb,
            ingredients: getIngredientsAndMeasurements(input),
            instructions: input.strInstructions,
        });
    }
    return cleaned;
}
function CardList({ list }) {
    // generates cards of appropriate drinks from list given by API call
    if (list.drinks === "None Found") {
        return <h1 className="NoDrinks">Sorry we could find any drinks</h1>;
    } else {
        return (
            <div>
                <motion.ul
                    layout
                    initial={{ borderRadius: 25 }}
                    className="container"
                >
                    {list.drinks.map((listItem) => {
                        // map each drink to its own card
                        return (
                            <Card
                                key={listItem.idDrink}
                                drink={cleanInput(listItem)}
                            />
                        );
                    })}
                </motion.ul>
            </div>
        );
    }
}

export default CardList;
