import React, { useState } from "react";

interface Props {
  data: string[];
  setEditedTask: (index: number, editedTask: string) => void;
}

const KPIs: React.FC<Props> = ({ data, setEditedTask }) => {
  const [isCheck, setIsCheck] = useState<boolean[]>(
    Array(data.length).fill(false)
  );
  const [editTask, setEditTask] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  // const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCheck = (index: number) => {
    setIsCheck((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });

    setEditIndex(null);
  };

  const handleDoubleClick = (index: number) => {
    setEditIndex(index);
    setEditTask(data[index]);
  };

  const isEditing = editIndex !== null;

  return (
    <div
      className={`${
        data.length > 5
          ? "h-[200px] overflow-y-auto scroll-m-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 pr-2"
          : ""
      }`}
    >
      {data.map((task, index) => (
        <div className="flex gap-2 items-center mb-4" key={index}>
          <input
            type="checkbox"
            className="mt-1"
            onChange={() => handleCheck(index)}
          />
          {isCheck[index] ? (
            <del className=" ">
              <i>{task}</i>
            </del>
          ) : isEditing && editIndex === index ? (
            <div className="flex justify-between w-full">
              <input
                value={editTask}
                className="font-semibold w-full"
                onChange={(e) => setEditTask(e.target.value)}
                // onBlur={() => setEditedTask(index, editTask)}
              />
              <button
                onClick={() => {
                  setEditedTask(index, editTask);
                  setEditIndex(null);
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <h1
              className="font-semibold cursor-pointer "
              onDoubleClick={() => handleDoubleClick(index)}
            >
              {task}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default KPIs;
