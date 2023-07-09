import React, { useEffect } from 'react'
import { useState } from 'react';


// delete all-
const delteAllFuntion = async () => {
    try{
        const fetchData = await fetch("http://localhost:8000/api/v1/product", {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"}
        })
        const data = await fetchData.json();
        console.log("data =>", data)
    }
    catch(err){
        console.log(err.message);
    }
}

// Main function-
const Form = () => {
    // use state-
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "1"
    });

    // destructure-
    const {name, price} = form;

    // handle change-
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    // get-
    const getFuntion = async () => {
        try{
            setLoader(true);
            const fetchData = await fetch("http://localhost:8000/api/v1/product")
            const x = await fetchData.json();
            setLoader(false);
            setData(x?.message);
            console.log(x);
        }
        catch(err){
            setLoader(false);
            console.log(err.message);
        }
    }

    
    // handle submit-
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoader(true);
            const fetchData = await fetch("http://localhost:8000/api/v1/product", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {"Content-Type": "application/json"}
            })
            const jsonData = await fetchData.json();
            setLoader(false);
            setData([...data, jsonData?.data]);
        }
        catch(err){
            setLoader(false);
            console.log(err.message);
        }
    }

    const deleteSingleProduct = async (e, _id) => {
        try{
            setLoader(true);
            const fetchData = await fetch(`http://localhost:8000/api/v1/product/${_id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
            })
            const jsonData = await fetchData.json();
            console.log(jsonData);
            const newData = data?.filter((el) => el._id !== _id);
            setData(newData);
            setLoader(false);
        }
        catch(err){
            setLoader(false);
            console.log(err.message);
        }
    }

    const updateSingleProduct = async (e, _id) => {
        try{
            setLoader(true);
            const fetchData = await fetch(`http://localhost:8000/api/v1/product/${_id}`, {
                method: "PATCH",
                body: JSON.stringify(form),
                headers: {"Content-Type": "application/json"}
            })
            const jsonData = await fetchData.json();
            console.log(jsonData);
            const newData = data?.filter((el) => el._id !== _id);
            setData(newData);
            setLoader(false);
        }
        catch(err){
            setLoader(false);
            console.log(err.message);
        }
    }

    const showUpdateFun = (index) => {
        console.log(index);
        setData((prevData) => {
          const newData = [...prevData];
          newData[index].showCheckmark = !newData[index].showCheckmark;
          return newData;
        });
    };
      
    const handleInputChange = (e, index, fieldName) => {
        console.log(fieldName)
        const { value } = e.target;
        setData((prevData) => {
          const newData = [...prevData];
          newData[index][fieldName] = value;
          return newData;
        });
    };
      

    // useEffect-
    useEffect(() => {
        getFuntion();
    }, [])

    return (
        <div>
            <button onClick={delteAllFuntion}>Delete All</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={handleChange} value={name} placeholder='Type Your Name' />
                <input type="text" name='price' onChange={handleChange} value={price} placeholder='Type Price' />
                <select name='category' onChange={handleChange}>
                    <option value="1">Fruits</option>
                    <option value="2">Vegetables</option>
                    <option value="3">Daal</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {!loader ? (
                        data?.map((el, index) => (
                        <tr key={index}>
                            <td style={{ color: "orange" }}>{index}</td>
                            <td style={{ color: "black" }}>
                            {el.showCheckmark ? (
                                <input
                                    type="text"
                                    value={el.name}
                                    onChange={(e) => handleInputChange(e, index, "name")}
                                />
                            ) : (
                                el.name
                            )}
                            </td>
                            <td style={{ color: "blue" }}>
                            {el.showCheckmark ? (
                                <input
                                    type="text"
                                    value={el.price}
                                    onChange={(e) => handleInputChange(e, index, "price")}
                                />
                            ) : (
                                el.price
                            )}
                            </td>
                            <td style={{ color: "brown" }}>
                            {el.showCheckmark ? (
                                <input
                                    type="text"
                                    value={el.category}
                                    onChange={(e) => handleInputChange(e, index, "category")}
                                />
                            ) : (
                                el.category
                            )}
                            </td>
                            <td style={{ color: "green", cursor: "pointer" }}>
                            <ion-icon
                                name={el.showCheckmark ? "checkmark-outline" : "create-outline"}
                                onClick={() => showUpdateFun(index)}
                            ></ion-icon>
                            </td>
                            <td style={{ color: "red", cursor: "pointer" }}>
                            <ion-icon
                                name="trash-outline"
                                onClick={(e) => deleteSingleProduct(e, el._id)}
                            ></ion-icon>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr><td>Wait...</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Form
