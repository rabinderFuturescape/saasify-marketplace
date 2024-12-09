import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
};

const products: Product[] = [
  {
    id: "1",
    name: "Analytics Pro",
    description: "Advanced analytics solution for businesses",
    category: "Analytics",
    price: "$49/mo",
    features: ["Real-time tracking", "Custom reports", "API access"],
  },
  {
    id: "2",
    name: "CRM Plus",
    description: "Customer relationship management tool",
    category: "Business",
    price: "$39/mo",
    features: ["Contact management", "Sales pipeline", "Email integration"],
  },
  {
    id: "3",
    name: "TaskFlow",
    description: "Project management made simple",
    category: "Productivity",
    price: "$29/mo",
    features: ["Task tracking", "Team collaboration", "File sharing"],
  },
  {
    id: "4",
    name: "SecureVault",
    description: "Enterprise-grade security solution",
    category: "Security",
    price: "$59/mo",
    features: ["End-to-end encryption", "Access control", "Audit logs"],
  },
  {
    id: "5",
    name: "MarketingHub",
    description: "All-in-one marketing automation",
    category: "Marketing",
    price: "$45/mo",
    features: ["Email campaigns", "Social media", "Analytics"],
  },
];

export const Products = () => {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription className="mt-2">{product.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button>Learn More</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};