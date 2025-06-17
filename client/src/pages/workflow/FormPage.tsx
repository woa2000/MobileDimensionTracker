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
    status: "funcionando",
    checks: {
      filters: true,
      temperature: true,
      functionality: false,
      visual: false,
    },
    observations: "Equipamento funcionando normalmente. Filtros limpos e temperatura dentro do padrão.",
    nextMaintenance: "2024-02-15",
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
          <h3 className="font-semibold text-primary mb-6">Inspeção do Equipamento</h3>
          
          <div className="space-y-6">
            {/* Status do Equipamento */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-3 block">Status do Equipamento</Label>
              <RadioGroup 
                value={formData.status} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                className="space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="funcionando" id="funcionando" />
                  <Label htmlFor="funcionando" className="text-sm">Funcionando Normalmente</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="problemas" id="problemas" />
                  <Label htmlFor="problemas" className="text-sm">Com Problemas</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="parado" id="parado" />
                  <Label htmlFor="parado" className="text-sm">Parado/Inoperante</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Verificações */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-3 block">Verificações Realizadas</Label>
              <div className="space-y-2">
                {[
                  { key: "filters", label: "Limpeza dos filtros" },
                  { key: "temperature", label: "Verificação de temperatura" },
                  { key: "functionality", label: "Teste de funcionalidade" },
                  { key: "visual", label: "Inspeção visual geral" },
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
                placeholder="Descreva qualquer observação relevante sobre o equipamento..."
              />
            </div>
            
            {/* Próxima Manutenção */}
            <div>
              <Label htmlFor="nextMaintenance" className="text-sm font-medium text-foreground mb-2 block">Próxima Manutenção</Label>
              <Input
                id="nextMaintenance"
                type="date"
                value={formData.nextMaintenance}
                onChange={(e) => setFormData(prev => ({ ...prev, nextMaintenance: e.target.value }))}
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
