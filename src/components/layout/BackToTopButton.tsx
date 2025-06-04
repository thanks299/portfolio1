import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isNearBottom, setIsNearBottom] = useState<boolean>(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Show button when scrolled past 300px
        setIsVisible(scrollY > 300);

        // Hide button when near the bottom of the page
        setIsNearBottom(scrollY + windowHeight >= documentHeight - 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && !isNearBottom && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-[150px] right-0 rotate-[270deg] origin-bottom-right text-white px-4 py-2 rounded-tl-lg rounded-bl-lg font-bold opacity-0 transition-opacity duration-300 ease-in-out z-[1000] font-sans ${
                        isVisible ? 'opacity-100' : ''
                    } bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800`}
                    aria-label="Back to the top"
                >
                    <span className="text-sm font-medium">BACK TO TOP→</span>
                </button>
            )}
        </>
    );
};

export default BackToTopButton;