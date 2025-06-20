
import { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      quote: 'The customer service was exceptional. They helped me find the perfect car for my needs and made the buying process smooth and stress-free.',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Engineer',
      quote: 'I was impressed by the selection of electric vehicles. The staff was knowledgeable about the latest technology and helped me make an informed decision.',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      quote: 'The financing options were flexible and transparent. I got a great deal on my dream car and couldn\'t be happier with the experience.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Hear from people who have experienced our service</p>
        </div>
        
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-quote">"{testimonials[activeIndex].quote}"</p>
              <div className="testimonial-author">
                <h4>{testimonials[activeIndex].name}</h4>
                <p>{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-control" onClick={prevTestimonial}>
              &#8592;
            </button>
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button className="carousel-control" onClick={nextTestimonial}>
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;