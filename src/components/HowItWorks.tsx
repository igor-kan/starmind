
const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Control Level",
      description: "Manual, Hybrid, or Full AI Agent mode - you decide how much autonomy to give your AI agent.",
      icon: "🎛️"
    },
    {
      step: "02", 
      title: "AI Analyzes Your Brand",
      description: "Our AI studies your content, audience, and growth patterns to create a personalized strategy.",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Automated Operations Begin",
      description: "Your AI agent starts booking gigs, managing social media, and optimizing your career 24/7.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Scale & Grow",
      description: "Watch your influence and income grow as AI handles the business while you create.",
      icon: "📈"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How StarMind Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started in minutes and let AI transform your talent management experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl">
                {step.icon}
              </div>
              <div className="text-purple-400 font-mono text-sm mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
