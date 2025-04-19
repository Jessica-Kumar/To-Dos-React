import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  let textStyle = {
    fontWeight: "bold",
    color: "yellow",
    fontFamily: "Times New Roman, Times, serif",
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center" style={textStyle}>
        To-Do's
      </h3>

      {props.todos.length === 0 ? (
        <p style={textStyle}>No todos to display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem
                todo={todo}
                key={todo.sno}
                onDelete={props.onDelete}
                style={textStyle}
              />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
};
