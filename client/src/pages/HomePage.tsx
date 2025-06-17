import { Link } from "wouter";
import { authService } from "@/lib/auth";
import SyncStatusBar from "@/components/layout/SyncStatusBar";
import { FaQrcode, FaWrench, FaCheck, FaClock } from "react-icons/fa6";

export default function HomePage() {
  const user = authService.getCurrentUser();

  return (
    <div className="h-full flex flex-col bg-muted/30">
      <SyncStatusBar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-primary mb-2">
            Olá, {user?.name?.split(' ')[0] || 'Carlos'}! 👋
          </h1>
          <p className="text-muted-foreground">Você tem 5 tarefas de retail pendentes hoje</p>
        </div>
        
        {/* Next Task Card */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-primary">Próxima Tarefa</h3>
            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">Urgente</span>
          </div>
          
          <Link href="/workflow/checkin/4521">
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <FaWrench className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">Reposição de Estoque - Setor Eletrônicos</h4>
                <p className="text-sm text-muted-foreground mt-1">Loja Shopping Morumbi - Setor A3</p>
                <p className="text-xs text-muted-foreground mt-1">Prazo: Hoje até 18:00</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-card rounded-xl p-4 text-center border border-border">
            <div className="text-2xl font-bold text-green-600">18</div>
            <div className="text-sm text-muted-foreground">Concluídas</div>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border border-border">
            <div className="text-2xl font-bold text-accent">5</div>
            <div className="text-sm text-muted-foreground">Pendentes</div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="font-semibold text-primary mb-4">Atividade Recente</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaCheck className="text-white text-xs" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Auditoria de preços concluída</p>
                <p className="text-xs text-muted-foreground">Há 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <FaClock className="text-white text-xs" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Nova reposição de estoque atribuída</p>
                <p className="text-xs text-muted-foreground">Há 4 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <Link href="/workflow/checkin">
        <div className="fab">
          <FaQrcode className="text-white text-xl" />
        </div>
      </Link>
    </div>
  );
}
