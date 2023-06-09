import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/images/hero.png" className="max-w-sm rounded-lg" />
            <div>
              <h1 className="text-5xl font-bold">
                Note Your Everything In One Apps
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
