import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface CodeBlockProps {
  language?: string;
  content: string;
  isDiff?: boolean;
  className?: string;
}

const CodeBlock = ({ language = "", content, isDiff = false, className }: CodeBlockProps) => {
  const lines = useMemo(() => content.split("\n"), [content]);

  return (
    <pre className={cn("relative rounded-md p-4 bg-muted/40 border border-border overflow-auto font-mono text-sm", className)} aria-label={language ? `${language} code` : "code"}>
      {!isDiff && (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)] bg-[length:200%_100%] animate-scan-x" />
      )}
      <code className="relative z-[1] block whitespace-pre">
        {lines.map((line, i) => {
          const isAdd = isDiff && line.trim().startsWith("+");
          const isDel = isDiff && line.trim().startsWith("-");
          return (
            <div key={i} className={cn("px-2 py-0.5 rounded-sm", isAdd && "bg-success/15 text-success", isDel && "bg-destructive/15 text-destructive")}>{line || "\u00A0"}</div>
          );
        })}
      </code>
    </pre>
  );
};

export default CodeBlock;
