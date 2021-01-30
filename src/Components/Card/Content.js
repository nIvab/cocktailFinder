import React from "react";
import { motion } from "framer-motion";

import imperialToMetric from "../../utilities/imperialToMetric";

function Content({ id, name, image, ingredientArr, instructions }) {
    // First we put all needed ingredients into an array so we can map the
    // array to an unordered list in return()
    console.log("content", ingredientArr);
    //----------------------------------------------------------------------
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img src={image} alt={name}></img>
            <div className="WrittenContent">
                <ul>
                    {ingredientArr.map((ingredientSubArr) => {
                        return (
                            <li>
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
