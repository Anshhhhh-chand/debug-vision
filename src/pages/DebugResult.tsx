import SEO from "@/components/SEO";
import CodeBlock from "@/components/CodeBlock";
import GlassCard from "@/components/GlassCard";
import { useEffect, useState } from "react";

const original = `function add(a, b){\n  return a + b;;\n}`;
const patch = `function add(a, b) {\n  // Fixed extra semicolon and added input validation\n  if (typeof a !== 'number' || typeof b !== 'number') return 0;\n  return a + b;\n}`;

const DebugResult = () => {
  const [typed, setTyped] = useState("");
  const explanation = "Found syntax inconsistency (double semicolon) and missing input validation. Applied patch to sanitize inputs and format code.";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(explanation.slice(0, i));
      i++;
      if (i > explanation.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <SEO title="Debug Result – DeepDebug AI" description="Review the explanation and patch side by side." canonical="/result" />
      <h1 className="text-3xl font-bold tracking-tight mb-6">Debug Result</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-4 opacity-80">
          <div className="text-sm text-muted-foreground mb-2">Original</div>
          <CodeBlock language="js" content={original} />
        </GlassCard>
        <GlassCard className="p-6">
          <div className="text-sm text-muted-foreground mb-2">Explanation</div>
          <div className="font-mono text-sm leading-relaxed animate-fade-in min-h-[120px]">{typed}</div>
        </GlassCard>
        <GlassCard className="p-4 animate-slide-in-right">
          <div className="text-sm text-muted-foreground mb-2">Patch</div>
          <CodeBlock language="js" content={`+ ${patch}\n- ${original}`} isDiff />
        </GlassCard>
      </div>
    </main>
  );
};

export default DebugResult;
