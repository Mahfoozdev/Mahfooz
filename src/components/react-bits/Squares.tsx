import { useRef, useEffect } from 'react';

interface SquaresProps {
    direction?: 'diagonal' | 'up' | 'down' | 'left' | 'right';
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
}

const Squares = ({
    direction = 'diagonal',
    speed = 0.5,
    borderColor = '#333',
    squareSize = 40,
    hoverFillColor = '#222',
}: SquaresProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>(0); // Initialize with 0
    const numSquaresX = useRef<number>(0);
    const numSquaresY = useRef<number>(0);
    const gridOffset = useRef({ x: 0, y: 0 });
    const hoveredSquare = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            for (let i = 0; i < numSquaresX.current; i++) {
                for (let j = 0; j < numSquaresY.current; j++) {
                    const x = (i * squareSize) - (gridOffset.current.x % squareSize);
                    const y = (j * squareSize) - (gridOffset.current.y % squareSize);

                    // Draw border
                    ctx.strokeStyle = borderColor;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, squareSize, squareSize);

                    // Check hover
                    if (hoveredSquare.current) {
                        // Calculate actual grid coordinates considering offset
                        // This is a simplified hover effect for visual flair based on mouse pos
                        // A more exact one would map screen coords to grid indices
                    }
                }
            }

            // Draw hovered square highlight if active
            if (hoveredSquare.current) {
                // Snap hover to grid

                // Adjust for moving grid is tricky, for now let's just light up the square under cursor static relative to screen
                // better: just light up the square at the mouse position regardless of grid movement for that "flashlight" feel
                const mouseGridX = Math.floor((hoveredSquare.current.x + (gridOffset.current.x % squareSize)) / squareSize) * squareSize - (gridOffset.current.x % squareSize);
                const mouseGridY = Math.floor((hoveredSquare.current.y + (gridOffset.current.y % squareSize)) / squareSize) * squareSize - (gridOffset.current.y % squareSize);

                ctx.fillStyle = hoverFillColor;
                ctx.fillRect(mouseGridX, mouseGridY, squareSize, squareSize);
            }

            // Move grid
            switch (direction) {
                case 'right': gridOffset.current.x -= speed; break;
                case 'left': gridOffset.current.x += speed; break;
                case 'down': gridOffset.current.y -= speed; break;
                case 'up': gridOffset.current.y += speed; break;
                case 'diagonal':
                    gridOffset.current.x += speed;
                    gridOffset.current.y += speed;
                    break;
            }

            requestRef.current = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            hoveredSquare.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            hoveredSquare.current = null;
        }

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, squareSize, hoverFillColor]);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full border-none block" />;
};

export default Squares;
