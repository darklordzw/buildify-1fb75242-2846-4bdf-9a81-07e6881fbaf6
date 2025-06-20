
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Drive Your Dreams</h1>
          <p>
            Discover the perfect blend of luxury, performance, and innovation.
            Our premium selection of vehicles is designed to elevate your driving experience.
          </p>
          <div className="hero-buttons">
            <a href="#featured" className="btn btn-primary">Explore Models</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" alt="Luxury car" />
        </div>
      </div>
    </section>
  );
};

export default Hero;