import SEO from "@/components/SEO";
import GlassCard from "@/components/GlassCard";
import CodeBlock from "@/components/CodeBlock";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Fix ZeroDivisionError",
    lang: "python",
    before: "result = 1 / 0",
    after: "result = safe_divide(1, 0)  # handle zero division",
  },
  {
    id: 2,
    title: "Null pointer guard",
    lang: "js",
    before: "user.name.length",
    after: "user?.name?.length ?? 0",
  },
];

const PriorDebugs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <SEO title="Prior Debugs – DeepDebug AI" description="Your debug history timeline and diffs." canonical="/debugs" />
      <h1 className="text-3xl font-bold tracking-tight mb-6">Prior Debugs</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <GlassCard key={item.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.lang.toUpperCase()}</div>
              </div>
              <button
                className="hover-lift text-primary"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                aria-expanded={openId === item.id}
              >
                {openId === item.id ? "Hide diff" : "View diff"}
              </button>
            </div>

            {openId === item.id && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 perspective-1000">
                <div className="[transform-style:preserve-3d] animate-fade-in">
                  <CodeBlock language={item.lang} content={item.before} />
                </div>
                <div className="[transform-style:preserve-3d] animate-slide-in-right">
                  <CodeBlock language={item.lang} content={`+ ${item.after}\n- ${item.before}`} isDiff />
                </div>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </main>
  );
};

export default PriorDebugs;
