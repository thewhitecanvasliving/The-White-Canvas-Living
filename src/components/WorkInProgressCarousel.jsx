import { useEffect, useRef } from 'react';
import './WorkInProgressCarousel.css';

const workImages = [
  '/images/work-in-progress/img1.jpeg',
  '/images/work-in-progress/img2.jpeg',
  '/images/work-in-progress/img3.jpeg',
  '/images/work-in-progress/img4.jpeg',
];

const SPEED = 0.5; // px per frame

export default function WorkInProgressCarousel() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const dragRef = useRef(null);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const loop = (val, half) => ((val % half) + half) % half;

    const tick = () => {
      const half = track.scrollWidth / 2;
      if (half > 0) {
        if (!pausedRef.current) {
          offsetRef.current = loop(offsetRef.current + SPEED, half);
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onDragStart = (clientX) => {
      pausedRef.current = true;
      dragRef.current = { startX: clientX, startOffset: offsetRef.current };
    };

    const onDragMove = (clientX) => {
      if (!dragRef.current) return;
      const half = track.scrollWidth / 2;
      const delta = dragRef.current.startX - clientX;
      offsetRef.current = loop(dragRef.current.startOffset + delta, half);
    };

    const onDragEnd = () => {
      dragRef.current = null;
      setTimeout(() => { pausedRef.current = false; }, 800);
    };

    const onMouseDown = (e) => {
      e.preventDefault();
      onDragStart(e.clientX);
      track.style.cursor = 'grabbing';
    };
    const onMouseMove = (e) => {
      if (!dragRef.current) return;
      onDragMove(e.clientX);
    };
    const onMouseUp = () => {
      if (!dragRef.current) return;
      onDragEnd();
      track.style.cursor = 'grab';
    };

    const onTouchStart = (e) => onDragStart(e.touches[0].clientX);
    const onTouchMove = (e) => onDragMove(e.touches[0].clientX);
    const onTouchEnd = () => onDragEnd();

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchmove', onTouchMove, { passive: true });
    track.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="wip-section">

      <div className="wip-carousel">
        <div className="wip-track" ref={trackRef}>
          {[...workImages, ...workImages].map((img, index) => (
            <div className="wip-card" key={index}>
              <img src={img} alt="" draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
