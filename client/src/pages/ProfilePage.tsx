import { authService } from "@/lib/auth";
import { useLocation } from "wouter";
import { FaUser, FaChartLine, FaCog, FaSignOutAlt, FaChevronRight } from "react-icons/fa6";

export default function ProfilePage() {
  const [, setLocation] = useLocation();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    setLocation("/");
  };

  const menuItems = [
    {
      title: "Dados Pessoais",
      description: "Editar informações do perfil",
      icon: FaUser,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      onClick: () => console.log("Navigate to personal data"),
    },
    {
      title: "Relatórios",
      description: "Visualizar performance",
      icon: FaChartLine,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      onClick: () => console.log("Navigate to reports"),
    },
    {
      title: "Configurações",
      description: "Notificações e preferências",
      icon: FaCog,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      onClick: () => console.log("Navigate to settings"),
    },
    {
      title: "Sair",
      description: "Fazer logout da conta",
      icon: FaSignOutAlt,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      onClick: handleLogout,
      isDestructive: true,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-muted/30">
      <div className="bg-card p-6 border-b border-border">
        <h1 className="text-xl font-semibold text-primary">Perfil</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {/* Profile Header */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">
              {user?.name?.split(' ').map(n => n[0]).join('') || 'CA'}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-foreground">{user?.name || 'Carlos Antônio'}</h2>
          <p className="text-muted-foreground">Técnico de Manutenção</p>
          <p className="text-sm text-muted-foreground mt-1">ID: EXE-2024-001</p>
          
          <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">15</div>
              <div className="text-xs text-muted-foreground">Tarefas Concluídas</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-500">98%</div>
              <div className="text-xs text-muted-foreground">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-accent">4.9</div>
              <div className="text-xs text-muted-foreground">Avaliação</div>
            </div>
          </div>
        </div>
        
        {/* Menu Options */}
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === menuItems.length - 1;
            
            return (
              <button
                key={item.title}
                onClick={item.onClick}
                className={`w-full p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors ${
                  !isLast ? "border-b border-border" : ""
                }`}
              >
                <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center`}>
                  <Icon className={item.iconColor} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-medium ${item.isDestructive ? "text-red-600" : "text-foreground"}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <FaChevronRight className="text-muted-foreground" />
              </button>
            );
          })}
        </div>
        
        {/* App Info */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">Executor App v2.1.0</p>
          <p className="text-xs mt-1">© 2024 Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}
