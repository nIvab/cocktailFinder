import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Content from "./Content";
import "./Card.css";
function Card({ drink }) {
    drink = drink[0];
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <motion.li
            layout
            class="Card"
            onClick={toggleOpen}
            initial={{ borderRadius: 10 }}
        >
            <motion.div className="avatar" layout></motion.div>
            {!isOpen && (
                <img class="drinkImages" src={drink.image} alt={drink.drink} />
            )}
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
            <div class="footer">
                <h2 class="cardHeader">{drink.drink}</h2>
            </div>
        </motion.li>
    );
}

export default Card;
