import React, { useEffect, useState } from 'react';
// import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
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
            {isVisible && (
                <button
                    onClick={() => {
                        scrollToTop();
                        setIsVisible(false); // Remove line-through effect after clicking
                    }}
                    className={`fixed bottom-[150px] right-0 rotate-[270deg] origin-bottom-right text-white px-4 py-2 rounded-tl-lg rounded-bl-lg font-bold opacity-0 transition-opacity duration-300 ease-in-out z-[1000] font-sans ${
                        isVisible ? 'opacity-100' : ''
                    }`}
                    aria-label="Back to the top"
                >
                    <span className="text-sm font-medium">
                        ← BACK TO TOP
                    </span>
                </button>
            )}
        </>
    );
};

export default BackToTopButton;