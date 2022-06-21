

import React from "react";
import AnimalCart from "../../component/animal/AnimalCart";
const image_cat = require("../../assets/image/animal/cat.jpg")
const image_pig = require("../../assets/image/animal/pig.jpg")
const image_tiger = require("../../assets/image/animal/tiger.jpg")
const StudentScreen = () => {
    const arrAnimal = [
        {
            name:"Cat",
            decs:"Description cat",
            image_path : image_cat
        },
        {
            name:"Pin",
            decs:"Description Pig",
            image_path : image_pig
        },
        {
            name:"Tiger",
            decs:"Description Tiger",
            image_path : image_tiger
        }
    ]
    return (
        <div>
            <h1>StudentScreen</h1>
            {
                arrAnimal.map((item,index)=>{
                    return (
                        // <AnimalCart 
                        //     name="Dog"
                        //     description="Description don"
                        // />
                        // <AnimalCart 
                        //     name={item.name}
                        //     description={item.decs}
                        //     image_url = {item.image_path}
                        // />
                        <div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default StudentScreen;