import React, { useEffect } from 'react';
import CenteredContainer from './CenteredContainer';
import MasonryGrid from './MasonryGrid';


const PromotionPage = () => {
  useEffect(() => {
    // Trigger the falling shapes animation when the page loads
    const shapes = document.querySelectorAll('.falling-shape');
    shapes.forEach((shape, index) => {
      const delay = Math.random() * 2; // Random delay for different fall times
      shape.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div className="bg-[#e9e7e7] min-h-screen font-Poppins">
      {/* Centered Content Wrapper */}
      <CenteredContainer>
        {/* Hero Section */}
        <section className="relative hero bg-cover bg-center h-[80vh] text-center py-24 flex flex-col justify-center items-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
          {/* Container to limit falling shapes */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            {/* Generate multiple falling shapes with different sizes and positions */}
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className={`falling-shape shape-${index % 3 === 0 ? 'circle' : index % 3 === 1 ? 'square' : 'triangle'}`}
                style={{
                  left: `${Math.random() * 80}vw`, // Random horizontal position within the bounds
                  animationDelay: `${Math.random() * 2}s`, // Random delay
                }}
              ></div>
            ))}
          </div>

          <h1 className="text-5xl font-extrabold text-[#291e00] tracking-wide leading-snug md:text-6xl text-shadow-lg z-20 relative">Welcome to SDIETTechies</h1>
          <p className="mt-4 text-lg md:text-xl text-[#291e00] opacity-80 z-20 relative">Your College Community for Event Management and Innovation</p>
          <button className="mt-6 px-8 py-4 bg-[#291e00] text-white text-lg rounded-md hover:bg-[#7a6220] transition-all ease-in-out duration-300 transform hover:scale-105 z-20 relative cursor-pointer">Join Now</button>
        </section>

        {/* Features Section */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold text-[#291e00] mb-8">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#291e00]">Organize Events Seamlessly</h3>
              <p className="mt-2 text-[#291e00]">Manage all your college events with ease, from workshops to festivals, using our platform.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#291e00]">Collaborate with Peers</h3>
              <p className="mt-2 text-[#291e00]">Work with your college mates and create amazing events that everyone will remember!</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-[#291e00]">Real-Time Updates</h3>
              <p className="mt-2 text-[#291e00]">Stay updated with the latest event info and important announcements at all times.</p>
            </div>
          </div>
        </section>










       
            <MasonryGrid/>











       

      </CenteredContainer>

















      {/* Call to Action */}
      <section className="bg-[#d4d2d2] py-12 text-center">
        <h2 className="text-3xl font-bold text-[#291e00] mb-6">Ready to Get Started?</h2>
        <button className="cursor-pointer mt-6 px-8 py-4 bg-[#291e00] text-white text-lg rounded-md hover:bg-[#7a6220] transition-all ease-in-out duration-300 transform hover:scale-105">Join SDIETTechies Now</button>
      </section>

     

      {/* Additional Styles for Falling Shapes Animation */}
      <style>
        {`
          /* Falling Shapes Animation */
          .falling-shape {
            position: absolute;
            top: -50px;
            animation: fall 3s ease-in-out forwards; /* forwards to keep the shape at the final position */
          }

          /* Shape Styles */
          .shape-circle {
            width: 40px;
            height: 40px;
            background-color: #7a6220;
            border-radius: 50%;
          }

          .shape-square {
            width: 50px;
            height: 50px;
            background-color: #291e00;
          }

          .shape-triangle {
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 50px solid #d4d2d2;
          }

          @keyframes fall {
            0% {
              transform: translateY(-100px) rotate(0deg);
            }
            50% {
              transform: translateY(60vh) rotate(360deg); /* Make them fall longer */
            }
            100% {
              transform: translateY(70vh) rotate(720deg); /* Final resting position */
            }
          }
        `}
      </style>
    </div>
  );
};

export default PromotionPage;
