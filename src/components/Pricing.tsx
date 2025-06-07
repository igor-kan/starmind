
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Manual Mode",
      price: "10%",
      period: "commission",
      description: "Perfect for talents who want AI suggestions with full control",
      features: [
        "AI talent scouting suggestions",
        "Basic analytics dashboard", 
        "Manual gig approval",
        "Standard support",
        "Basic contract templates"
      ],
      popular: false
    },
    {
      name: "Hybrid Mode", 
      price: "15%",
      period: "commission",
      description: "AI handles operations while you focus on creating content",
      features: [
        "Automated social media management",
        "Smart gig booking & negotiation",
        "Advanced analytics & forecasting",
        "Priority support",
        "Smart contracts & legal automation",
        "AI-powered brand strategy"
      ],
      popular: true
    },
    {
      name: "Full AI Agent",
      price: "20%",
      period: "commission", 
      description: "Complete autopilot mode - AI manages your entire career",
      features: [
        "Full autonomous operations",
        "AI PR & communication agent",
        "Advanced brand optimization",
        "White-glove support",
        "Custom AI persona training",
        "Premium legal & tax assistance",
        "Virtual influencer creation tools"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Choose Your AI Agent Level
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start with any plan and upgrade as your career grows. No upfront costs - we only succeed when you do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-b from-purple-500/10 to-pink-500/10' 
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 text-lg font-semibold rounded-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom solution for your agency or media company?
          </p>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
