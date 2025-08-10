import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PriorDebugs from "./pages/PriorDebugs";
import ModelAccuracy from "./pages/ModelAccuracy";
import DebugResult from "./pages/DebugResult";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">DeepDebug <span className="text-primary">AI</span></span>
            </NavLink>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <NavLink to="/dashboard" className={({isActive}) => isActive ? "text-primary" : "hover-scale"}>Dashboard</NavLink>
              <NavLink to="/debugs" className={({isActive}) => isActive ? "text-primary" : "hover-scale"}>Prior Debugs</NavLink>
              <NavLink to="/accuracy" className={({isActive}) => isActive ? "text-primary" : "hover-scale"}>Model Accuracy</NavLink>
              <NavLink to="/settings" className={({isActive}) => isActive ? "text-primary" : "hover-scale"}>Settings</NavLink>
              <NavLink to="/profile" className={({isActive}) => isActive ? "text-primary" : "hover-scale"}>Profile</NavLink>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/debugs" element={<PriorDebugs />} />
          <Route path="/accuracy" element={<ModelAccuracy />} />
          <Route path="/result" element={<DebugResult />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
