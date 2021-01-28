import React from "react";
import { motion } from "framer-motion";

import imperialToMetric from "../../utilities/imperialToMetric";

function Content(drink) {
    // First we put all needed ingredients into an array so we can map the
    // array to an unordered list in return()

    let ingredientArr = [];
    ingredientArr.push([
        drink.strIngredient1,
        imperialToMetric(drink.strMeasure1),
    ]);
    for (let i = 1; i <= 15; i++) {
        if (drink[`strIngredient${i}`] == null) {
            break;
        } else {
            ingredientArr.push([
                drink[`strIngredient${i}`],
                imperialToMetric(drink[`strMeasure${i}`]),
                // first item in each sub array is the ingredient, second element is
                // the amount needed. BEHAVIOUR EXHIBITED IN LINE 42
            ]);
        }
    }

    //----------------------------------------------------------------------
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
            <div className="WrittenContent">
                <ul>
                    {ingredientArr.map((ingredientSubArr) => {
                        <li>
                            {ingredientSubArr[0]}, {ingredientSubArr[1]}
                        </li>;
                    })}
                </ul>
                <div className="Instructions">{drink.strInstructions}</div>
            </div>
        </motion.div>
    );
}

export default Content;
