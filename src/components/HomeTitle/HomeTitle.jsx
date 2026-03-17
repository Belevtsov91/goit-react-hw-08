import { Link } from "react-router-dom";
import css from "./HomeTitle.module.css";

const HomeTitle = () => {
    return (
        <div className={css.hero}>
            <span className={css.badge}>
                <span className={css.badgeDot} />
                Contact Management System
            </span>

            <h1 className={css.title}>
                Your Phonebook,
                <span className={css.titleGrad}>Reimagined.</span>
            </h1>

            <p className={css.subtitle}>
                A fast, elegant and secure place for all your contacts.
                Store, search and manage — effortlessly.
            </p>

            <div className={css.ctaGroup}>
                <Link to="/register" className={css.ctaBtn}>
                    Get Started →
                </Link>
                <Link to="/login" className={css.ctaSecondary}>
                    Sign In
                </Link>
            </div>

            {/* ── Animated SVG Decoration ── */}
            <div className={css.decoration}>
                <svg
                    className={css.decorSvg}
                    viewBox="0 0 480 120"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="ht-g1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"   stopColor="#4f46e5" />
                            <stop offset="50%"  stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                        <linearGradient id="ht-g2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"   stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <linearGradient id="ht-g3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stopColor="#4f46e5" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>

                    {/* ── Central hub ── */}
                    <circle className={css.expandRing}  cx="240" cy="60" r="28" fill="none" stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.25" />
                    <circle className={css.expandRing2} cx="240" cy="60" r="28" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.20" />
                    <circle cx="240" cy="60" r="18" fill="rgba(79,70,229,0.07)" stroke="url(#ht-g1)" strokeWidth="1.2" />
                    <circle className={css.centerDot} cx="240" cy="60" r="7" fill="url(#ht-g1)" />

                    {/* ── Orbital rings ── */}
                    <ellipse className={css.orbit1} cx="240" cy="60" rx="55" ry="20" fill="none" stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 5" />
                    <ellipse className={css.orbit2} cx="240" cy="60" rx="80" ry="28" fill="none" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.14" strokeDasharray="3 6" />

                    {/* ── Orbiting dots ── */}
                    <circle className={css.orbitDot1} cx="295" cy="60" r="4" fill="#4f46e5" fillOpacity="0.7" />
                    <circle className={css.orbitDot2} cx="185" cy="60" r="3" fill="#7c3aed" fillOpacity="0.7" />
                    <circle className={css.orbitDot3} cx="320" cy="60" r="3" fill="#0ea5e9" fillOpacity="0.6" />

                    {/* ── Feature chips (left side) ── */}
                    <g className={css.line1}>
                        <rect x="24" y="20" width="140" height="34" rx="10" fill="rgba(255,255,255,0.85)" stroke="url(#ht-g1)" strokeWidth="1.2" />
                        <circle cx="44" cy="37" r="8" fill="rgba(79,70,229,0.12)" />
                        <line x1="38" y1="37" x2="50" y2="37" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="44" y1="31" x2="44" y2="43" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                        <rect x="58" y="30" width="90" height="6" rx="3" fill="rgba(79,70,229,0.15)" />
                        <rect x="58" y="40" width="60" height="4" rx="2" fill="rgba(79,70,229,0.08)" />
                    </g>

                    <g className={css.line2}>
                        <rect x="24" y="66" width="140" height="34" rx="10" fill="rgba(255,255,255,0.85)" stroke="url(#ht-g2)" strokeWidth="1.2" />
                        <circle cx="44" cy="83" r="8" fill="rgba(14,165,233,0.12)" />
                        <path d="M40,83 Q44,78 48,83 Q44,88 40,83z" fill="#0ea5e9" fillOpacity="0.7" />
                        <rect x="58" y="76" width="75" height="6" rx="3" fill="rgba(14,165,233,0.15)" />
                        <rect x="58" y="86" width="50" height="4" rx="2" fill="rgba(14,165,233,0.08)" />
                    </g>

                    {/* ── Feature chips (right side) ── */}
                    <g className={css.line3}>
                        <rect x="316" y="20" width="140" height="34" rx="10" fill="rgba(255,255,255,0.85)" stroke="url(#ht-g1)" strokeWidth="1.2" />
                        <circle cx="336" cy="37" r="8" fill="rgba(124,58,237,0.12)" />
                        <path d="M332,37 L340,33 L340,41z" fill="#7c3aed" fillOpacity="0.7" />
                        <rect x="350" y="30" width="90" height="6" rx="3" fill="rgba(124,58,237,0.15)" />
                        <rect x="350" y="40" width="65" height="4" rx="2" fill="rgba(124,58,237,0.08)" />
                    </g>

                    <g className={css.orbit3}>
                        <rect x="316" y="66" width="140" height="34" rx="10" fill="rgba(255,255,255,0.85)" stroke="url(#ht-g2)" strokeWidth="1.2" />
                        <circle cx="336" cy="83" r="8" fill="rgba(236,72,153,0.12)" />
                        <circle cx="336" cy="83" r="3.5" fill="#ec4899" fillOpacity="0.7" />
                        <rect x="350" y="76" width="80" height="6" rx="3" fill="rgba(236,72,153,0.15)" />
                        <rect x="350" y="86" width="55" height="4" rx="2" fill="rgba(236,72,153,0.08)" />
                    </g>

                    {/* ── Connecting lines from chips to center ── */}
                    <line x1="164" y1="37" x2="222" y2="55" stroke="url(#ht-g1)" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 5" />
                    <line x1="164" y1="83" x2="222" y2="65" stroke="url(#ht-g2)" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 5" />
                    <line x1="316" y1="37" x2="258" y2="55" stroke="url(#ht-g1)" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 5" />
                    <line x1="316" y1="83" x2="258" y2="65" stroke="url(#ht-g2)" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 5" />
                </svg>
            </div>
        </div>
    );
}

export default HomeTitle;
