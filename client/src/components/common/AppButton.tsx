import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function AppButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  icon,
  type = "button",
}: AppButtonProps) {
  const variants = {
    primary: "btn-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-background hover:bg-muted",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-xl font-medium transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
}
