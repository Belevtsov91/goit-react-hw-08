import css from './Background.module.css';

const Background = () => (
  <div className={css.root} aria-hidden="true">
    <svg
      className={css.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Radial gradients for blobs */}
        <radialGradient id="bg-rg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#4f46e5" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="bg-rg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#0ea5e9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="bg-rg3" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ec4899" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="bg-rg4" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"    />
        </radialGradient>

        {/* Linear gradient for SVG shape strokes */}
        <linearGradient id="bg-lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="bg-lg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="bg-lg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* ── Gradient blobs ── */}
      <ellipse className={css.blob1} cx="160"  cy="190" rx="360" ry="290" fill="url(#bg-rg1)" />
      <ellipse className={css.blob2} cx="1280" cy="700" rx="400" ry="320" fill="url(#bg-rg2)" />
      <ellipse className={css.blob3} cx="1080" cy="110" rx="310" ry="250" fill="url(#bg-rg3)" />
      <ellipse className={css.blob4} cx="720"  cy="490" rx="370" ry="290" fill="url(#bg-rg4)" />

      {/* ── Floating triangles ── */}
      <polygon
        className={css.tri1}
        points="85,65 118,122 52,122"
        fill="none" stroke="url(#bg-lg1)" strokeWidth="1.5" strokeOpacity="0.22"
      />
      <polygon
        className={css.tri2}
        points="1375,555 1408,612 1342,612"
        fill="none" stroke="url(#bg-lg2)" strokeWidth="1.5" strokeOpacity="0.22"
      />
      <polygon
        className={css.tri3}
        points="595,830 622,880 568,880"
        fill="none" stroke="url(#bg-lg3)" strokeWidth="1.5" strokeOpacity="0.18"
      />
      <polygon
        className={css.tri4}
        points="340,40 365,85 315,85"
        fill="none" stroke="url(#bg-lg1)" strokeWidth="1.2" strokeOpacity="0.16"
      />

      {/* ── Pulsing rings ── */}
      <circle className={css.ring1} cx="310"  cy="530" r="46"
        fill="none" stroke="#4f46e5" strokeWidth="1.2" strokeOpacity="0.16" />
      <circle className={css.ring2} cx="1120" cy="300" r="68"
        fill="none" stroke="#ec4899" strokeWidth="1.2" strokeOpacity="0.14" />
      <circle className={css.ring3} cx="720"  cy="770" r="55"
        fill="none" stroke="#0ea5e9" strokeWidth="1.2" strokeOpacity="0.14" />
      <circle className={css.ring4} cx="1000" cy="650" r="38"
        fill="none" stroke="#7c3aed" strokeWidth="1"   strokeOpacity="0.14" />

      {/* ── Diamond shapes ── */}
      <rect
        className={css.diamond1}
        x="428" y="415" width="16" height="16"
        fill="none" stroke="#4f46e5" strokeWidth="1.2" strokeOpacity="0.22"
        transform="rotate(45 436 423)"
      />
      <rect
        className={css.diamond2}
        x="1180" y="540" width="12" height="12"
        fill="none" stroke="#0ea5e9" strokeWidth="1.2" strokeOpacity="0.22"
        transform="rotate(45 1186 546)"
      />

      {/* ── Floating dots ── */}
      <circle className={css.dot1} cx="465"  cy="138" r="4.5" fill="#4f46e5" fillOpacity="0.24" />
      <circle className={css.dot2} cx="1030" cy="215" r="3.5" fill="#0ea5e9" fillOpacity="0.24" />
      <circle className={css.dot3} cx="195"  cy="690" r="4"   fill="#ec4899" fillOpacity="0.20" />
      <circle className={css.dot4} cx="1330" cy="375" r="3.5" fill="#7c3aed" fillOpacity="0.24" />
      <circle className={css.dot5} cx="830"  cy="75"  r="3"   fill="#4f46e5" fillOpacity="0.20" />
      <circle className={css.dot6} cx="545"  cy="710" r="4"   fill="#7c3aed" fillOpacity="0.18" />
      <circle className={css.dot7} cx="1200" cy="800" r="3.5" fill="#0ea5e9" fillOpacity="0.18" />

      {/* ── Cross / plus markers ── */}
      <g className={css.cross1}>
        <line x1="912" y1="632" x2="928" y2="632" stroke="#4f46e5" strokeWidth="1.8" strokeOpacity="0.24" />
        <line x1="920" y1="624" x2="920" y2="640" stroke="#4f46e5" strokeWidth="1.8" strokeOpacity="0.24" />
      </g>
      <g className={css.cross2}>
        <line x1="152" y1="358" x2="165" y2="358" stroke="#0ea5e9" strokeWidth="1.8" strokeOpacity="0.22" />
        <line x1="158" y1="351" x2="158" y2="365" stroke="#0ea5e9" strokeWidth="1.8" strokeOpacity="0.22" />
      </g>
      <g className={css.cross3}>
        <line x1="1252" y1="145" x2="1265" y2="145" stroke="#ec4899" strokeWidth="1.8" strokeOpacity="0.20" />
        <line x1="1258" y1="138" x2="1258" y2="152" stroke="#ec4899" strokeWidth="1.8" strokeOpacity="0.20" />
      </g>
      <g className={css.cross4}>
        <line x1="680" y1="280" x2="692" y2="280" stroke="#7c3aed" strokeWidth="1.8" strokeOpacity="0.18" />
        <line x1="686" y1="274" x2="686" y2="286" stroke="#7c3aed" strokeWidth="1.8" strokeOpacity="0.18" />
      </g>

      {/* ── Animated dashed connecting lines ── */}
      <line
        className={css.conn1}
        x1="465" y1="138" x2="310" y2="530"
        stroke="#4f46e5" strokeWidth="0.7" strokeOpacity="0.10"
      />
      <line
        className={css.conn2}
        x1="1030" y1="215" x2="1120" y2="300"
        stroke="#0ea5e9" strokeWidth="0.7" strokeOpacity="0.10"
      />
      <line
        className={css.conn3}
        x1="830" y1="75" x2="720" y2="490"
        stroke="#7c3aed" strokeWidth="0.7" strokeOpacity="0.08"
      />
    </svg>

    {/* Dot grid overlay */}
    <div className={css.dotGrid} />
  </div>
);

export default Background;
