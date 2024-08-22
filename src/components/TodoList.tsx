"use client";
import { State } from "@/type";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Use optional chaining to safely access `todoList`
  const todoList = useSelector((state: State) => state?.todo?.todoList || []);

  return (
    <div className="flex flex-col gap-4 mt-2 p-4 border border-gray-600 rounded-md">
      {todoList.length > 0 ? (
        <>
          {todoList.map((item) => (
            <TodoItem key={item._id} item={item} />
          ))}
        </>
      ) : (
        <p className="text-center text-base text-yellow-500 font-medium tracking-wide">
          Your todo list is empty
        </p>
      )}
    </div>
  );
};

export default TodoList;
