
import '../styles/FeaturedCars.css';

const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      name: 'Luxury Sedan',
      description: 'Elegant design with premium comfort and advanced technology.',
      price: '$45,000',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
      id: 2,
      name: 'Sport Coupe',
      description: 'Powerful performance with sleek aerodynamics and responsive handling.',
      price: '$65,000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
      id: 3,
      name: 'Electric SUV',
      description: 'Zero emissions with spacious interior and cutting-edge features.',
      price: '$55,000',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    },
  ];

  return (
    <section className="featured-cars" id="featured">
      <div className="container">
        <div className="section-header">
          <h2>Featured Models</h2>
          <p>Explore our selection of premium vehicles designed for every lifestyle</p>
        </div>
        
        <div className="cars-grid">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <div className="car-image">
                <img src={car.image} alt={car.name} />
              </div>
              <div className="car-details">
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <div className="car-price">Starting at {car.price}</div>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;