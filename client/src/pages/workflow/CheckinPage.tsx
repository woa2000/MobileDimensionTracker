import { useParams, useLocation } from "wouter";
import { FaArrowLeft, FaQrcode, FaKeyboard, FaClock } from "react-icons/fa6";
import { getTaskById } from "@/data/mockTasks";
import AppButton from "@/components/common/AppButton";

export default function CheckinPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const taskId = params.taskId;
  const task = taskId ? getTaskById(taskId) : null;

  const goBack = () => {
    window.history.back();
  };

  const handleScanSimulation = () => {
    setLocation(`/workflow/form/${taskId || ""}`);
  };

  return (
    <div className="h-full flex flex-col bg-muted/30">
      {/* Workflow Header */}
      <div className="workflow-header flex items-center p-4">
        <button 
          onClick={goBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
        >
          <FaArrowLeft className="text-muted-foreground" />
        </button>
        <h1 className="flex-1 text-center font-semibold text-primary">Check-in</h1>
        <div className="w-10"></div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        {/* Task Info */}
        {task ? (
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
            <h2 className="font-semibold text-foreground mb-2">{task.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{task.location}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaClock />
              <span>Prazo: {task.deadline}</span>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
            <h2 className="font-semibold text-foreground mb-2">Nova Tarefa</h2>
            <p className="text-sm text-muted-foreground">Escaneie o QR Code para começar</p>
          </div>
        )}
        
        {/* QR Scanner Area */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-64 h-64 border-4 border-dashed border-border rounded-2xl flex flex-col items-center justify-center bg-card mb-6">
            <FaQrcode className="text-6xl text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">Posicione o QR Code do equipamento aqui</p>
            <div className="mt-4 w-12 h-1 bg-accent rounded animate-pulse"></div>
          </div>
          
          <AppButton 
            onClick={handleScanSimulation}
            className="w-full mb-4"
            icon={<FaQrcode />}
          >
            Simular Scan do QR
          </AppButton>
          
          <AppButton 
            variant="outline"
            className="w-full"
            icon={<FaKeyboard />}
          >
            Inserir Código Manualmente
          </AppButton>
        </div>
        
        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground mt-4">
          <p>Não consegue escanear?</p>
          <a href="#" className="text-accent">Reportar Problema</a>
        </div>
      </div>
    </div>
  );
}
