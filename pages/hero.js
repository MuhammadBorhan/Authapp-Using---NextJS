import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-4/6">
        <div className="text-center lg:text-left bg-blue-400">
          <h1>Borhan</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <button className="my-4 bg-indigo-300 px-4 py-1 rounded-sm">
                Signout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
