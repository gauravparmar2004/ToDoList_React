"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, Desc }]);
    settitle(" ");
    setDesc(" ");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  let renderTask = <h2>No Task is Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex justify-between w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-semibold">{t.Desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-5 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-3xl p-4 text-center font-bold">
        Gaurav's ToDoList
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-black border-2 border-black rounded m-5 p-1"
          placeholder="Enter your Task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>

        <input
          type="text"
          className="text-black border-2 border-black rounded m-5 p-1"
          placeholder="Enter Description here"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></input>
        <button className="bg-black py-2 px-3 font-bold rounded text-white mx-3">
          Add Task
        </button>
      </form>
      <hr></hr>
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
