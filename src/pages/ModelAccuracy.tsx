import SEO from "@/components/SEO";
import AccuracyGauge from "@/components/AccuracyGauge";
import GlassCard from "@/components/GlassCard";

const ModelAccuracy = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <SEO title="Model Accuracy – DeepDebug AI" description="Live accuracy metrics and breakdowns." canonical="/accuracy" />
      <h1 className="text-3xl font-bold tracking-tight mb-6">Model Accuracy</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 flex items-center justify-center">
          <AccuracyGauge value={96.3} label="Live accuracy" />
        </GlassCard>
        <GlassCard className="p-6 md:col-span-2">
          <div className="text-sm text-muted-foreground mb-2">Breakdown</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-muted-foreground text-sm">Explanation accuracy</div>
              <div className="text-2xl font-semibold">97.4%</div>
            </div>
            <div>
              <div className="text-muted-foreground text-sm">Patch accuracy</div>
              <div className="text-2xl font-semibold">95.1%</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};

export default ModelAccuracy;
