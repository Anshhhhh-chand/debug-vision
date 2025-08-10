import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  className?: string;
  children: ReactNode;
}

const GlassCard = ({ className, children }: GlassCardProps) => (
  <div className={cn("glass-card shadow-glow", className)}>
    {children}
  </div>
);

export default GlassCard;
