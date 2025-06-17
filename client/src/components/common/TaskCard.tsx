import { Link } from "wouter";
import { FaMapMarkerAlt, FaClock, FaChevronRight } from "react-icons/fa";
import { FaWrench, FaShieldAlt, FaBroom } from "react-icons/fa6";
import { MockTask, getPriorityColor, getPriorityLabel } from "@/data/mockTasks";

interface TaskCardProps {
  task: MockTask;
}

export default function TaskCard({ task }: TaskCardProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case "maintenance": return FaWrench;
      case "security": return FaShieldAlt;
      case "cleaning": return FaBroom;
      default: return FaWrench;
    }
  };

  const Icon = getIcon(task.category);

  return (
    <Link href={`/workflow/checkin/${task.id}`}>
      <div className="task-card bg-card rounded-2xl p-6 shadow-sm border border-border">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs text-white px-3 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
            {getPriorityLabel(task.priority)}
          </span>
          <span className="text-xs text-muted-foreground">#{task.id}</span>
        </div>
        
        <h3 className="font-semibold text-foreground mb-2">{task.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span>{task.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock />
            <span>{task.deadline}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <Icon className="text-muted-foreground text-xs" />
            </div>
            <span className="text-sm text-muted-foreground capitalize">{task.category}</span>
          </div>
          <FaChevronRight className="text-muted-foreground" />
        </div>
      </div>
    </Link>
  );
}
