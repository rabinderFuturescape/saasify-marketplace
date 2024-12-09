import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const products = [
  {
    category: "Productivity",
    items: [
      {
        name: "TaskMaster Pro",
        description: "Advanced task management solution",
        price: "$29",
        features: ["Unlimited tasks", "Team collaboration", "Priority support"],
      },
      {
        name: "TimeTrack Plus",
        description: "Time tracking and productivity analytics",
        price: "$19",
        features: ["Time tracking", "Reports", "Integrations"],
      },
    ],
  },
  {
    category: "Communication",
    items: [
      {
        name: "ChatFlow",
        description: "Team communication platform",
        price: "$39",
        features: ["Real-time chat", "Video calls", "File sharing"],
      },
      {
        name: "MeetPro",
        description: "Professional video conferencing",
        price: "$49",
        features: ["HD video", "Screen sharing", "Meeting recording"],
      },
    ],
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="space-y-16">
          {products.map((category) => (
            <div key={category.category} className="animate-fade-up opacity-0">
              <h3 className="text-2xl font-semibold mb-8 text-center">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((product) => (
                  <div
                    key={product.name}
                    className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
                  >
                    <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-primary mb-6">
                      {product.price}
                      <span className="text-base font-normal text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};