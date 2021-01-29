import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import "./CardList.css";
import Card from "./Card";
/* the input for cardlist, list has the following structure 
{
    drinks:[
        0:{ ...}
        1:{...}
    ]
}

 */

function CardList({ list }) {
    // generates cards of appropriate drinks from list given by API call
    console.log("LIST:  ", list);
    if (list.drinks === "None Found" || list.drinks == []) {
        return <h1 className="NoDrinks">Sorry we could find any drinks</h1>;
    } else {
        return (
            <AnimateSharedLayout>
                <motion.div layout initial={{ borderRadius: 25 }}>
                    {list.drinks.map((listItem) => {
                        // map each drink to its own card
                        <Card key={listItem} />;
                    })}
                </motion.div>
            </AnimateSharedLayout>
        );
    }
}

export default CardList;
