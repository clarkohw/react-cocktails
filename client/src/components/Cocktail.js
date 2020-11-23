import React from "react";

const Cocktail = ({ name, img }) => {
    var link = '/drink/' + name;
    if (name === 'no results found') {
        link = '/';
    }
    return (
        <div className="drink-box">
            <img src={img} alt="" className="cocktail-img" />
            <a href={link}>
                <h1 className="drink-name">{name}</h1>

            </a >
        </div>

    );
}


export default Cocktail;