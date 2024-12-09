import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold text-primary">SaasApp</a>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};