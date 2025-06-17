export interface MockTask {
  id: string;
  title: string;
  description: string;
  location: string;
  priority: "urgent" | "normal" | "low";
  status: "pending" | "in_progress" | "completed";
  category: "maintenance" | "security" | "cleaning";
  deadline: string;
  icon: string;
}

export const mockTasks: MockTask[] = [
  {
    id: "4521",
    title: "Manutenção Equipamento #4521",
    description: "Verificar funcionamento do sistema de climatização na sala 201",
    location: "Shopping Center Norte",
    priority: "urgent",
    status: "pending",
    category: "maintenance",
    deadline: "Hoje até 18:00",
    icon: "wrench"
  },
  {
    id: "4522",
    title: "Inspeção de Segurança",
    description: "Verificação mensal dos extintores de incêndio",
    location: "Edifício Corporativo",
    priority: "normal",
    status: "pending",
    category: "security",
    deadline: "Até 20:00",
    icon: "shield-alt"
  },
  {
    id: "4523",
    title: "Limpeza de Filtros",
    description: "Manutenção preventiva dos filtros do sistema de ar",
    location: "Centro Comercial",
    priority: "low",
    status: "pending",
    category: "cleaning",
    deadline: "Amanhã 16:00",
    icon: "broom"
  }
];

export const getTaskById = (id: string): MockTask | undefined => {
  return mockTasks.find(task => task.id === id);
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "urgent": return "bg-red-500";
    case "normal": return "bg-blue-500";
    case "low": return "bg-green-500";
    default: return "bg-gray-500";
  }
};

export const getPriorityLabel = (priority: string): string => {
  switch (priority) {
    case "urgent": return "Urgente";
    case "normal": return "Normal";
    case "low": return "Baixa";
    default: return "Normal";
  }
};
