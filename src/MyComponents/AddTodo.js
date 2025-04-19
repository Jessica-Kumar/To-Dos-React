import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); // Prevents the default behavior of form submission
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle(""); // Clear the title input field
            setDesc(""); // Clear the description input field
        }
    }

    return (
        <div className="container my-3">
            <h3
                className="text-center"
                style={{
                    fontWeight: "bold",
                    color: "darkblue",
                    fontFamily: "Times New Roman, Times, serif",
                }}
            >
                Add a Todo
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label
                        htmlFor="todoTitle"
                        className="form-label"
                        style={{
                            fontWeight: "bold",
                            color: "beige",
                            fontFamily: "Times New Roman, Times, serif",
                        }}
                    >
                        To-do Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        className="form-control"
                        id="todoTitle"
                        placeholder="Enter your to-do title"
                        style={{
                            fontWeight: "bold",
                            color: "darkblue",
                            fontFamily: "Times New Roman, Times, serif",
                            backgroundColor: "rgba(255, 255, 255, 0.5)", // Translucent background
                            border: "1px solid darkblue", // Optional: Add a border for better visibility
                            borderRadius: "5px", // Optional: Rounded corners
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="todoDesc"
                        className="form-label"
                        style={{
                            fontWeight: "bold",
                            color: "beige",
                            fontFamily: "Times New Roman, Times, serif",
                        }}
                    >
                        To-do Description
                    </label>
                    <textarea
                        className="form-control"
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}
                        id="todoDesc"
                        rows="3"
                        placeholder="Enter your to-do description"
                        style={{
                            fontWeight: "bold",
                            color: "darkblue",
                            fontFamily: "Times New Roman, Times, serif",
                            backgroundColor: "rgba(255, 255, 255, 0.5)", // Translucent background
                            border: "1px solid darkblue", // Optional: Add a border for better visibility
                            borderRadius: "5px", // Optional: Rounded corners
                        }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-sm btn-success"
                    style={{
                        fontWeight: "bold",
                        fontFamily: "Times New Roman, Times, serif",
                    }}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};
