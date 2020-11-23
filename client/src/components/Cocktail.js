import React from "react";

const Cocktail = ({ name, img }) => {
    return (
        <div className="drink-box">
            <img src={img} alt="" className="cocktail-img" />
            <a href={"/drink/" + name}>
                <h1 className="drink-name">{name}</h1>

            </a >
        </div>

    );
}


export default Cocktail;