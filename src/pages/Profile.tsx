import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ThemeToggle from "@/components/ThemeToggle";
import GlassCard from "@/components/GlassCard";

const Profile = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SEO title="Profile – DeepDebug AI" description="Manage your preferences and profile." canonical="/profile" />
      <h1 className="text-3xl font-bold tracking-tight mb-6">Profile</h1>

      <GlassCard className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/20 grid place-items-center text-primary font-bold">DD</div>
          <div>
            <div className="font-semibold">Alex Developer</div>
            <div className="text-sm text-muted-foreground">alex@example.com</div>
            <div className="mt-2 flex gap-2">
              <Badge variant="secondary">🔥 7-day streak</Badge>
              <Badge variant="secondary">Pro</Badge>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm mb-2 text-muted-foreground">Preferred language</div>
            <Select defaultValue="python">
              <SelectTrigger className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="rust">Rust</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-sm mb-2 text-muted-foreground">Theme</div>
            <ThemeToggle />
          </div>
        </div>
      </GlassCard>
    </main>
  );
};

export default Profile;
