const iconProps = {
  className: 'h-6 w-6',
  stroke: 'currentColor',
  fill: 'none',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function IconPlannedOperations(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M7 9h10M7 13h6M7 17h8" />
      <path d="M16 17l2 2 3-4" strokeWidth="1.75" />
    </svg>
  )
}

export function IconVisibilityGap(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M4 4l16 16" strokeWidth="2" />
    </svg>
  )
}

export function IconBusinessImpact(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 3 2 20h20L12 3Z" strokeWidth="1.75" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
      <path d="M16 20h5" strokeWidth="1.25" opacity="0.7" />
      <path d="M17.5 18v4M19.5 18v4" strokeWidth="1.25" opacity="0.7" />
    </svg>
  )
}

export function IconAssetUncertainty(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M4 8h16v11H4V8Z" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <circle cx="15.5" cy="14.5" r="3.25" />
      <path d="M18 17l2.5 2.5" strokeWidth="2" />
    </svg>
  )
}

export function IconWorkforceUncertainty(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M8 9a3 3 0 1 1 6 0v1" />
      <path d="M5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
      <path d="M3 7h6v5H3V7Z" />
      <path d="M5.5 9.5h2" />
    </svg>
  )
}

export function IconReactiveOperations(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v5l3 2" />
      <path d="M12 5V3M5.6 6.6 4.2 5.2M18.4 6.6l1.4-1.4" />
      <path d="M18 18l2 2M4 18l-2 2" strokeWidth="1.25" opacity="0.65" />
    </svg>
  )
}

export function IconEnvironmental(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 21c-4-3.5-7-7.2-7-11a7 7 0 0 1 14 0c0 3.8-3 7.5-7 11Z" />
      <path d="M12 11v4M10 13h4" strokeWidth="1.25" />
    </svg>
  )
}

export function IconFlowArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...props} aria-hidden="true">
      <path
        d="M5 12h12M13 7l5 5-5 5"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconFlowArrowDown(props) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...props} aria-hidden="true">
      <path
        d="M12 5v12M7 14l5 5 5-5"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
