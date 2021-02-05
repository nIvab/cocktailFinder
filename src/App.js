import React, { useEffect, useState } from "react";

import LoadingScreen from "./Components/LoadingScreen";
import SearchWithTags from "./Components/SearchWithTags";
import CardList from "./Components/Card/CardList";
import apiSearchCall, {
    apiInitialCall,
    apiIndividualCall,
} from "./utilities/apiSearchCall";
import aggregateID from "./utilities/aggregateSearch";
import NoDrinks from "./Components/NoDrinks";

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
    const [searchResults, setSearchResults] = useState({});
    const [noDrinks, setNoDrinks] = useState(false);
    // tags state is lifted up as both SearchWithTags and apiCallSearch need it

    function onTagChange(newTag) {
        setLoading(true);
        setTags(newTag); // so that SearchWithTags can change tags
    }

    useEffect(() => {
        // for ingredient suggestions in SearchWithTags
        apiInitialCall().then((data) => {
            setIngredients(data[0]);
            setSearchResults(data[1]);
            setInitialLoad(false);
        });
    }, []);

    //--------------------------------------------------------------------------
    // for the search
    useEffect(() => {
        apiSearchCall(tags).then((data) => {
            if (data.drinks === "None Found") {
                setNoDrinks(true);
            } else {
                let idArr = aggregateID(data);
                let drinksPromise = idArr.map((element) => {
                    return apiIndividualCall(element).then((searchData) => {
                        return searchData.drinks[0];
                    });
                });
                Promise.all(drinksPromise).then((drinks) => {
                    setNoDrinks(false);
                    setLoading(false);
                    setSearchResults({ drinks });
                });
            }
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
                {noDrinks === true ? (
                    <NoDrinks />
                ) : isLoading ? (
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
