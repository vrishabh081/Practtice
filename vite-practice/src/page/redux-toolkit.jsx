import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux-toolkit/reducer";

const ReduxToolkit = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((store) => store.reducer.todos);
  console.log("data----------------------->", data);

  const handleSubmit = () => {
    console.log(text);
    dispatch(addTodo(text));
  };

  const deleteTodoFun = (id) => {
    console.log(id)
    dispatch(deleteTodo(id))
  }

  const updateTodoText = (id, newText) => {
    dispatch(updateTodo({ id, text: newText }));
};


  return (
    <div>
      <h1>Redux Toolkit</h1>
      <div style={{ margin: "2rem" }}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          style={{ border: "1px solid" }}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>

      <div>
        {data?.map((el) => (
          <div key={el.id}>
            {/* <p>{el.key}</p> */}
            <input type="text" value={el.key}  onChange={(e) => updateTodoText(el.id, e.target.value)} style={{display: "block", textAlign:'center', margin:"auto"}} />
            <button onClick={() => deleteTodoFun(el.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxToolkit;
