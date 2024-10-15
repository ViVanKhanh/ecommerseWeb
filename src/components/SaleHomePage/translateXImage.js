import { useEffect, useRef, useState } from 'react';

const useTranslatetX = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [translateXPosition, setTranslateXPosition] = useState(40);
    const [scrollPosition, setScrollPosition] = useState(0);

    const prevScrollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDirection('up');
        }
        prevScrollPosition.current =
            currentScrollPosition.current <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };

    const handleTransslateX = () => {
        if (scrollDirection === 'down' && scrollPosition > 1900) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 40 ? 40 : translateXPosition + 1
            );
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    useEffect(() => {
        handleTransslateX();
    }, [scrollDirection, scrollPosition]);

    return {
        translateXPosition,

    }
}
export default useTranslatetX;