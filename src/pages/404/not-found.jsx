import React from "react";
import { useNavigate } from "react-router-dom"; // or import useNavigate from 'react-router-dom' if using React Router v6

const NotFoundPage = () => {
  const navigate = useNavigate(); // Use useNavigate if using React Router v6

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleHomeRedirect = () => {
    navigate("/"); // Navigates to the homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgSecondary">
      <div className="text-center p-8 rounded-lg shadow-md w-96">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="mb-4 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleGoBack}
            className="bg-accent text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mr-2"
          >
            Go Back
          </button>
          <button
            onClick={handleHomeRedirect}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
