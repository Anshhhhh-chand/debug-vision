import SEO from "@/components/SEO";
import GlassCard from "@/components/GlassCard";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Settings = () => {
  const [autoPatch, setAutoPatch] = useState(true);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SEO title="Settings – DeepDebug AI" description="Control integrations and preferences." canonical="/settings" />
      <h1 className="text-3xl font-bold tracking-tight mb-6">Settings</h1>

      <div className="space-y-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Auto-apply patches</div>
              <div className="text-sm text-muted-foreground">Apply safe patches automatically</div>
            </div>
            <Switch checked={autoPatch} onCheckedChange={setAutoPatch} className="data-[state=checked]:ring-2 data-[state=checked]:ring-primary" />
          </div>
        </GlassCard>

        <GlassCard className="p-6 space-y-4">
          <div>
            <div className="font-medium mb-2">Slack webhook URL</div>
            <Input placeholder="https://hooks.slack.com/..." />
          </div>
          <div>
            <div className="font-medium mb-2">Discord webhook URL</div>
            <Input placeholder="https://discord.com/api/webhooks/..." />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover-lift">Export debug history (CSV)</button>
        </GlassCard>
      </div>
    </main>
  );
};

export default Settings;
