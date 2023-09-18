import React from "react";
// If you have a common Navbar component

const Welcome = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* If you have a common Navbar component */}
     

      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-8">
          Your submission has been received successfully.
        </p>
        <p className="text-lg">
          We appreciate your participation and will get back to you soon.
        </p>

        {/* Add any additional content or links here */}
      </div>
    </div>
  );
};

export default Welcome;