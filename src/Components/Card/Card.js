import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Content from "./Content";

function Card({ drink }) {
    drink = drink[0];
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    console.log("asdas: ", drink.ingredients);
    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout></motion.div>
            <h2>{drink.drink}</h2>
            <AnimatePresence>
                {isOpen && (
                    <Content
                        id={drink.key}
                        name={drink.drink}
                        image={drink.image}
                        ingredientArr={drink.ingredients}
                        instructions={drink.instructions}
                    />
                )}
            </AnimatePresence>
        </motion.li>
    );
}

export default Card;
