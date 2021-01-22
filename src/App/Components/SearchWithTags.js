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

    function onDelete(i) {
        console.log("delete tag");
        let newTags = tags.slice(0);
        setTags(newTags.splice(i, 0));
    }

    function onAddition(newTag) {
        console.log("add tag");
        setTags([].concat(tags, newTag));
    }

    return (
        <div>
            <ReactTags
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition}
                allowNew
                placeholder="What do you have laying around?"
                minQueryLength={1}
            />
        </div>
    );
};

export default SearchWithTags;
