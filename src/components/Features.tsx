import { CheckCircle, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized platform."
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise-grade security to protect your valuable data."
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics tools."
  },
  {
    icon: CheckCircle,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing workflow."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to succeed
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};