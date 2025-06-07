
const Features = () => {
  const features = [
    {
      icon: "🎭",
      title: "AI Talent Scouting",
      description: "Automatically discover rising stars across YouTube, TikTok, Instagram, and Twitch using advanced engagement analytics."
    },
    {
      icon: "📅",
      title: "Smart Booking & Negotiation",
      description: "AI matches talent to campaigns and negotiates optimal rates, terms, and usage rights in real-time."
    },
    {
      icon: "🪪",
      title: "Career Strategy",
      description: "Personalized content calendars with predictive modeling for viral trends and growth optimization."
    },
    {
      icon: "🤖",
      title: "AI Social Manager",
      description: "Auto-generates and schedules content, manages comments, and engages with audiences in your unique voice."
    },
    {
      icon: "💼",
      title: "Business Operations",
      description: "Smart contracts, automated legal docs, integrated payments, and tax assistance for seamless operations."
    },
    {
      icon: "🎤",
      title: "AI PR Agent",
      description: "Handles press requests, creates media kits, and responds to communications in your authentic style."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your AI-Powered Talent Empire
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From discovery to stardom, our AI handles every aspect of talent management 
            so you can focus on creating amazing content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
