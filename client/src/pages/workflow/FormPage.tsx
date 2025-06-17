import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import AppButton from "@/components/common/AppButton";

export default function FormPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const taskId = params.taskId;

  const [formData, setFormData] = useState({
    status: "completo",
    checks: {
      inventory: true,
      pricing: true,
      organization: false,
      display: false,
    },
    observations: "Estoque reposto conforme necessário. Produtos organizados adequadamente nas prateleiras.",
    nextCheck: "2024-02-20",
  });

  const goBack = () => {
    window.history.back();
  };

  const handleNext = () => {
    setLocation(`/workflow/media/${taskId || ""}`);
  };

  const handleCheckChange = (key: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      checks: {
        ...prev.checks,
        [key]: checked,
      }
    }));
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
        <h1 className="flex-1 text-center font-semibold text-primary">Formulário</h1>
        <div className="w-10"></div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-xs" />
            </div>
            <div className="w-8 h-1 bg-accent rounded"></div>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">2</span>
            </div>
            <div className="w-8 h-1 bg-border rounded"></div>
            <div className="w-8 h-8 bg-border rounded-full flex items-center justify-center">
              <span className="text-muted-foreground text-xs font-semibold">3</span>
            </div>
          </div>
        </div>
        
        {/* Form Content */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="font-semibold text-primary mb-6">Relatório de Atividade</h3>
          
          <div className="space-y-6">
            {/* Status da Tarefa */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-3 block">Status da Atividade</Label>
              <RadioGroup 
                value={formData.status} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                className="space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="completo" id="completo" />
                  <Label htmlFor="completo" className="text-sm">Tarefa Completa</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="parcial" id="parcial" />
                  <Label htmlFor="parcial" className="text-sm">Parcialmente Completa</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="pendente" id="pendente" />
                  <Label htmlFor="pendente" className="text-sm">Necessita Ação Adicional</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Verificações */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-3 block">Atividades Realizadas</Label>
              <div className="space-y-2">
                {[
                  { key: "inventory", label: "Verificação de estoque" },
                  { key: "pricing", label: "Conferência de preços" },
                  { key: "organization", label: "Organização de produtos" },
                  { key: "display", label: "Montagem de display" },
                ].map((check) => (
                  <div key={check.key} className="flex items-center space-x-3">
                    <Checkbox
                      id={check.key}
                      checked={formData.checks[check.key as keyof typeof formData.checks]}
                      onCheckedChange={(checked) => handleCheckChange(check.key, checked as boolean)}
                    />
                    <Label htmlFor={check.key} className="text-sm">{check.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Observações */}
            <div>
              <Label htmlFor="observations" className="text-sm font-medium text-foreground mb-2 block">Observações</Label>
              <Textarea
                id="observations"
                value={formData.observations}
                onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
                className="form-input resize-none"
                rows={4}
                placeholder="Descreva detalhes sobre a atividade realizada, produtos verificados, etc..."
              />
            </div>
            
            {/* Próxima Verificação */}
            <div>
              <Label htmlFor="nextCheck" className="text-sm font-medium text-foreground mb-2 block">Próxima Verificação</Label>
              <Input
                id="nextCheck"
                type="date"
                value={formData.nextCheck}
                onChange={(e) => setFormData(prev => ({ ...prev, nextCheck: e.target.value }))}
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <AppButton 
          onClick={handleNext}
          className="w-full mt-6"
          icon={<FaArrowRight />}
        >
          Avançar para Mídia
        </AppButton>
      </div>
    </div>
  );
}
