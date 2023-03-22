import React, { useState } from 'react';

const menuItems = [
    {
        name: 'Ahmet Talha TURKMEN',
        imageUrl: 'https://avatars.githubusercontent.com/u/75725469?v=4',
        linkedinUrl: 'https://www.linkedin.com/in/ahmet-talha-turkmen-632388200/',
    },
    {
        name: 'Abdulvahap BENLI',
        imageUrl: 'https://avatars.githubusercontent.com/u/79311293?s=100&v=4',
        linkedinUrl: 'https://www.linkedin.com/in/abdulvahap-benli-008948192/',
    },
    {
        name: 'Erdal NAYIR',
        imageUrl: 'https://avatars.githubusercontent.com/u/76615367?s=100&v=4',
        linkedinUrl: 'https://www.linkedin.com/in/erdal-nayir-9754281b1/',
    },
];

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="bg-transparent hover:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 text-white font-bold py-2 px-4 rounded border border-white"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleMenu}
                >
                    <span>Who Are Us</span>
                </button>
            </div>

            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                aria-labelledby="menu-button"
                role="menu"
            >
                <div className="py-1" role="none">
                    {menuItems.map((item) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            onClick={() => window.open(item.linkedinUrl, '_blank')}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            key={item.name}
                        >
                            <div className="flex items-center">
                                <img src={item.imageUrl} alt="" className="w-8 h-8 rounded-full mr-3" />
                                <span>{item.name}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

