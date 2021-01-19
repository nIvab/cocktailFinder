import React, { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import SearchBar from "./Components/Search";

function App() {
    let initial = [];
    const [isLoading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState(initial);
    // grab list of drinks from api

    async function getItemList() {
        return new Promise((resolve, reject) => {
            fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
                {
                    mode: "cors",
                }
            )
                .then((response) => {
                    return response.json();
                })
                .then((jObj) => {
                    let data = jObj;
                    setIngredients(data);
                    resolve(data);
                });
        });
    }
    getItemList();

    if (isLoading === true) {
        return (
            <div>
                <LoadingScreen />
            </div>
        );
    } else {
        return (
            <div>
                <SearchBar ingredients={ingredients} />
            </div>
        );
    }
}

export default App;
