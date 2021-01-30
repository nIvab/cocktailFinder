import React, { useState } from "react";
import ReactTags from "react-tag-autocomplete";

import "./SearchWithTags.css";

const SearchWithTags = ({ ingredients, Tags, handleTags }) => {
    let clean = [];
    const cleanData = () => {
        ingredients = ingredients.drinks; //array of obj.s in ingredients
        for (let i = 0; i < ingredients.length; i++) {
            //format JSON so that ReactTags likes it
            clean = [...clean, { id: i, name: ingredients[i].strIngredient1 }];
        }
    };

    cleanData();

    /* ------------------ CLEANING DATA ABOVE THIS LINE ---------------- */

    const [suggestions] = useState(clean);

    let reactTags = React.useRef();

    const handleDelete = (i) => {
        const newTags = Tags;
        newTags.splice(i, 1);
        handleTags(newTags);
    };

    const handleAddition = (newTag) => {
        console.log("add tag");
        handleTags([].concat(Tags, newTag));
    };

    return (
        <div className="SearchWithTags">
            <ReactTags
                ref={reactTags}
                tags={Tags}
                suggestions={suggestions}
                onDelete={handleDelete}
                onAddition={handleAddition}
                allowNew
                placeholderText="What do you have laying around? e.g whiskey, limes, bitters,..."
                minQueryLength={1}
            />
        </div>
    );
};

export default SearchWithTags;
