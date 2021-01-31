import React from "react";
import { motion } from "framer-motion";

import imperialToMetric from "../../utilities/imperialToMetric";
import "./Content.css";

function Content({ id, name, image, ingredientArr, instructions }) {
    // First we put all needed ingredients into an array so we can map the
    // array to an unordered list in return()
    //----------------------------------------------------------------------
    console.log("CONTENT:   ", id);
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="WrittenContent">
                <ul class="Ingredients">
                    {ingredientArr.map((ingredientSubArr) => {
                        return (
                            <li class="ItemAndMeasure" key={ingredientSubArr}>
                                {ingredientSubArr[0]}, {ingredientSubArr[1]}
                            </li>
                        );
                    })}
                </ul>
                <div className="Instructions">{instructions}</div>
            </div>
        </motion.div>
    );
}

export default Content;
