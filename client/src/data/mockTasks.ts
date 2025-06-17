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
    title: "Reposição de Estoque - Setor Eletrônicos",
    description: "Verificar níveis de estoque e repor produtos em falta nas prateleiras",
    location: "Loja Shopping Morumbi - Setor A3",
    priority: "urgent",
    status: "pending",
    category: "maintenance",
    deadline: "Hoje até 18:00",
    icon: "wrench"
  },
  {
    id: "4522",
    title: "Auditoria de Preços",
    description: "Verificar conformidade de preços nas gôndolas com sistema",
    location: "Loja Centro - Todos os setores",
    priority: "normal",
    status: "pending",
    category: "security",
    deadline: "Até 20:00",
    icon: "shield-alt"
  },
  {
    id: "4523",
    title: "Organização do PDV",
    description: "Limpeza e organização da área de checkout e caixas",
    location: "Loja Vila Madalena - Frente de caixa",
    priority: "low",
    status: "pending",
    category: "cleaning",
    deadline: "Amanhã 16:00",
    icon: "broom"
  },
  {
    id: "4524",
    title: "Conferência de Produtos Promocionais",
    description: "Verificar se produtos em promoção estão com preços corretos",
    location: "Loja Paulista - Setor Promoções",
    priority: "normal",
    status: "pending",
    category: "security",
    deadline: "Hoje 19:00",
    icon: "shield-alt"
  },
  {
    id: "4525",
    title: "Montagem de Display Sazonal",
    description: "Montar expositor para produtos de inverno na entrada",
    location: "Loja Jardins - Entrada principal",
    priority: "low",
    status: "pending",
    category: "maintenance",
    deadline: "Amanhã 14:00",
    icon: "wrench"
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

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case "maintenance": return "Operações";
    case "security": return "Auditoria";
    case "cleaning": return "Limpeza";
    default: return "Operações";
  }
};
