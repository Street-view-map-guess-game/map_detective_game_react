import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, imageUrl, imageAlt, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={imageAlt} />
            <div className="px-6 py-4">
                <div className="text-center font-bold text-xl mb-2">{title}
                    <p className="text-gray-700 text-base">{description}</p>
                    <Link to="/gamescreen">
                        <button class="bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded">
                            Start Game
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;