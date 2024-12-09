import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 -z-10" />
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up opacity-0 [animation-delay:200ms]">
          Transform Your Business with Our SaaS Solution
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0 [animation-delay:400ms]">
          Streamline your workflow, boost productivity, and scale your business with our powerful platform.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-up opacity-0 [animation-delay:600ms]">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">Watch Demo</Button>
        </div>
      </div>
    </div>
  );
};