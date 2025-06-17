import { useState } from "react";
import TaskCard from "@/components/common/TaskCard";
import { mockTasks } from "@/data/mockTasks";

export default function TasksPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterButtons = [
    { key: "all", label: "Todas (3)", count: 3 },
    { key: "urgent", label: "Urgentes (1)", count: 1 },
    { key: "today", label: "Hoje (2)", count: 2 },
  ];

  const filteredTasks = mockTasks.filter(task => {
    switch (activeFilter) {
      case "urgent":
        return task.priority === "urgent";
      case "today":
        return task.deadline.includes("Hoje");
      default:
        return true;
    }
  });

  return (
    <div className="h-full flex flex-col bg-muted/30">
      <div className="bg-card p-6 border-b border-border">
        <h1 className="text-xl font-semibold text-primary">Suas Tarefas</h1>
        <p className="text-muted-foreground text-sm mt-1">5 tarefas de retail pendentes</p>
      </div>
      
      {/* Filter Tabs */}
      <div className="bg-card border-b border-border px-6">
        <div className="flex gap-6 pt-2">
          {filterButtons.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`pb-3 border-b-2 font-medium text-sm transition-colors ${
                activeFilter === filter.key
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        
        {filteredTasks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhuma tarefa encontrada para este filtro.</p>
          </div>
        )}
      </div>
    </div>
  );
}
