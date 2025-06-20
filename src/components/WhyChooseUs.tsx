
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes rigorous inspection and certification process.',
    },
    {
      id: 2,
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'We offer the best value with transparent pricing and financing options.',
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Premium Service',
      description: 'Dedicated support team and comprehensive maintenance packages.',
    },
    {
      id: 4,
      icon: '🌱',
      title: 'Eco-Friendly Options',
      description: 'Wide selection of hybrid and electric vehicles for sustainable driving.',
    },
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>We're committed to providing exceptional service and value</p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason.id}>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;