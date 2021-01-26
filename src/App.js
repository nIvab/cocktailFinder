import React, { useEffect, useState } from "react";

import LoadingScreen from "./Components/LoadingScreen";
import SearchWithTags from "./Components/SearchWithTags";
function App() {
    let initial = [];
    const [isLoading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState(initial);
    // grab list of drinks from api

    async function getIngredientList() {
        let response = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
            {
                mode: "cors",
            }
        );
        let data = await response.json();
        console.log(data);
        return data;
    }

    useEffect(() => {
        getIngredientList().then((data) => {
            setIngredients(data);
            setLoading(false);
        });
    }, [setIngredients, setLoading]);

    if (isLoading === true) {
        return (
            <div>
                <LoadingScreen />
            </div>
        );
    } else {
        return (
            <div>
                <SearchWithTags ingredients={ingredients} />
            </div>
        );
    }
}

export default App;
