import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { FaArrowLeft, FaCamera, FaVideo, FaCheck, FaFloppyDisk, FaImage, FaTrash } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AppButton from "@/components/common/AppButton";
import { useToast } from "@/hooks/use-toast";

export default function MediaPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const taskId = params.taskId;

  const [finalNotes, setFinalNotes] = useState("");
  const [mediaFiles, setMediaFiles] = useState<Array<{ id: string; name: string; type: string; size: string }>>([]);

  const goBack = () => {
    window.history.back();
  };

  const addPhoto = () => {
    const newFile = {
      id: Date.now().toString(),
      name: "equipamento_antes.jpg",
      type: "image",
      size: "2.1 MB"
    };
    setMediaFiles(prev => [...prev, newFile]);
    toast({
      title: "Foto adicionada",
      description: "Foto simulada adicionada com sucesso",
    });
  };

  const addVideo = () => {
    const newFile = {
      id: Date.now().toString(),
      name: "manutencao_video.mp4",
      type: "video",
      size: "15.3 MB"
    };
    setMediaFiles(prev => [...prev, newFile]);
    toast({
      title: "Vídeo adicionado",
      description: "Vídeo simulado adicionado com sucesso",
    });
  };

  const removeFile = (id: string) => {
    setMediaFiles(prev => prev.filter(file => file.id !== id));
  };

  const finishTask = () => {
    toast({
      title: "Tarefa concluída com sucesso! ✅",
      description: "Todos os dados foram enviados para o sistema.",
    });
    setLocation("/tasks");
  };

  const saveDraft = () => {
    toast({
      title: "Rascunho salvo",
      description: "Você pode continuar mais tarde",
    });
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
        <h1 className="flex-1 text-center font-semibold text-primary">Mídia</h1>
        <div className="w-10"></div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-xs" />
            </div>
            <div className="w-8 h-1 bg-green-500 rounded"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-xs" />
            </div>
            <div className="w-8 h-1 bg-accent rounded"></div>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">3</span>
            </div>
          </div>
        </div>
        
        {/* Media Upload Section */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
          <h3 className="font-semibold text-primary mb-4">Documentação Visual</h3>
          <p className="text-sm text-muted-foreground mb-6">Adicione fotos e vídeos para documentar o trabalho realizado</p>
          
          {/* Media Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button 
              onClick={addPhoto}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <FaCamera className="text-2xl text-muted-foreground mb-2" />
              <span className="text-sm font-medium text-muted-foreground">Adicionar Foto</span>
            </button>
            
            <button 
              onClick={addVideo}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <FaVideo className="text-2xl text-muted-foreground mb-2" />
              <span className="text-sm font-medium text-muted-foreground">Adicionar Vídeo</span>
            </button>
          </div>
          
          {/* Media Preview */}
          {mediaFiles.length > 0 && (
            <div>
              <h4 className="font-medium text-foreground mb-4">Arquivos Adicionados</h4>
              <div className="space-y-3">
                {mediaFiles.map((file) => (
                  <div key={file.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      {file.type === "image" ? (
                        <FaImage className="text-white" />
                      ) : (
                        <FaVideo className="text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size} • {file.type.toUpperCase()}</p>
                    </div>
                    <button 
                      onClick={() => removeFile(file.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Additional Notes */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
          <Label htmlFor="finalNotes" className="font-medium text-foreground mb-3 block">Observações Finais</Label>
          <Textarea
            id="finalNotes"
            value={finalNotes}
            onChange={(e) => setFinalNotes(e.target.value)}
            className="form-input resize-none"
            rows={3}
            placeholder="Adicione observações finais sobre o trabalho realizado..."
          />
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <AppButton 
            onClick={finishTask}
            className="w-full"
            icon={<FaCheck />}
          >
            Finalizar e Enviar
          </AppButton>
          
          <AppButton 
            onClick={saveDraft}
            variant="outline"
            className="w-full"
            icon={<FaFloppyDisk />}
          >
            Salvar Rascunho
          </AppButton>
        </div>
      </div>
    </div>
  );
}
