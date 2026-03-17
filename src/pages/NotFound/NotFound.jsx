import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={css.page}>

            {/* ── Animated SVG illustration ── */}
            <div className={css.svgWrap}>
                <svg className={css.nfSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="nf-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stopColor="#4f46e5" />
                            <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                        <linearGradient id="nf-g2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <radialGradient id="nf-rg" cx="50%" cy="50%" r="50%">
                            <stop offset="0%"   stopColor="#4f46e5" stopOpacity="0.14" />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"    />
                        </radialGradient>
                    </defs>

                    {/* Expanding rings */}
                    <circle className={css.nfRing1} cx="100" cy="100" r="75" fill="none" stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.18" />
                    <circle className={css.nfRing2} cx="100" cy="100" r="75" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.14" />
                    <circle className={css.nfRing3} cx="100" cy="100" r="75" fill="none" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.10" />

                    {/* Background glow */}
                    <circle cx="100" cy="100" r="70" fill="url(#nf-rg)" />

                    {/* Main circle */}
                    <circle cx="100" cy="100" r="48" fill="none" stroke="url(#nf-g1)" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="6 4" />
                    <circle cx="100" cy="100" r="34" fill="rgba(79,70,229,0.06)" stroke="url(#nf-g1)" strokeWidth="1.2" />

                    {/* Center — pulsing X */}
                    <g className={css.nfCenter}>
                        <circle cx="100" cy="100" r="16" fill="rgba(239,68,68,0.10)" />
                        <line x1="92" y1="92" x2="108" y2="108" stroke="url(#nf-g2)" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="108" y1="92" x2="92"  y2="108" stroke="url(#nf-g2)" strokeWidth="2.5" strokeLinecap="round" />
                    </g>

                    {/* Orbiting dots */}
                    <g className={css.nfOrbit1}>
                        <circle cx="100" cy="52" r="5" fill="#4f46e5" fillOpacity="0.75" />
                    </g>
                    <g className={css.nfOrbit2}>
                        <circle cx="148" cy="100" r="4" fill="#ec4899" fillOpacity="0.70" />
                    </g>

                    {/* Floating signal bars */}
                    <g className={css.nfLine1}>
                        <rect x="22" y="82" width="6" height="16" rx="2" fill="#4f46e5" fillOpacity="0.30" />
                        <rect x="32" y="74" width="6" height="24" rx="2" fill="#4f46e5" fillOpacity="0.45" />
                        <rect x="42" y="66" width="6" height="32" rx="2" fill="#ef4444" fillOpacity="0.55" />
                    </g>
                    <g className={css.nfLine2}>
                        <rect x="152" y="82" width="6" height="16" rx="2" fill="#7c3aed" fillOpacity="0.30" />
                        <rect x="162" y="74" width="6" height="24" rx="2" fill="#7c3aed" fillOpacity="0.45" />
                        <rect x="172" y="66" width="6" height="32" rx="2" fill="#ef4444" fillOpacity="0.55" />
                    </g>
                    <g className={css.nfLine3}>
                        <line x1="68" y1="168" x2="132" y2="168" stroke="url(#nf-g1)" strokeWidth="1" strokeOpacity="0.20" strokeDasharray="4 5" />
                        <circle cx="68"  cy="168" r="2.5" fill="#4f46e5" fillOpacity="0.40" />
                        <circle cx="132" cy="168" r="2.5" fill="#7c3aed" fillOpacity="0.40" />
                    </g>
                </svg>
            </div>

            <p className={css.badge}>Signal Lost</p>
            <h1 className={css.code}>404</h1>
            <h2 className={css.title}>Page Not Found</h2>
            <p className={css.sub}>
                The page you&apos;re looking for doesn&apos;t exist
                or has been moved to another location.
            </p>

            <Link to="/" className={css.homeLink}>
                ← Return Home
            </Link>
        </div>
    );
}

export default NotFound;
