'use client'

import React, { useState } from 'react'

/**
 * Super Interactive Animated Dental SVG Vectors.
 * Includes hover animations, click ripple/sparkle effects, dynamic glowing, and floating particles.
 */

export function AnimatedTooth({ className = '', size = 120, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (!interactive) return
    setClicked(true)
    setTimeout(() => setClicked(false), 800)
  }

  return (
    <div
      onClick={handleClick}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-115 hover:rotate-3 group ${className}`}
      title="Click for Tooth Sparkle!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-float drop-shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-all ${clicked ? 'scale-125 duration-150' : ''}`}
      >
        {/* Outer Glow Circle */}
        <circle cx="60" cy="55" r="48" fill="url(#toothGlow)" opacity="0.35" className="group-hover:opacity-60 transition-opacity">
          <animate attributeName="r" values="42;50;42" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Pulse Waves on Click */}
        {clicked && (
          <circle cx="60" cy="55" r="55" fill="none" stroke="#00d4aa" strokeWidth="3" opacity="0.8">
            <animate attributeName="r" values="30;60" dur="0.6s" repeatCount="1" />
            <animate attributeName="opacity" values="1;0" dur="0.6s" repeatCount="1" />
          </circle>
        )}

        {/* Main Tooth Body */}
        <path
          d="M40 30C40 20 50 12 60 12C70 12 80 20 80 30V55C80 62 77 68 73 72L70 90C69 95 65 98 60 98C55 98 51 95 50 90L47 72C43 68 40 62 40 55V30Z"
          fill="url(#toothFill)"
          stroke="url(#toothStroke)"
          strokeWidth="2.5"
          className="transition-all duration-300 group-hover:stroke-[3px]"
        />

        {/* Glossy Reflection Highlight */}
        <ellipse cx="52" cy="30" rx="6" ry="4" fill="white" opacity="0.75">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <path d="M46 32 C 48 24, 54 20, 60 20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* Tooth Roots */}
        <line x1="53" y1="72" x2="51" y2="88" stroke="url(#toothStroke)" strokeWidth="2" opacity="0.6" />
        <line x1="67" y1="72" x2="69" y2="88" stroke="url(#toothStroke)" strokeWidth="2" opacity="0.6" />

        {/* Interactive Crown Sparkle Stars */}
        <g className="transition-transform duration-300 group-hover:scale-125">
          <path d="M78 22 L80 26 L84 28 L80 30 L78 34 L76 30 L72 28 L76 26 Z" fill="#67e8f9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M36 45 L37.5 47.5 L40 49 L37.5 50.5 L36 53 L34.5 50.5 L32 49 L34.5 47.5 Z" fill="#00d4aa">
            <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.2s" repeatCount="indefinite" />
          </path>
        </g>

        <defs>
          <radialGradient id="toothGlow" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#00d4aa" />
            <stop offset="1" stopColor="#0891b2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="toothFill" x1="40" y1="12" x2="80" y2="98">
            <stop stopColor="#f0fdfa" />
            <stop offset="0.5" stopColor="#ccfbf1" />
            <stop offset="1" stopColor="#99f6e4" />
          </linearGradient>
          <linearGradient id="toothStroke" x1="40" y1="12" x2="80" y2="98">
            <stop stopColor="#00d4aa" />
            <stop offset="1" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </svg>
      {clicked && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce pointer-events-none z-30">
          ✨ Healthy!
        </span>
      )}
    </div>
  )
}

