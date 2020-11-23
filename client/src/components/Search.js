import React, { useState, useEffect } from "react";
import Cocktail from './Cocktail';
import './search.css';
const axios = require("axios");

function Search() {
    const [drinks, setDrinks] = useState([])
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("gin");


    useEffect(() => {
        axios.get("/" + query).then((drinkList) => {
            setDrinks(drinkList.data.drinks);
        });
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    const showCocktails = () => {
        if (drinks != null) {
            return (drinks.map(drink => (<Cocktail name={drink.strDrink} img={drink.strDrinkThumb} key={drink.idDrink} />)));
        } else {
            return ((<Cocktail name="no results found" img="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-yellow-background-hand-drawn-cartoon-desert-print-ad-image_148796.jpg" />));
        }
    }

    return (
        <div className="Search">
            <form onSubmit={getSearch} className="search-form" type="post" action="">
                <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="enter ingredient" />
                <input type="submit" id="no-button" />
            </form>
            <div className="container">
                {showCocktails()}
            </div>
        </div>
    );
}

export default Search;
