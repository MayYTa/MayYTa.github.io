import { useEffect, useRef, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { TRACKS, type Lang } from '../data/portfolioData';

const time = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const BUTTON = 'aero-nav-btn flex h-9 w-9 cursor-pointer items-center justify-center rounded-full';

export function MediaPlayerWidget({ lang }: { lang: Lang }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const track = TRACKS[index];

  // Music starts only when the visitor presses play
  useEffect(() => {
    if (!audio.current) return;
    audio.current.volume = 0.10;
    if (playing) audio.current.play().catch(() => setPlaying(false));
    else audio.current.pause();
  }, [playing, index]);

  // Without tracks the player is hidden on the published site
  if (!track) {
    return import.meta.env.DEV ? (
      <div className="aero-window rounded-2xl p-4 text-sm">Music player: add your tracks to TRACKS (only visible on your computer).</div>
    ) : null;
  }

  const go = (step: number) => {
    setIndex((i) => (i + step + TRACKS.length) % TRACKS.length);
    setElapsed(0);
    setDuration(0);
  };

  return (
    <div className="aero-window rounded-2xl p-4">
      <audio
        ref={audio}
        src={track.src}
        preload="metadata"
        muted={muted}
        onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => (TRACKS.length > 1 ? go(1) : setPlaying(false))}
      />
      <p className="truncate text-sm font-bold">{track.title}</p>
      <p className="truncate text-xs text-[#8dd4df]">{track.artist}</p>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={1}
        value={elapsed}
        aria-label={lang === 'es' ? 'Avance de la pista' : 'Track progress'}
        onChange={(e) => {
          if (audio.current) audio.current.currentTime = Number(e.target.value);
          setElapsed(Number(e.target.value));
        }}
        className="mt-3 w-full accent-[#38d9e8]"
      />
      <div className="flex justify-between text-[11px]">
        <span>{time(elapsed)}</span>
        <span>{time(duration)}</span>
      </div>
      <div className="mt-2 flex items-center justify-center gap-2.5">
        <button type="button" onClick={() => go(-1)} aria-label="Previous" className={BUTTON}>
          <SkipBack className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'} className="aero-sphere-play flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next" className={BUTTON}>
          <SkipForward className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'} className={BUTTON}>
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
