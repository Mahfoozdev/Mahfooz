import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(followerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference">
            <div
                ref={cursorRef}
                className="fixed w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
};

export default CustomCursor;
