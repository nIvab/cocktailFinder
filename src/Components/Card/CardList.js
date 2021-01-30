import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

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
            console.log("MEASURE:   ", input[`strMeasure${i}`]);
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
    console.log("INPUT__cardList", list);
    // generates cards of appropriate drinks from list given by API call
    if (list.drinks === "None Found") {
        console.log("NONE FOUND__from search, cardList");
        return <h1 className="NoDrinks">Sorry we could find any drinks</h1>;
    } else {
        console.log("FOUND__ from search, in cardList");
        return (
            <AnimateSharedLayout>
                <motion.ul
                    layout
                    initial={{ borderRadius: 25 }}
                    class="container"
                >
                    {list.drinks.map((listItem) => {
                        // map each drink to its own card
                        return <Card drink={cleanInput(listItem)} />;
                    })}
                </motion.ul>
            </AnimateSharedLayout>
        );
    }
}

export default CardList;
