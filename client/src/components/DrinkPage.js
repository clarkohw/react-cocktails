import React, { Component } from "react";
import './drink-page.css';
const axios = require("axios");

class DrinkPage extends Component {

    constructor() {
        super();
        this.state = {
            drinks: { strDrink: "loading", strInstructions: "loading instructions", strDrinkThumb: "https://image.flaticon.com/icons/png/512/39/39557.png" }
        };
    }

    componentDidMount() {
        if (this.props.match.params.id !== "no results found") {
            axios.get("/drink/" + this.props.match.params.id).then(drinkList => {
                this.setState({ drinks: drinkList.data.drinks[0] })

            });
        }


    }

    render() {
        return (
            <div className="drink">
                <h1>{this.state.drinks.strDrink}</h1>
                <p className="instructions">{this.state.drinks.strInstructions}</p>
                <a href="/">
                    <img src={this.state.drinks.strDrinkThumb} alt="" className="big-drink-pic" />
                </a>
            </div >
        )
    }

}

export default DrinkPage;