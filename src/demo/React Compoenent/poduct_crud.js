import React, {useState} from  'react';
import AnimalCart from '../../component/animal/AnimalCart';

const HomeScreen = () => {
    const [code,setCode] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);
    const [arrProduct,setArrProduct] = useState([]);

    const handleAdd = () => {
        var dataTmp = {
            "code" : code,
            "name" : name,
            "price" : price,
            "qty" : qty,
        }
        arrProduct.push(dataTmp);
        setArrProduct([...arrProduct]);
        handleClear();
    }
    const handleDelete = (paramIndex) => {
        var arrNew = arrProduct.filter((item,index)=>index !== paramIndex)
        setArrProduct([...arrNew]);
    }
    const handleClear = () => {
        setCode("");
        setName("");
        setPrice(0);
        setQty(0);
    }
    return (
        <div style={{padding:20}}>
            <input 
                value={code}
                placeholder='code'
                onChange={(e)=>setCode(e.target.value)}
            /><br/>
            <input 
                value={name}
                placeholder='product name'
                onChange={(e)=>setName(e.target.value)}
            /><br/>
            <input 
                value={price}
                placeholder='price'
                onChange={(e)=>setPrice(e.target.value)}
            /><br/>
            <input 
                value={qty}
                placeholder='Quatity'
                onChange={(e)=>setQty(e.target.value)}
            /><br/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleClear}>Clear</button>
            <h1>List Product </h1>
            {
                arrProduct.map((item,index)=>{
                    return(
                        // <AnimalCart
                        //     key={index}
                        //     /...
                        // />
                        <div 
                            key={index}
                            style={{
                                padding:10,
                                margin:10
                            }}
                        > 
                            <div>{item.code}</div>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div>{item.qty}</div>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export  default HomeScreen;