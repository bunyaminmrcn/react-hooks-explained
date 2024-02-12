import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer1(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function App1() {
  const [state, dispatch] = useReducer(reducer1, { count: 0 });
  const [count, setCount] = useState(0);
  function decrementCount() {
    //setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function incrementCount() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}

const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toogle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case TODO_ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

function App2() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
export default App2;
