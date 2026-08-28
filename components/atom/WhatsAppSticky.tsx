'use client';

import Link from 'next/link';

export function WhatsAppSticky() {
  const phoneNumber = '919876543210'; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(
    'Hi! I\'m interested in Agoo Dental. Can you tell me more?'
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] group"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping duration-1000" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 ease-out">
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.744 3.07 9.378L1.06 31.27l6.102-1.966A15.884 15.884 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0Zm9.336 22.594c-.39 1.098-1.932 2.01-3.172 2.276-.85.18-1.96.324-5.696-1.224-4.78-1.982-7.854-6.836-8.092-7.15-.228-.314-1.92-2.558-1.92-4.878 0-2.32 1.216-3.46 1.646-3.934.39-.43 1.026-.628 1.634-.628.198 0 .376.01.536.018.432.018.648.042.934.724.354.852 1.218 2.97 1.326 3.184.108.214.214.492.076.788-.128.304-.242.44-.456.688-.214.25-.418.44-.632.71-.196.234-.416.486-.178.934.238.448 1.058 1.746 2.272 2.828 1.564 1.394 2.88 1.826 3.292 2.028.31.152.68.128.928-.13.314-.33.702-.878 1.098-1.418.282-.386.636-.434.978-.294.348.134 2.196 1.036 2.572 1.224.376.19.626.284.718.44.09.156.09.898-.3 1.996Z" />
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg text-xs font-semibold text-foreground shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </Link>
  );
}
