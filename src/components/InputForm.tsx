"use client";
import React, { useState } from "react";
import Container from "./Container";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";
import TodoList from "./TodoList";

const InputForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(todo);
    if (todo === "") {
      toast.error("Please write your todo!");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));
      toast.success("Todo added successfully!");
      setTodo("");
    }
  };
  return (
    <Container className="bg-slate-400/50 ">
      <h2 className="text-2xl font-bold">Todo-List</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl flex items-center justify-center gap-x-3 mt-5 "
      >
        <div className="flex-1 relative  h-10 ">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter The task"
            className="w-full h-full pr-4 ml-2 p-4 py-4 outline-none border border-green-400"
          />
          {todo && (
            <IoCloseSharp
              onClick={() => setTodo("")}
              className="absolute top-3 right-2 text-lg hover:text-red-500 duration-200 cursor-pointer"
            />
          )}
        </div>
        <button
          className="bg-cyan-500 text-white text-sm font-semibold rounded-md w-24 h-10 shadow-lg hover:bg-rose-700"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
      <TodoList />
      <div>{todo}</div>
    </Container>
  );
};

export default InputForm;
