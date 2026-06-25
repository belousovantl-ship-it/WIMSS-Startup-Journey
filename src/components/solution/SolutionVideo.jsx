export default function SolutionVideo({ video, compact = false }) {
  const embedSrc = `https://www.youtube-nocookie.com/embed/${video.youtubeId}`

  return (
    <div
      className={compact ? 'solution-video solution-video--compact' : 'solution-video'}
      aria-label={video.label}
    >
      <p className="solution-video__label">{video.label}</p>
      <p className="solution-video__lead">{video.lead}</p>
      <div className="solution-video__embed">
        <iframe
          className="solution-video__iframe"
          src={embedSrc}
          title={video.iframeTitle}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}
