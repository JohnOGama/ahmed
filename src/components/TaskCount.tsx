import React, { useEffect } from "react";

interface Props {
  color: string;
  taskCount: string[];
}

const TaskCount: React.FC<Props> = ({ color, taskCount }) => {
  return (
    <div
      className={`gap-3 bg-${color}/20 inline-flex px-2 py-[1px] rounded-full text-${color}`}
    >
      ★
      <span>
        {taskCount.length} KPIs {color}
      </span>
    </div>
  );
};

export default TaskCount;
