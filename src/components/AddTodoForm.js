import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice";
function AddTodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
        title:value,
    }))
  };
  return (
    <form className="form-inline mt-3 mb-3" onSubmit={onSubmit}>
      <input
        className="form-control mb-2 mr-sm-2"
        type="text"
        placeholder="Add todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary mb-1 ml-2">
        Submit
      </button>
    </form>
  );
}
export default AddTodoForm;
