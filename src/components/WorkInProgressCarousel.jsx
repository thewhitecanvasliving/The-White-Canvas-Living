import React, { useEffect, useRef } from 'react'
import './WorkInProgressCarousel.css'

const workImages = [
    '/images/work-in-progress/img1.jpeg',
    '/images/work-in-progress/img2.jpeg',
    '/images/work-in-progress/img3.jpeg',
    '/images/work-in-progress/img4.jpeg',
]

const SPEED = 0.5 // px per frame

const WorkInProgressCarousel = () => {

    const trackRef    = useRef(null)
    const offsetRef   = useRef(0)       // single source of truth for position
    const dragRef     = useRef(null)    // { startX, startOffset }
    const pausedRef   = useRef(false)
    const rafRef      = useRef(null)

    useEffect(() => {

        const track = trackRef.current

        // ── loop helper ──────────────────────────────────────────
        const loop = (val, half) => ((val % half) + half) % half

        // ── animation loop ────────────────────────────────────────
        const tick = () => {
            const half = track.scrollWidth / 2

            if (half > 0) {
                if (!pausedRef.current) {
                    offsetRef.current = loop(offsetRef.current + SPEED, half)
                }
                track.style.transform = `translateX(-${offsetRef.current}px)`
            }

            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)

        // ── shared drag start ─────────────────────────────────────
        const onDragStart = (clientX) => {
            pausedRef.current = true
            dragRef.current = { startX: clientX, startOffset: offsetRef.current }
        }

        // ── shared drag move ──────────────────────────────────────
        const onDragMove = (clientX) => {
            if (!dragRef.current) return
            const half = track.scrollWidth / 2
            const delta = dragRef.current.startX - clientX
            offsetRef.current = loop(dragRef.current.startOffset + delta, half)
        }

        // ── shared drag end ───────────────────────────────────────
        const onDragEnd = () => {
            dragRef.current = null
            // small delay so auto-scroll resumes smoothly
            setTimeout(() => { pausedRef.current = false }, 800)
        }

        // ── mouse ─────────────────────────────────────────────────
        const onMouseDown = (e) => {
            e.preventDefault()
            onDragStart(e.clientX)
            track.style.cursor = 'grabbing'
        }

        const onMouseMove = (e) => {
            if (!dragRef.current) return
            onDragMove(e.clientX)
        }

        const onMouseUp = () => {
            if (!dragRef.current) return
            onDragEnd()
            track.style.cursor = 'grab'
        }

        // ── touch ─────────────────────────────────────────────────
        const onTouchStart = (e) => {
            onDragStart(e.touches[0].clientX)
        }

        const onTouchMove = (e) => {
            onDragMove(e.touches[0].clientX)
        }

        const onTouchEnd = () => onDragEnd()

        // ── attach ────────────────────────────────────────────────
        track.addEventListener('mousedown',  onMouseDown)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup',   onMouseUp)
        track.addEventListener('touchstart', onTouchStart, { passive: true })
        track.addEventListener('touchmove',  onTouchMove,  { passive: true })
        track.addEventListener('touchend',   onTouchEnd)

        return () => {
            cancelAnimationFrame(rafRef.current)
            track.removeEventListener('mousedown',  onMouseDown)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup',   onMouseUp)
            track.removeEventListener('touchstart', onTouchStart)
            track.removeEventListener('touchmove',  onTouchMove)
            track.removeEventListener('touchend',   onTouchEnd)
        }

    }, [])

    return (

        <div className='work-progress-section'>

            <div className="work-progress-heading">
                <div className="section-pre-title">
                    DESIGN IN MOTION
                </div>
                <div className="section-title" data-aos='fade-up'>
                    Spaces Taking Shape
                </div>
                <div className="section-subtitle" data-aos='fade-up' data-aos-delay='100'>
                    A glimpse into the craftsmanship, precision, and process behind every transformation
                </div>
            </div>

            <div className="work-progress-carousel">
                <div className="work-progress-track" ref={trackRef}>
                    {[...workImages, ...workImages].map((img, index) => (
                        <div className="work-progress-card" key={index}>
                            <img src={img} alt="" draggable="false" />
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default WorkInProgressCarousel