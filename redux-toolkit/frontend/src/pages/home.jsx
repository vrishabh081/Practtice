import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import UpdateModal from '../components/updateModal';
import { deleteTodo, getTodoList } from '../utils/asyncFun';

const Home = () => {
    const dispatch = useDispatch();
    const {isLoading, todos} = useSelector(store => store.todoReducer);

    let debounce;

    const handleSearch = (e) => {
        const query = e.target.value;
        clearTimeout(debounce)
        debounce = setTimeout(() => {
            dispatch(getTodoList({method: "GET", url: `todos?q=${query}`, data: ""}))
        }, 300)
    }

    useEffect(() => {
        return () => {
            clearTimeout(debounce)
        }
    }, [debounce])

    useEffect(() => {
        dispatch(getTodoList({ method: "GET", url: "todos", data: "" }));
    }, [dispatch]);


    const handleDelete = (id) => {
        dispatch(deleteTodo({method: "DELETE", url: `todos/${id}`, data: ""}))
        .then(() => {
            dispatch(getTodoList({method: "GET", url: "todos", data: ""}))
        })
    }

    return (
        <div>
            <Navbar/>
            <div style={{border:"1px solid", width:"400px", margin:'2rem auto'}}>
                <div style={{display:"flex", justifyContent:"space-around", margin:"1rem"}}>
                    <h4 style={{textAlign:'center'}}>Todo List</h4>
                    <input type="text" placeholder='Search...' style={{padding:"0 0.2rem"}} onChange={handleSearch}  />
                </div>
                {
                    todos?.map((el) => <div key={el.id} style={{display:"flex", justifyContent:'space-between', alignItems:"baseline", border:"1px solid", margin:"0.5rem", padding:"0.2rem"}}>
                        <p>{el.task}</p>
                        <p>{el.status ? "True" : "False"}</p>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <span><UpdateModal todo={el} /></span>
                            <button onClick={() => handleDelete(el.id)}>Delete</button>
                        </div>
                    </div>)
                }
                {
                    isLoading && <div><h2 style={{textAlign: "center"}}>Wait...</h2></div>
                }
            </div>
        </div>
    )
}

export default Home
