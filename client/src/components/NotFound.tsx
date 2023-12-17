import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404 - Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <img
                    src="https://i.imgur.com/qIufhof.png"
                    alt="Page Not Found"
                    className="mb-8"
                />
                <Link to="/" className="text-blue-500 hover:underline">
                    Go back to the home page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
