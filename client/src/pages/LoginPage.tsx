import { useState } from "react";
import { useLocation } from "wouter";
import { authService } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { FaTasks } from "react-icons/fa6";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "carlos@empresa.com",
    password: "password123"
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await authService.login(formData.email, formData.password);
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao Executor",
      });
      setLocation("/home");
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Credenciais inválidas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-sm">
        {/* App Logo */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center">
            <FaTasks className="text-white text-2xl" />
          </div>
          <h1 className="text-2xl font-semibold text-primary">Executor</h1>
          <p className="text-muted-foreground mt-2">Gerenciador de Tarefas</p>
        </div>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input w-full px-4 py-3 border border-border rounded-xl"
              placeholder="carlos@empresa.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="form-input w-full px-4 py-3 border border-border rounded-xl"
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full py-3 text-accent-foreground font-medium rounded-xl"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        
        <div className="text-center mt-8">
          <a href="#" className="text-accent text-sm">Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  );
}
