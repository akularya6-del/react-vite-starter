import React, { useRef, useEffect, useState, useCallback } from 'react'

interface FadingVideoProps {
  src: string | string[]
  className?: string
  style?: React.CSSProperties
}

const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const fadingOut = useRef(false)

  const sources = Array.isArray(src) ? src : [src]
  const currentSrc = sources[currentIndex]

  const fadeIn = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    fadingOut.current = false
    video.style.transition = 'opacity 500ms ease'
    requestAnimationFrame(() => {
      video.style.opacity = '1'
    })
  }, [])

  const fadeOut = useCallback(() => {
    const video = videoRef.current
    if (!video || fadingOut.current) return
    fadingOut.current = true
    video.style.transition = 'opacity 550ms ease'
    video.style.opacity = '0'
  }, [])

  const handleLoadedData = useCallback(() => {
    fadeIn()
  }, [fadeIn])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    const remaining = video.duration - video.currentTime
    if (remaining <= 0.55) {
      fadeOut()
    }
  }, [fadeOut])

  const handleEnded = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (sources.length === 1) {
      video.currentTime = 0
      video.play()
      fadeIn()
    } else {
      setCurrentIndex((prev) => (prev + 1) % sources.length)
    }
  }, [sources.length, fadeIn])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.style.opacity = '0'
    video.load()
  }, [currentSrc])

  return (
    <video
      ref={videoRef}
      key={currentSrc}
      src={currentSrc}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  )
}

export default FadingVideo
