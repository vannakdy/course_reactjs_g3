import React from 'react';
const image_url = require("../../assets/image/animal/cat.jpg")
const AnimalCart = (props) => {
    // props = {
    //     name : ?,
    //     des : ?,
    // }
    const {
        name,
        description,
        view,
        data,
        image_url
    } = props;

    // const name = props.name;
    // const description = props.description;
    // const view = props.view;

    return (
        <div
            style={{
                backgroundColor:"red",
                margin:20,
                padding:20,
                borderRadius:50
            }}
        >
            <h1>{name}</h1>
            <p>{description+""}</p>
            <div>{view}</div>
            {
                data && data.map((item,index)=>{
                    return(
                        <h4>{item}</h4>
                    ) 
                })
            }
            <img
                src={image_url}
            />
        </div>
    )
}
export default AnimalCart;