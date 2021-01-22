import React, { useState } from "react";
import ReactTags from "react-tag-autocomplete";

import "./SearchWithTags.css";

const SearchWithTags = ({ ingredients }) => {
    console.log("INPUT:     ", ingredients);
    let clean = [];
    const cleanData = () => {
        ingredients = ingredients.drinks; //array of obj.s in ingredients
        for (let i = 0; i < ingredients.length; i++) {
            //format JSON so that ReactTags likes it
            clean = [...clean, { id: i, name: ingredients[i].strIngredient1 }];
        }

        console.log("cleaned:   ", clean);
    };

    cleanData();

    /* ------------------ CLEANING DATA ABOVE THIS LINE ---------------- */

    let initial = [
        {
            id: 0,
            name: "Light rum",
        },
    ];
    const [tags, setTags] = useState(initial);
    const [suggestions] = useState(clean);
    console.log("SUGGESTIONS:   ", suggestions, "TYPE:  ", typeof suggestions);

    let reactTags = React.useRef();

    const handleDelete = (i) => {
        const newTags = tags;
        newTags.splice(i, 1);
        setTags(newTags);
    };

    const handleAddition = (newTag) => {
        console.log("add tag");
        setTags([].concat(tags, newTag));
    };

    return (
        <div className="SearchWithTags">
            <ReactTags
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                onDelete={handleDelete}
                onAddition={handleAddition}
                allowNew
                placeholderText="What do you have laying around? e.g whiskey, limes, bitters,..."
                minQueryLength={1}
            />
            <button class="submitSearch">Find me a drink!</button>
        </div>
    );
};

export default SearchWithTags;
