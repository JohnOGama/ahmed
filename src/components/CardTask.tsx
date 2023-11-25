import React, { useRef, useState, useEffect } from "react";
import ProfileIcon from "./ProfileIcon";
import { Service } from "../utils/types";
import KPis from "./KPIs";
import TaskCount from "./TaskCount";

export default function CardTask({
  image,
  role,
  KPIs,
  color,
  addService,
  index,
  setEditedTask,
}: Service) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (index: number, newKPI: string) => {
    addService(index, newKPI);
    console.log("submit");

    setIsAdding(!isAdding);
    setTask("");
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (!inputRef.current?.contains(e.target)) {
        setIsAdding(false);
        console.log(inputRef.current);
      }
    };

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  return (
    <div>
      <div className="flex items-center gap-3 ">
        <ProfileIcon data={image} />
        <h1 className=" font-semibold">{role}</h1>
      </div>

      <div className={`my-3 text-[${color}] bg-[${color}]`}>
        <TaskCount color={color} taskCount={KPIs} />
      </div>
      <div className={`border-t border-dashed border-[#1181E6] my-4`}></div>

      <KPis data={KPIs} setEditedTask={setEditedTask} />
      <div className="inline-flex flex-col items-start">
        {isAdding && (
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => setTask(e.target.value)}
            className="border-2 border-black px-2"
          />
        )}
        {isAdding ? (
          <button
            className={`text-[${color}] text-sm font-bold mt-2 `}
            onClick={() => handleSubmit(index, task)}
          >
            Add new
          </button>
        ) : (
          <button
            className={`text-[${color}] text-sm font-bold mt-2 `}
            onClick={() => setIsAdding(!isAdding)}
          >
            Add new
          </button>
        )}
      </div>
    </div>
  );
}
