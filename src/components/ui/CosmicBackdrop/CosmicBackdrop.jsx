import React, { useEffect, useRef } from 'react';

const CosmicBackdrop = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext('2d', { alpha: true });
        let width = 0;
        let height = 0;
        let frame = 0;
        let running = true;
        let paused = false;
        let resumeTimer = 0;

        const stars = [];
        const streaks = [];

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 1.15);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * ratio * 0.7);
            canvas.height = Math.floor(height * ratio * 0.7);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
        };

        const seed = () => {
            stars.length = 0;
            const count = Math.min(90, Math.floor((width * height) / 18000));
            for (let i = 0; i < count; i += 1) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 1.5 + 0.35,
                    tw: Math.random() * Math.PI * 2,
                    sp: 0.012 + Math.random() * 0.02,
                    hue: i % 3 === 0 ? 190 : 270,
                });
            }
        };

        const spawnStreak = () => {
            streaks.push({
                x: Math.random() * width * 0.8,
                y: Math.random() * height * 0.4,
                len: 70 + Math.random() * 90,
                speed: 10,
                life: 0,
            });
        };

        const draw = () => {
            if (!running) return;
            if (paused) {
                frame = 0;
                return;
            }

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < stars.length; i += 1) {
                const star = stars[i];
                star.tw += star.sp;
                const alpha = 0.4 + (star.tw % 2 > 1 ? 0.45 : 0.15);
                ctx.fillStyle = `hsla(${star.hue}, 90%, 80%, ${alpha})`;
                ctx.fillRect(star.x, star.y, star.r, star.r);
            }

            if (streaks.length < 1 && Math.random() < 0.008) spawnStreak();

            for (let i = streaks.length - 1; i >= 0; i -= 1) {
                const shot = streaks[i];
                shot.x += shot.speed;
                shot.y += shot.speed * 0.32;
                shot.life += 1;
                ctx.strokeStyle = 'rgba(255,255,255,0.7)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(shot.x, shot.y);
                ctx.lineTo(shot.x - shot.len, shot.y - shot.len * 0.32);
                ctx.stroke();
                if (shot.life > 50 || shot.x > width + 20) streaks.splice(i, 1);
            }

            frame = requestAnimationFrame(draw);
        };

        const pause = () => {
            paused = true;
            cancelAnimationFrame(frame);
            frame = 0;
        };

        const resume = () => {
            if (!running || document.hidden) return;
            paused = false;
            if (!frame) frame = requestAnimationFrame(draw);
        };

        const onScroll = () => {
            pause();
            window.clearTimeout(resumeTimer);
            resumeTimer = window.setTimeout(resume, 140);
        };

        const onVisibility = () => {
            if (document.hidden) pause();
            else resume();
        };

        resize();
        seed();
        window.addEventListener('resize', () => {
            resize();
            seed();
        }, { passive: true });
        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('visibilitychange', onVisibility);
        frame = requestAnimationFrame(draw);

        return () => {
            running = false;
            cancelAnimationFrame(frame);
            window.clearTimeout(resumeTimer);
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return <canvas ref={canvasRef} className="cosmic-canvas" aria-hidden="true" />;
};

export default CosmicBackdrop;
