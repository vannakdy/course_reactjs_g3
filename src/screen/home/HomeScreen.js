

import React,{useState} from "react";

const HomeScreen = () => {
    // var number  = 0;
    // ទម្រង់ React Hook

    // var number = 0;
    var listProductTmp = [
        {id:1,name:"Coca",unit_price:2,qty:1},
        {id:2,name:"Coca",unit_price:2,qty:1},
        {id:3,name:"Coca",unit_price:2,qty:1},
        {id:4,name:"Coca",unit_price:2,qty:1},
        {id:5,name:"Coca",unit_price:2,qty:1},
        {id:6,name:"Coca",unit_price:2,qty:1},
    ]
    const [number,setNumber] = useState(0);
    const [name,setName] = useState(""); 
    const [listProduct,setListProduct] = useState(listProductTmp);

    const handleIncrease = () => {
        // alert(90)
        // number = number  + 1; // not render in view again
        setNumber(number+1);
        setName("Dara");
    }

    const handleDeCrease = () => {
        // alert(80)
        // number = number  - 1; // not render in view again
        setNumber(number-1);
    }

    const handleDeleteProduct = (paramItem) => {
        // console.log(item);
        var data = listProduct.filter((item,index)=>item.id !== paramItem.id)
        setListProduct([...data]);
    }

    return (
        <div style={{padding:20}}>
            <h1>HomeScreen</h1>
            <h1>{number}</h1>
            <h1>name: {name}</h1>
            <h1 onClick={handleIncrease}>+</h1>
            <h1 onClick={handleDeCrease}>-</h1>
            <h1>listProduct</h1>
            {
                listProduct.map((item,index)=>{
                    return(
                        <div style={{padding:20}}>
                            <div>{item.id}</div>
                            <div>{item.name}</div>
                            <div>{item.unit_price}</div>
                            <div>{item.qty}</div>
                        </div>
                    )
                })
            }

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listProduct.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.unit_price}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        {/* <button onClick={()=>alert(item.id)}>Delete</button> */}
                                        <button onClick={()=>handleDeleteProduct(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default HomeScreen;