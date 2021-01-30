import React, { useEffect, useState } from "react";

import LoadingScreen from "./Components/LoadingScreen";
import SearchWithTags from "./Components/SearchWithTags";
import CardList from "./Components/Card/CardList";
import apiSearchCall, { apiInitialCall } from "./utilities/apiSearchCall";

function App() {
    let initial = [];
    const [initalLoad, setInitialLoad] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState(initial);
    const [tags, setTags] = useState([
        {
            id: 0,
            name: "Light rum",
        },
    ]);
    // define new tags state so API  isnt called immediately
    const [searchResults, setSearchResults] = useState(initial);

    // tags state is lifted up as both SearchWithTags and apiCallSearch need it

    function onTagChange(newTag) {
        setTags(newTag); // so that SearchWithTags can change tags
    }

    useEffect(() => {
        console.log("USEEFFECT RUNNING");
        // for ingredient suggestions in SearchWithTags
        apiInitialCall().then((data) => {
            console.log(data);
            setIngredients(data[0]);
            setSearchResults(data[1]);
            setInitialLoad(false);
        });
    }, []);

    //--------------------------------------------------------------------------
    // for the search
    useEffect(() => {
        console.log("SECOND USEEFFECT RUNNING");
        apiSearchCall(tags).then((data) => {
            console.log("SEARCH RESULTS:    ", data);
            setSearchResults(data);
            setLoading(false);
        });
    }, [setSearchResults, setLoading, tags]);

    //--------------------------------------------------------------------------

    if (initalLoad === true) {
        return (
            <div>
                <LoadingScreen />
            </div>
        );
    } else {
        return (
            <div>
                <SearchWithTags
                    ingredients={ingredients}
                    Tags={tags}
                    handleTags={onTagChange}
                />
                {isLoading ? (
                    <LoadingScreen />
                ) : (
                    <CardList list={searchResults} />
                )}
            </div>
        );
    }
}

// card list goes in empty braces once API call sorted
export default App;
