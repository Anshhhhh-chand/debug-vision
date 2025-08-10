import SEO from "@/components/SEO";
import GlassCard from "@/components/GlassCard";
import CodeRainBackground from "@/components/CodeRainBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail, LogIn, ShieldCheck, Lock } from "lucide-react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <main className="relative min-h-[calc(100vh-64px)] flex items-center justify-center">
      <SEO title="Login – DeepDebug AI" description="Sign in to DeepDebug AI: Debug smarter, ship faster." canonical="/login" />
      <CodeRainBackground />
      <div className="relative z-10 w-full max-w-md p-6">
        <GlassCard className="p-8 animate-enter">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Sign in to DeepDebug AI</h1>
          <p className="text-muted-foreground mb-6">Your secure workspace for live AI debugging.</p>

          <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-primary" /> Enterprise-grade security
            </span>
            <span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1">
              <Lock className="h-4 w-4 text-primary" /> SSO-ready
            </span>
          </div>

          <div className="space-y-3">
            <Button className="w-full hover-lift" variant="secondary" aria-label="Continue with GitHub">
              <Github className="mr-2 h-4 w-4" /> Continue with GitHub
            </Button>
            <Button className="w-full hover-lift" variant="secondary" aria-label="Continue with Google">
              <LogIn className="mr-2 h-4 w-4" /> Continue with Google
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-2" onSubmit={(e) => e.preventDefault()} aria-label="Magic link sign-in">
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <div className="flex gap-2">
                <Input id="email" type="email" placeholder="you@company.com" aria-label="Email address" />
                <Button className="hover-lift" variant="default" type="submit">
                  <Mail className="mr-2 h-4 w-4" /> Send
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">We’ll email you a secure, one-click sign-in link.</p>
          </form>

          <div className="mt-6 text-sm text-muted-foreground">
            No account? <NavLink className="story-link" to="/dashboard">Continue as guest</NavLink>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};

export default Login;
