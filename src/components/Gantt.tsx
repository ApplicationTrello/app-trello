"use client";

import React, { useState } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const initialTasks: Task[] = [
    {
        id: "1",
        name: "Planification",
        start: new Date(2024, 2, 10),
        end: new Date(2024, 2, 20),
        type: "task",
        progress: 50,
        isDisabled: false,
        styles: { progressColor: "#76c7c0", backgroundColor: "#8fd3c7" },
    },
];

const GanttChart: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    return (
        <div className="border p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Diagramme de Gantt</h2>
            <Gantt tasks={tasks} viewMode={ViewMode.Week} />
        </div>
    );
};

export default GanttChart;