export function AnimatedDentalMirror({ className = '', size = 100, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [rotated, setRotated] = useState(false)

  return (
    <div
      onClick={() => interactive && setRotated(!rotated)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-rotate-12 group ${className}`}
      title="Click to rotate mirror!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-500 ${rotated ? 'rotate-45' : ''}`}
        style={{ animation: 'float 7s ease-in-out infinite' }}
      >
        {/* Mirror Head Outer Ring */}
        <circle cx="40" cy="30" r="22" fill="url(#mirrorGrad)" stroke="#0891b2" strokeWidth="2.5" className="group-hover:stroke-emerald-400 transition-colors">
          <animate attributeName="r" values="21;23;21" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Mirror Reflective Grid */}
        <circle cx="40" cy="30" r="17" fill="#06b6d4" opacity="0.15" />
        
        {/* Reflection Shine Beam */}
        <path d="M28 20 Q40 18 52 32" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
        </path>
        <circle cx="35" cy="24" r="5" fill="white" opacity="0.5" />

        {/* Metallic Handle */}
        <rect x="38" y="48" width="5" height="44" rx="2.5" fill="url(#handleGrad)" className="group-hover:fill-emerald-600 transition-colors" />
        <line x1="40.5" y1="52" x2="40.5" y2="88" stroke="white" strokeWidth="1" opacity="0.4" />

        <defs>
          <linearGradient id="mirrorGrad" x1="20" y1="10" x2="60" y2="50">
            <stop stopColor="#cffafe" />
            <stop offset="0.5" stopColor="#67e8f9" />
            <stop offset="1" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="handleGrad" x1="38" y1="48" x2="43" y2="92">
            <stop stopColor="#cbd5e1" />
            <stop offset="0.5" stopColor="#94a3b8" />
            <stop offset="1" stopColor="#475569" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function AnimatedToothbrush({ className = '', size = 110, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [bubbles, setBubbles] = useState(false)

  const handleBrush = () => {
    if (!interactive) return
    setBubbles(true)
    setTimeout(() => setBubbles(false), 1200)
  }

  return (
    <div
      onClick={handleBrush}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-115 hover:-translate-y-2 group ${className}`}
      title="Click to foam bubbles!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 5s ease-in-out infinite 1s' }}
      >
        {/* Brush Head Bristles */}
        <rect x="15" y="15" width="32" height="13" rx="4" fill="#00d4aa" opacity="0.9" className="group-hover:fill-emerald-400 transition-colors" />

        {/* Individual Bristle Lines */}
        {[18, 22, 26, 30, 34, 38, 42].map((x) => (
          <line key={x} x1={x} y1="7" x2={x} y2="15" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        ))}

        {/* Ergonomic Handle */}
        <rect x="45" y="17" width="55" height="9" rx="4.5" fill="url(#brushHandle)" />
        
        {/* Soft Rubber Grip Details */}
        <rect x="62" y="19" width="18" height="5" rx="2.5" fill="#67e8f9" opacity="0.5" />
        <line x1="66" y1="19" x2="66" y2="24" stroke="white" strokeWidth="1" opacity="0.8" />
        <line x1="71" y1="19" x2="71" y2="24" stroke="white" strokeWidth="1" opacity="0.8" />
        <line x1="76" y1="19" x2="76" y2="24" stroke="white" strokeWidth="1" opacity="0.8" />

        {/* Animated Foam / Bubbles */}
        {(bubbles || true) && (
          <g className={bubbles ? 'animate-ping' : ''}>
            <circle cx="20" cy="4" r="2" fill="#67e8f9">
              <animate attributeName="cy" values="4;1;4" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="28" cy="2" r="3" fill="#99f6e4">
              <animate attributeName="cy" values="2;-2;2" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="36" cy="5" r="2.5" fill="#00d4aa">
              <animate attributeName="cy" values="5;2;5" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        <defs>
          <linearGradient id="brushHandle" x1="45" y1="17" x2="100" y2="26">
            <stop stopColor="#0891b2" />
            <stop offset="0.5" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#0e7490" />
          </linearGradient>
        </defs>
      </svg>
      {bubbles && (
        <span className="absolute -top-5 left-2 bg-cyan-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg pointer-events-none animate-pulse">
          🧼 Fresh!
        </span>
      )}
    </div>
  )
}

export function AnimatedDentalChair({ className = '', size = 140, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [recline, setRecline] = useState(false)

  return (
    <div
      onClick={() => interactive && setRecline(!recline)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-110 group ${className}`}
      title="Click to adjust chair recline!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 8s ease-in-out infinite 0.5s' }}
      >
        {/* Sturdy Heavy Base */}
        <rect x="50" y="116" width="40" height="9" rx="4.5" fill="#334155" />
        <rect x="65" y="88" width="10" height="30" rx="3" fill="#64748b" />

        {/* Chair Cushion Seat */}
        <path
          d={recline ? "M30 84C30 79 35 74 40 74H100C105 74 110 79 110 84V92H30V84Z" : "M30 80C30 75 35 70 40 70H100C105 70 110 75 110 80V90H30V80Z"}
          fill="url(#chairSeat)"
          className="transition-all duration-500"
        />

        {/* Backrest Recline Movement */}
        <path
          d={recline ? "M18 78L28 35C29 32 32 30 35 30H50C53 30 55 32 55 35V78H18Z" : "M25 70L35 25C36 22 39 20 42 20H55C58 20 60 22 60 25V70H25Z"}
          fill="url(#chairBack)"
          className="transition-all duration-500"
        />

        {/* Headrest Cushion */}
        <ellipse cx={recline ? 40 : 48} cy={recline ? 25 : 18} rx="15" ry="8" fill="#0891b2" opacity="0.9" className="transition-all duration-500" />

        {/* Padded Armrest */}
        <rect x="106" y="55" width="22" height="7" rx="3.5" fill="#64748b" />

        {/* Overhead Exam Light & Glow Beam */}
        <g className="group-hover:opacity-100 opacity-80 transition-opacity">
          <circle cx="105" cy="25" r="12" fill="url(#lightGlow)">
            <animate attributeName="opacity" values="0.5;0.95;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <path d="M98 33 L80 80 L120 80 Z" fill="#fef08a" opacity="0.12" />
        </g>

        <defs>
          <linearGradient id="chairSeat" x1="30" y1="70" x2="110" y2="90">
            <stop stopColor="#0891b2" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="chairBack" x1="25" y1="20" x2="60" y2="70">
            <stop stopColor="#0e7490" />
            <stop offset="1" stopColor="#0891b2" />
          </linearGradient>
          <radialGradient id="lightGlow" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#fef08a" />
            <stop offset="1" stopColor="#fef08a" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export function AnimatedShield({ className = '', size = 100, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [shieldActive, setShieldActive] = useState(false)

  return (
    <div
      onClick={() => interactive && setShieldActive(!shieldActive)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-115 group ${className}`}
      title="Click to activate security pulse!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 6s ease-in-out infinite 2s' }}
      >
        {/* Pulsing Energy Shield Background */}
        <path
          d="M50 8L15 25V50C15 72 30 88 50 95C70 88 85 72 85 50V25L50 8Z"
          fill="url(#shieldGlow)"
          opacity={shieldActive ? "0.6" : "0.25"}
          className="transition-opacity duration-300"
        >
          <animate attributeName="opacity" values="0.2;0.45;0.2" dur="2.5s" repeatCount="indefinite" />
        </path>

        {/* Metallic Shield Body */}
        <path d="M50 12L20 27V50C20 68 33 82 50 88C67 82 80 68 80 50V27L50 12Z" fill="url(#shieldFill)" stroke="url(#shieldStroke)" strokeWidth="2.5" />

        {/* Dynamic Verification Checkmark */}
        <path
          d="M35 50L46 61L66 37"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-md"
        />

        {/* Security Sparkles */}
        <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
        </circle>

        <defs>
          <radialGradient id="shieldGlow" cx="0.5" cy="0.4" r="0.6">
            <stop stopColor="#f59e0b" />
            <stop offset="1" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shieldFill" x1="20" y1="12" x2="80" y2="88">
            <stop stopColor="#f59e0b" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="20" y1="12" x2="80" y2="88">
            <stop stopColor="#fbbf24" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
      {shieldActive && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce pointer-events-none">
          🛡️ HIPAA 100%
        </span>
      )}
    </div>
  )
}

export function AnimatedHeartPulse({ className = '', size = 100, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [fastPulse, setFastPulse] = useState(false)

  return (
    <div
      onClick={() => interactive && setFastPulse(!fastPulse)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-115 group ${className}`}
      title="Click to boost heart beat speed!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}
      >
        {/* Heart Outer Glow */}
        <path
          d="M50 85L15 50C5 38 10 20 25 18C35 16 45 25 50 32C55 25 65 16 75 18C90 20 95 38 85 50L50 85Z"
          fill="url(#heartFill)"
          stroke="#f43f5e"
          strokeWidth="2.5"
          className="drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]"
        >
          <animate
            attributeName="d"
            dur={fastPulse ? "0.6s" : "1.3s"}
            repeatCount="indefinite"
            values="M50 85L15 50C5 38 10 20 25 18C35 16 45 25 50 32C55 25 65 16 75 18C90 20 95 38 85 50L50 85Z;
                    M50 82L18 50C8 40 12 22 26 20C36 18 45 27 50 33C55 27 64 18 74 20C88 22 92 40 82 50L50 82Z;
                    M50 85L15 50C5 38 10 20 25 18C35 16 45 25 50 32C55 25 65 16 75 18C90 20 95 38 85 50L50 85Z"
          />
        </path>

        {/* Electrocardiogram Heartbeat Line */}
        <polyline
          points="10,53 28,53 36,36 44,68 52,44 58,53 90,53"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        >
          <animate attributeName="stroke-dasharray" values="0 200;200 0" dur={fastPulse ? "1s" : "2s"} repeatCount="indefinite" />
        </polyline>

        <defs>
          <linearGradient id="heartFill" x1="15" y1="18" x2="85" y2="85">
            <stop stopColor="#fb7185" />
            <stop offset="1" stopColor="#e11d48" />
          </linearGradient>
        </defs>
      </svg>
      {fastPulse && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-ping pointer-events-none">
          💓 120 BPM
        </span>
      )}
    </div>
  )
}

export function AnimatedDNAHelix({ className = '', size = 120, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [speed, setSpeed] = useState(false)

  return (
    <div
      onClick={() => interactive && setSpeed(!speed)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-110 group ${className}`}
      title="Click to spin DNA!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 9s ease-in-out infinite 3s' }}
      >
        <path d="M30 10 Q60 30 30 50 Q0 70 30 90 Q60 110 30 120" stroke="#00d4aa" strokeWidth="3" fill="none" opacity="0.8">
          <animate
            attributeName="d"
            dur={speed ? "1.5s" : "4s"}
            repeatCount="indefinite"
            values="M30 10 Q60 30 30 50 Q0 70 30 90 Q60 110 30 120;
                    M30 10 Q0 30 30 50 Q60 70 30 90 Q0 110 30 120;
                    M30 10 Q60 30 30 50 Q0 70 30 90 Q60 110 30 120"
          />
        </path>

        <path d="M90 10 Q60 30 90 50 Q120 70 90 90 Q60 110 90 120" stroke="#0891b2" strokeWidth="3" fill="none" opacity="0.8">
          <animate
            attributeName="d"
            dur={speed ? "1.5s" : "4s"}
            repeatCount="indefinite"
            values="M90 10 Q60 30 90 50 Q120 70 90 90 Q60 110 90 120;
                    M90 10 Q120 30 90 50 Q60 70 90 90 Q60 110 90 120;
                    M90 10 Q60 30 90 50 Q120 70 90 90 Q60 110 90 120"
          />
        </path>

        {[30, 50, 70, 90].map((y, i) => (
          <line key={i} x1="40" y1={y} x2="80" y2={y} stroke="#67e8f9" strokeWidth="2" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </line>
        ))}

        {[30, 50, 70, 90].map((y, i) => (
          <g key={`nodes-${i}`}>
            <circle cx={i % 2 === 0 ? 35 : 45} cy={y} r="3.5" fill="#00d4aa" opacity="0.9">
              <animate attributeName="r" values="2.5;5;2.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={i % 2 === 0 ? 85 : 75} cy={y} r="3.5" fill="#0891b2" opacity="0.9">
              <animate attributeName="r" values="2.5;5;2.5" dur="2s" begin={`${i * 0.3 + 1}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  )
}

/** New Interactive Vector 1: Clear Aligner / Braces */
export function AnimatedAligner({ className = '', size = 110, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [glow, setGlow] = useState(false)

  return (
    <div
      onClick={() => interactive && setGlow(!glow)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-115 group ${className}`}
      title="Click to reveal crystal alignment shine!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 6.5s ease-in-out infinite 0.8s' }}
      >
        <path
          d="M20 70 C20 30, 90 30, 90 70 Q90 80 80 75 C70 40, 40 40, 30 75 Q20 80 20 70 Z"
          fill="url(#alignerGrad)"
          stroke="#06b6d4"
          strokeWidth="2"
          className="drop-shadow-lg"
        >
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Tooth slot ridges */}
        {[30, 42, 55, 68, 80].map((x, i) => (
          <circle key={i} cx={x} cy={50 + (i === 2 ? -8 : i === 1 || i === 3 ? -5 : 0)} r="5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
        ))}

        <defs>
          <linearGradient id="alignerGrad" x1="20" y1="30" x2="90" y2="75">
            <stop stopColor="#e0f2fe" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="1" stopColor="#0284c7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      {glow && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse pointer-events-none">
          💎 Perfect Fit!
        </span>
      )}
    </div>
  )
}

/** New Interactive Vector 2: Dental Implant Precision Scale */
export function AnimatedImplant({ className = '', size = 110, interactive = true }: { className?: string; size?: number; interactive?: boolean }) {
  const [active, setActive] = useState(false)

  return (
    <div
      onClick={() => interactive && setActive(!active)}
      className={`relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-115 group ${className}`}
      title="Click to check Titanium Implant stability!"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'float 7.5s ease-in-out infinite 2.2s' }}
      >
        {/* Implant Crown Base */}
        <path d="M35 25 C35 15, 75 15, 75 25 V40 H35 V25 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        
        {/* Titanium Abutment Collar */}
        <rect x="42" y="40" width="26" height="10" rx="2" fill="#64748b" />
        
        {/* Screw Threads Body */}
        <path d="M45 50 H65 L62 56 H48 L45 50 Z" fill="#475569" />
        <path d="M46 58 H64 L61 64 H49 L46 58 Z" fill="#334155" />
        <path d="M47 66 H63 L60 72 H50 L47 66 Z" fill="#475569" />
        <path d="M48 74 H62 L59 80 H51 L48 74 Z" fill="#334155" />
        <path d="M49 82 L55 92 L61 82 Z" fill="#00d4aa" />

        <defs>
          <linearGradient id="implantGrad" x1="35" y1="15" x2="75" y2="92">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0369a1" />
          </linearGradient>
        </defs>
      </svg>
      {active && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md pointer-events-none animate-bounce">
          ⚡ 99.8% Osseo-Integrated
        </span>
      )}
    </div>
  )
}

export function FloatingParticles({ className = '' }: { className?: string }) {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    cx: 5 + Math.random() * 90,
    cy: 5 + Math.random() * 90,
    r: 1.2 + Math.random() * 2.8,
    dur: 3 + Math.random() * 4,
    delay: Math.random() * 3,
    color: ['#00d4aa', '#0891b2', '#67e8f9', '#06b6d4', '#5eead4', '#f59e0b'][Math.floor(Math.random() * 6)]
  }))

  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {particles.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.color} opacity="0.45">
          <animate
            attributeName="cy"
            values={`${p.cy};${p.cy - 18};${p.cy}`}
            dur={`${p.dur}s`}
            begin={`${p.delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.7;0.1"
            dur={`${p.dur}s`}
            begin={`${p.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}
