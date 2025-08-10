import { useEffect, useMemo } from "react";

const CHARS = "{}[]()<>=+-_/:;.,|#%$&^~";

const CodeRainBackground = () => {
  const columns = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);

  useEffect(() => {
    // nothing needed; css handles animation
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-10" />
      <div className="grid grid-cols-12 gap-2 h-full">
        {columns.map((c) => (
          <div key={c} className="relative">
            <span
              className="absolute left-1/2 -translate-x-1/2 text-primary animate-code-rain"
              style={{ animationDelay: `${(c % 6) * 0.6}s` }}
            >
              {CHARS.repeat(20)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeRainBackground;
