import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Content from "./Content";
import "./Card.css";
const Card = React.memo(({ drink }) => {
    drink = drink[0];
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="Card">
            <motion.div
                layout
                onClick={toggleOpen}
                initial={{ borderRadius: 10 }}
                className="mystery-container"
            >
                <motion.img
                    className="drinkImages"
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
                <motion.div className="footer">
                    <motion.h2 className="cardHeader">{drink.drink}</motion.h2>
                </motion.div>
            </motion.div>
        </li>
    );
});

export default Card;
