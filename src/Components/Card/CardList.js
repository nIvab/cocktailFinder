import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import Card from "./Card";
function CardList(list) {
    // generates cards of appropriate drinks from list given by API call
    return (
        <AnimateSharedLayout>
            <motion.div layout initial={{ borderRadius: 25 }}>
                {list.map((listItem) => {
                    // map each drink to its own card
                    <Card key={listItem} />;
                })}
            </motion.div>
        </AnimateSharedLayout>
    );
}
