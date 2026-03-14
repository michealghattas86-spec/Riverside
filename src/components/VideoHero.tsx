"use client";
import { useEffect, useRef } from "react";

interface VideoHeroProps {
  playbackRate?: number; // e.g. 0.4 for slow, 1.0 for normal
}

export default function VideoHero({ playbackRate = 0.4 }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/myvideo.mp4" type="video/mp4" />
      <source src="https://videos.pexels.com/video-files/6003645/6003645-uhd_2560_1440_30fps.mp4" type="video/mp4" />
    </video>
  );
}
