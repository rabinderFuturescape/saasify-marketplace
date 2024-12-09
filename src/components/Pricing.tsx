import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    features: ["Up to 5 users", "Basic analytics", "24/7 support", "1 project"],
  },
  {
    name: "Pro",
    price: "$99",
    features: ["Up to 20 users", "Advanced analytics", "Priority support", "10 projects"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited users", "Custom analytics", "Dedicated support", "Unlimited projects"],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, transparent pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`p-8 rounded-lg animate-fade-up opacity-0 ${
                plan.popular
                  ? "border-2 border-primary shadow-lg"
                  : "border border-gray-200"
              }`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {plan.popular && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-4xl font-bold my-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">per month</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};