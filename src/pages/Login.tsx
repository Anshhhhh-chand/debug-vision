import SEO from "@/components/SEO";
import GlassCard from "@/components/GlassCard";
import CodeRainBackground from "@/components/CodeRainBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <main className="relative min-h-[calc(100vh-64px)] flex items-center justify-center">
      <SEO title="Login – DeepDebug AI" description="Sign in to DeepDebug AI: Debug smarter, ship faster." canonical="/login" />
      <CodeRainBackground />
      <div className="relative z-10 w-full max-w-md p-6">
        <GlassCard className="p-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Debug Smarter, Ship Faster.</h1>
          <p className="text-muted-foreground mb-6">Sign in to start live AI debugging.</p>
          <div className="space-y-3">
            <Button className="w-full hover-lift" variant="secondary">
              <Github className="mr-2 h-4 w-4" /> Continue with GitHub
            </Button>
            <Button className="w-full hover-lift" variant="secondary">
              <LogIn className="mr-2 h-4 w-4" /> Continue with Google
            </Button>
          </div>
          <div className="my-6 text-center text-xs text-muted-foreground">or use magic link</div>
          <div className="flex gap-2">
            <Input type="email" placeholder="you@company.com" aria-label="Email" />
            <Button className="hover-lift" variant="default">
              <Mail className="mr-2 h-4 w-4" /> Send
            </Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            No account? <NavLink className="story-link" to="/dashboard">Continue as guest</NavLink>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};

export default Login;
