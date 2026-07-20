"use client"

import { useEffect, useRef } from "react"

// Minimal typing for the bits of the YouTube IFrame API we use.
type YTPlayer = {
  playVideo: () => void
  mute: () => void
  destroy: () => void
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement,
        opts: Record<string, unknown>,
      ) => YTPlayer
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

const VIDEO_ID = "hwHJOEsVf2Y"
const API_SRC = "https://www.youtube.com/iframe_api"

/**
 * Fullscreen background YouTube video for the Explore section.
 *
 * Uses the IFrame API instead of a plain <iframe> so we can auto-resume on any
 * PAUSED/ENDED state. That keeps the player out of its paused state, which is
 * what surfaces YouTube's prev/pause/next overlay chrome over a background video.
 */
export const BackgroundVideo = ({ title }: { title: string }) => {
  const hostRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)

  useEffect(() => {
    let cancelled = false

    const createPlayer = () => {
      if (cancelled || !hostRef.current || !window.YT) return

      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: VIDEO_ID,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          iv_load_policy: 3,
          fs: 0,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            e.target.mute()
            e.target.playVideo()
          },
          onStateChange: (e: { data: number; target: YTPlayer }) => {
            const { PAUSED, ENDED } = window.YT!.PlayerState
            // Whenever the video stops, kick it back into playing so the
            // paused overlay (prev/pause/next buttons) never appears.
            if (e.data === PAUSED || e.data === ENDED) {
              e.target.playVideo()
            }
          },
        },
      })
    }

    // Load the API script once; reuse it if another instance already did.
    if (window.YT?.Player) {
      createPlayer()
    } else {
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        prev?.()
        createPlayer()
      }
      if (!document.querySelector(`script[src="${API_SRC}"]`)) {
        const script = document.createElement("script")
        script.src = API_SRC
        document.head.appendChild(script)
      }
    }

    return () => {
      cancelled = true
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {/* The API replaces this div with the generated iframe. */}
      <div
        ref={hostRef}
        title={title}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Transparent shield: blocks any stray pointer events from reaching the player. */}
      <div className="pointer-events-auto absolute inset-0" />
    </div>
  )
}
