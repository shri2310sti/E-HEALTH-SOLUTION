import React from "react";

const Location = () => {
  return (
    <div className="bg-[#007BFF] py-10 px-6 rounded-xl shadow-xl mt-8">
      <h2 className="text-center text-2xl font-bold text-white mb-6">
        Our Location
      </h2>
      <div className="max-w-[1200px] mx-auto flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-[400px] rounded-lg"
          src="https://maps.google.com/maps?q=VIT%20Bhopal%20University,%20India&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
