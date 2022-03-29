import React from 'react';
const image_url = require("../../assets/image/animal/cat.jpg")
const AnimalCart = (props) => {
    return (
        <div
            style={{
                backgroundColor:"red",
                margin:20,
                padding:20,
                borderRadius:50
            }}
        >
            <h1>{props.name}</h1>
            <p>{props.description+""}</p>
            <img
                src={props.image_url}
            />
        </div>
    )
}
export default AnimalCart;