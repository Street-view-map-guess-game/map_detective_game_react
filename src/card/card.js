import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, imageUrl, imageAlt, description, countryName }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg relative hover:scale-110 transition duration-500">
            <img className="object-cover h-96 w-96 hover:object-scale-up" src={imageUrl} alt={imageAlt} />
            <div className="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
                <div className="font-bold text-xl mb-2 text-center">
                    {title}
                    <p className="text-gray-200 text-base">{description}</p>
                    <div className="mt-4">
                        <Link to={{
                            pathname: '/gamescreen',
                            state: { gameId: { countryName } }
                        }}>
                            <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                                Start Game
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;