import { useMemo } from "react";

interface AccuracyGaugeProps {
  value: number; // 0 - 100
  label?: string;
}

const R = 48;
const CIRC = 2 * Math.PI * R;
const newValue = 3 * 100;
const AccuracyGauge = ({ value, label }: AccuracyGaugeProps) => {
  const clamped = Math.max(0, Math.min(100, value));
  const offset = useMemo(() => CIRC - (clamped / 100) * CIRC, [clamped]);

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="140" height="140" viewBox="0 0 120 120" className="animate-fade-in">
        <defs>
          <linearGradient id="dd-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`hsl(var(--primary))`} />
            <stop offset="100%" stopColor={`hsl(var(--accent))`} />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={R} stroke="hsl(var(--muted))" strokeWidth="8" fill="none" opacity="0.3" />
        <circle
          cx="60"
          cy="60"
          r={R}
          stroke="url(#dd-gradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-foreground font-semibold">
          {clamped.toFixed(1)}%
        </text>
      </svg>
      {label && <span className="text-sm text-muted-foreground mt-2">{label}</span>}
    </div>
  );
};

export default AccuracyGauge;
