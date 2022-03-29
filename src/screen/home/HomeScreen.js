import React from 'react';
import AnimalCart from '../../component/animal/AnimalCart';
// React Component
const HomeScreen = () => {

    const MyComponent1 = () => <h1>My Component</h1>;
    const MyComponent2 = () => (
        <div>
            <div>Test</div>
            <div>Test</div>
        </div>
    );

    const MyComponent3 = () => {
        var x = 10;
        // for()
        // while()
        // if(){

        // }else{

        // }
        return (
            <div>
                <div>MyComponent3</div>
                <div>MyComponent3</div>
            </div>
        )
    }

 


    return (
        <div>
            {/* calling component */}
            <MyComponent1 />
            <MyComponent2 />
            <MyComponent3 />

            <AnimalCart
                name = "Cat"
                description="Description cat"
            />

            <AnimalCart
                name = "Pig"
                description="Description cat"
            />

            {/* <img 
                src=""
                width={}
            /> */}
        </div>
    )
}

export  default HomeScreen;