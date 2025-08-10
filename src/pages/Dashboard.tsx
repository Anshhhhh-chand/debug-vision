import SEO from "@/components/SEO";
import GlassCard from "@/components/GlassCard";
import CodeBlock from "@/components/CodeBlock";
import { useEffect, useMemo, useState } from "react";
import { FilePlus2, History, Search } from "lucide-react";

const sampleTrace = `Traceback (most recent call last):
  File "app.py", line 42, in <module>
    main()
  File "app.py", line 18, in main
    result = 1 / 0
ZeroDivisionError: division by zero`;

const Dashboard = () => {
  const [bugCount, setBugCount] = useState(0);
  const [dropText, setDropText] = useState("");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const id = setInterval(() => setBugCount((n) => (n < 128 ? n + 1 : n)), 800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!dropText) return;
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      setTyped(dropText.slice(0, i));
      i++;
      if (i > dropText.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [dropText]);

  const onDrop: React.DragEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    const text = e.dataTransfer.getData("text/plain") || sampleTrace;
    setDropText(text);
  };

  const onDragOver: React.DragEventHandler<HTMLDivElement> = (e) => e.preventDefault();

  const quickTiles = useMemo(() => [
    { icon: FilePlus2, label: "Debug", to: "/result" },
    { icon: Search, label: "Search", to: "/accuracy" },
    { icon: History, label: "History", to: "/debugs" },
  ], []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <SEO title="Dashboard – DeepDebug AI" description="Your live debugging dashboard with real-time insights." canonical="/dashboard" />
      <h1 className="text-3xl font-bold tracking-tight mb-6">Welcome back</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <GlassCard className="p-6">
          <div className="text-sm text-muted-foreground">Today's fixes</div>
          <div className="text-4xl font-extrabold text-primary">{bugCount}</div>
        </GlassCard>
        {quickTiles.map((t) => (
          <GlassCard key={t.label} className="p-6 hover-scale">
            <div className="flex items-center gap-3">
              <t.icon className="h-5 w-5 text-primary" />
              <a href={t.to} className="story-link">{t.label}</a>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6 border-dashed">
          <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="h-48 rounded-md border border-border border-dashed flex items-center justify-center text-muted-foreground"
            aria-label="Drop your traceback"
          >
            Drop your traceback here
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="text-sm text-muted-foreground mb-2">Live typing</div>
          <CodeBlock language="text" content={typed || ""} />
        </GlassCard>
      </div>
    </main>
  );
};

export default Dashboard;
