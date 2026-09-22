import React, { useEffect, useRef } from 'react';

const CosmicBackdrop = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        let frame = 0;
        let running = true;

        const stars = [];
        const streaks = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const seed = () => {
            stars.length = 0;
            const count = Math.min(220, Math.floor((width * height) / 9000));
            for (let i = 0; i < count; i += 1) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 1.8 + 0.3,
                    tw: Math.random() * Math.PI * 2,
                    sp: 0.01 + Math.random() * 0.03,
                    hue: Math.random() > 0.7 ? 190 + Math.random() * 40 : 260 + Math.random() * 50,
                });
            }
        };

        const spawnStreak = () => {
            streaks.push({
                x: Math.random() * width,
                y: Math.random() * height * 0.45,
                len: 90 + Math.random() * 140,
                speed: 8 + Math.random() * 8,
                life: 0,
            });
        };

        const draw = () => {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                star.tw += star.sp;
                const alpha = 0.35 + Math.abs(Math.sin(star.tw)) * 0.65;
                ctx.beginPath();
                ctx.fillStyle = `hsla(${star.hue}, 100%, 85%, ${alpha})`;
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
            });

            if (Math.random() < 0.012 && streaks.length < 3) spawnStreak();

            streaks.forEach((shot, index) => {
                shot.x += shot.speed;
                shot.y += shot.speed * 0.35;
                shot.life += 1;
                ctx.strokeStyle = 'rgba(255,255,255,0.85)';
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.moveTo(shot.x, shot.y);
                ctx.lineTo(shot.x - shot.len, shot.y - shot.len * 0.35);
                ctx.stroke();
                if (shot.life > 70 || shot.x > width + 40) streaks.splice(index, 1);
            });

            frame = requestAnimationFrame(draw);
        };

        resize();
        seed();
        window.addEventListener('resize', () => {
            resize();
            seed();
        });
        frame = requestAnimationFrame(draw);

        return () => {
            running = false;
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="cosmic-canvas"
            aria-hidden="true"
        />
    );
};

export default CosmicBackdrop;
