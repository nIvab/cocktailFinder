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
        <li class="Card">
            <motion.div
                layout
                onClick={toggleOpen}
                initial={{ borderRadius: 10 }}
                class="mystery-container"
            >
                <motion.img
                    class="drinkImages"
                    src={drink.image}
                    alt={drink.drink}
                    exit={{ opacity: 0 }}
                />

                <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: {
                            height: "auto",
                        },
                        closed: {
                            height: "0px",
                        },
                    }}
                >
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
                </motion.div>
                <motion.div class="footer">
                    <motion.h2 class="cardHeader">{drink.drink}</motion.h2>
                </motion.div>
            </motion.div>
        </li>
    );
}

export default Card;
