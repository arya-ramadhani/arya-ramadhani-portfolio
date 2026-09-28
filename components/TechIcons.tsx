import React from "react";

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function HTML5Icon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.565-2.438L1.5 0z" fill="#E34F26" />
      <path d="M12 22.04l6.892-1.961 1.636-18.435H12V22.04z" fill="#EF652A" />
      <path d="M12 9.615H8.384l-.246-2.769H12V4.123H4.769l.738 8.215H12V9.615zm0 6.646l-.015.004-3.196-.862-.204-2.285H5.808l.399 4.477 5.793 1.608v-2.942z" fill="#EBEBEB" />
      <path d="M12 9.615v2.723h3.408l-.323 3.619-3.085.833v2.943l5.777-1.604.746-8.514H12zm0-5.492v2.723h7.023l.246-2.723H12z" fill="#FFFFFF" />
    </svg>
  );
}

export function CSS3Icon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.565-2.438L1.5 0z" fill="#1572B6" />
      <path d="M12 22.04l6.892-1.961 1.636-18.435H12V22.04z" fill="#33A9DC" />
      <path d="M12 9.608H8.385l-.246-2.769H12V4.115H4.77l.738 8.216H12V9.608zm0 6.654l-.015.004-3.196-.862-.204-2.285H5.808l.399 4.477 5.793 1.608v-2.942z" fill="#EBEBEB" />
      <path d="M12 9.608v2.723h3.408l-.323 3.619-3.085.833v2.943l5.777-1.604.746-8.514H12zm0-5.493v2.723h7.023l.246-2.723H12z" fill="#FFFFFF" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6.5 17.5c.5.8 1.4 1.3 2.5 1.3 1.4 0 2.3-.7 2.3-2.4v-7.1H9.3v7c0 .8-.4 1.1-1 1.1-.5 0-.9-.3-1.1-.7l-.7.7zm7.8-.1c.7 1 1.7 1.4 3 1.4 1.8 0 3-1 3-2.6 0-1.5-.9-2.2-2.4-2.8l-.6-.3c-1-.4-1.5-.7-1.5-1.4 0-.6.5-1.1 1.4-1.1.8 0 1.4.3 1.8.9l1.4-.9c-.7-1-1.7-1.4-3.2-1.4-1.7 0-2.9 1-2.9 2.5 0 1.4.9 2.2 2.3 2.7l.6.3c1.1.5 1.6.8 1.6 1.5 0 .7-.6 1.2-1.6 1.2-1 0-1.7-.5-2.2-1.3l-1.2.9z" fill="#000000" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M12.8 10.2H6.2V8h8.5v2.2h-1.9v8.5H10.9v-8.5h1.9zm2.4 5.9c.7.9 1.7 1.4 2.9 1.4 1.6 0 2.7-.9 2.7-2.3 0-1.4-.8-2-2.1-2.6l-.6-.2c-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1 1.3-1 .8 0 1.3.3 1.7.8l1.4-1.1c-.8-.9-1.8-1.3-3.1-1.3-1.8 0-2.9 1.1-2.9 2.5 0 1.3.8 2.1 2.2 2.6l.6.3c1 .4 1.4.8 1.4 1.4 0 .7-.6 1.1-1.5 1.1-.9 0-1.6-.4-2.1-1.1l-1.6 1.1z" fill="#FFFFFF" />
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 180 180" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path d="M149.508 157.08L69.142 54H54V125.97h12.113V69.378l72.485 93.18a90.044 90.044 0 0010.91-5.478z" fill="url(#next-grad)" />
      <path d="M115.257 54H127v47.235h-11.743V54z" fill="url(#next-grad2)" />
      <defs>
        <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-grad2" x1="121" y1="54" x2="120.799" y2="101.235" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LaravelIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M20.25 5.5l-6-3.5a1.5 1.5 0 00-1.5 0l-9 5.25a1.5 1.5 0 00-.75 1.3v10.5a1.5 1.5 0 00.75 1.3l6 3.5a1.5 1.5 0 001.5 0l9-5.25a1.5 1.5 0 00.75-1.3V6.8a1.5 1.5 0 00-.75-1.3z" fill="#FF2D20" opacity="0.15" />
      <path d="M3.75 8.5L12 13.25l8.25-4.75M12 13.25v9.5M8.25 4.5l8.25 4.75" stroke="#FF2D20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.75 2.5l5.25 3v6l-5.25-3V2.5z" fill="#FF2D20" />
      <path d="M3 7.5l9 5.2v8.8l-9-5.2V7.5z" stroke="#FF2D20" strokeWidth="1.5" />
    </svg>
  );
}

export function PHPIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
      <path d="M6.5 10h1.8c.8 0 1.4.2 1.4.9 0 .8-.6 1.1-1.4 1.1h-.9v2H6.5v-4zm.9 1.3h.8c.4 0 .6-.1.6-.4 0-.3-.2-.4-.6-.4h-.8v.8zM11.2 10h.9v1.6h1.5V10h.9v4h-.9v-1.6h-1.5V14h-.9v-4zM16.2 10h1.8c.8 0 1.4.2 1.4.9 0 .8-.6 1.1-1.4 1.1h-.9v2h-.9v-4zm.9 1.3h.8c.4 0 .6-.1.6-.4 0-.3-.2-.4-.6-.4h-.8v.8z" fill="#FFFFFF" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12 1.5L2.5 7v10L12 22.5 21.5 17V7L12 1.5z" fill="#339933" />
      <path d="M12 3.8l7 4v8.4l-7 4-7-4V7.8l7-4z" fill="#026E00" />
      <path d="M12 7.2a4.8 4.8 0 00-4.8 4.8c0 2.65 2.15 4.8 4.8 4.8a4.8 4.8 0 004.8-4.8c0-2.65-2.15-4.8-4.8-4.8zm0 7.8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#FFFFFF" />
    </svg>
  );
}

export function BootstrapIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path d="M7 6.5h4.6c1.6 0 2.8.5 2.8 1.9 0 1-.6 1.6-1.5 1.8 1.2.2 1.9.9 1.9 2.1 0 1.6-1.3 2.2-3.2 2.2H7V6.5zm2.3 3.1h2.1c.7 0 1.2-.2 1.2-.8s-.5-.8-1.2-.8H9.3v1.6zm0 3.4h2.4c.8 0 1.4-.3 1.4-.9 0-.7-.6-.9-1.4-.9H9.3v1.8z" fill="#FFFFFF" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
    </svg>
  );
}

export function MySQLIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M18.8 6.2c-.8-1.2-2.3-2.1-4.2-2.2-1.5 0-3 .7-4 1.8C9.5 7 8 8.6 6.2 9.5c-1.9.9-4 1.1-4.2 1.1.3.6 1.8 1.5 3.3 1.2 1.3-.2 2.6-.9 3.8-1.7 1.5-1.1 2.8-1.9 4.1-1.7 1.1.2 1.9 1 2.2 2 .5 1.5.1 3.5-1 4.8-1.2 1.5-3 2.4-5 2.5 1.8 1.1 4 1.4 6 .8 2.8-.8 4.8-3.1 5.3-5.9.4-2.4-.2-5.1-1.9-6.4z" fill="#00758F" />
      <path d="M8.2 15.5c-.8.8-1.8 1.3-2.9 1.3-1 0-1.9-.4-2.5-1.1.8-.1 1.7-.5 2.4-1.1.7-.6 1.3-1.4 1.9-2.2.3 1.1.7 2.2 1.1 3.1z" fill="#F29111" />
    </svg>
  );
}

export function MongoDBIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12 1.5c-.2 0-.4.1-.5.3C10.2 3.6 6.5 8.9 6.5 13.8c0 4.1 2.6 7.6 5.3 8.7.2.1.4 0 .5-.1.1 0 .2-.1.2-.2 2.7-1.1 5.3-4.6 5.3-8.7 0-4.9-3.7-10.2-5-12-.1-.2-.3-.3-.5-.3z" fill="#47A248" />
      <path d="M12 2.2v19.7c2.4-1 4.8-4.2 4.8-8.1 0-4.5-3.4-9.6-4.8-11.6z" fill="#499D4A" />
      <path d="M12 18.5c-.2 0-.3-.1-.3-.3v-12c0-.2.1-.3.3-.3s.3.1.3.3v12c0 .2-.1.3-.3.3z" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

export function RestApiIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="4" stroke="#10B981" strokeWidth="1.8" />
      <circle cx="7" cy="12" r="2" fill="#10B981" />
      <circle cx="17" cy="12" r="2" fill="#10B981" />
      <path d="M9 12h6M12 9v6" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1" fill="#10B981" />
      <circle cx="12" cy="17" r="1" fill="#10B981" />
    </svg>
  );
}

export function PostgreSQLIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.1 0-5.5-2.2-5.5-5.3 0-1.8.8-3.4 2.1-4.4l1.2 1.4c-.9.7-1.4 1.8-1.4 3 0 2 1.6 3.4 3.6 3.4 1.7 0 3-1.1 3.4-2.6H13v-1.9h5.3c.1.4.1.7.1 1.1 0 3-2.3 5.3-5.4 5.3z" fill="#336791" />
    </svg>
  );
}

export function ArduinoIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M16.5 6.5C13.5 6.5 12 9 12 12c0-3-1.5-5.5-4.5-5.5C4.2 6.5 1.5 9 1.5 12s2.7 5.5 6 5.5c3 0 4.5-2.5 4.5-5.5 0 3 1.5 5.5 4.5 5.5 3.3 0 6-2.5 6-5.5s-2.7-5.5-6-5.5zm-9 7.3c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8zm9 0c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8z" fill="#00979C" />
      <path d="M5.5 12h4M14.5 12h4M16.5 10v4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ESP32Icon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2.5" fill="#E7352C" />
      <rect x="7" y="6" width="10" height="7" rx="1.5" fill="#231F20" />
      <circle cx="12" cy="9.5" r="1.5" fill="#E7352C" />
      <path d="M8 15h8M8 17h5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      {/* Pin headers */}
      <path d="M2 7h3M2 10h3M2 13h3M2 16h3M19 7h3M19 10h3M19 13h3M19 16h3" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BlynkIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="5" fill="#24C48E" />
      <path d="M6 7.5h6a3.5 3.5 0 012.5 5.95A3.5 3.5 0 0112 19.5H6V7.5zm3.5 3.5v2h2.5a1 1 0 000-2H9.5zm0 4v2h2.5a1 1 0 000-2H9.5z" fill="#FFFFFF" />
    </svg>
  );
}

export function PythonIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M11.91 2c-5.48 0-5.14 2.37-5.14 2.37l.01 2.45h5.21v.74H4.55S2 7.27 2 12.82c0 5.54 2.23 5.34 2.23 5.34h1.33v-1.87s-.07-2.23 2.19-2.23h5.27s2.12.04 2.12-2.07V4.07S15.63 2 11.91 2zm-1.48 1.48a.74.74 0 110 1.48.74.74 0 010-1.48z" fill="#3776AB" />
      <path d="M12.09 22c5.48 0 5.14-2.37 5.14-2.37l-.01-2.45h-5.21v-.74h7.44s2.55.29 2.55-5.26c0-5.54-2.23-5.34-2.23-5.34h-1.33v1.87s.07 2.23-2.19 2.23h-5.27s-2.12-.04-2.12 2.07v10.82S8.37 22 12.09 22zm1.48-1.48a.74.74 0 110-1.48.74.74 0 010 1.48z" fill="#FFD43B" />
    </svg>
  );
}

export function OpenCVIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      {/* OpenCV 3 Interlocking Circles */}
      <circle cx="12" cy="7" r="4.2" stroke="#EA4335" strokeWidth="2.4" fill="none" strokeDasharray="20 7" strokeDashoffset="2" />
      <circle cx="7.2" cy="15.5" r="4.2" stroke="#34A853" strokeWidth="2.4" fill="none" strokeDasharray="20 7" strokeDashoffset="10" />
      <circle cx="16.8" cy="15.5" r="4.2" stroke="#4285F4" strokeWidth="2.4" fill="none" strokeDasharray="20 7" strokeDashoffset="18" />
    </svg>
  );
}

export function TensorFlowIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12 2.5L3.5 7.4v9.8l4.2-2.4V8.5L12 6.1l4.3 2.4v6.3l4.2 2.4V7.4L12 2.5z" fill="#FF6F00" />
      <path d="M12 11.2l-3.2 1.8v6.2l3.2 1.9 3.2-1.9V13l-3.2-1.8z" fill="#FFA800" />
      <path d="M12 6.1l-4.3 2.4v6.3l4.3-2.4V6.1z" fill="#FF8F00" />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M21.6 10.9L13.1 2.4a1.6 1.6 0 00-2.2 0l-1.9 1.9 2.8 2.8a1.9 1.9 0 012.4 2.4l2.7 2.7a1.9 1.9 0 011.8 3.2 1.9 1.9 0 01-2.7-2.7l-2.6-2.6v5.8a1.9 1.9 0 11-1.6 0V9.4a1.9 1.9 0 01-1-2.5L8 4.1 2.4 9.7a1.6 1.6 0 000 2.2l8.5 8.5a1.6 1.6 0 002.2 0l8.5-8.5a1.6 1.6 0 000-2.3z" fill="#F05032" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function VSCodeIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M17.5 2.1l4.3 2.1a1 1 0 01.6.9v13.8a1 1 0 01-.6.9l-4.3 2.1a1 1 0 01-1.3-.4l-6.8-5.3-4.8 3.7a.8.8 0 01-1.2-.4l-.8-1.5a.8.8 0 01.2-.9l4.9-3.9L2.8 9.3a.8.8 0 01-.2-.9l.8-1.5a.8.8 0 011.2-.4l4.8 3.7 6.8-5.3a1 1 0 011.3.4z" fill="#007ACC" />
      <path d="M17.8 4.2v15.6l3.5-1.7V5.9l-3.5-1.7z" fill="#1F9CF0" />
      <path d="M12.9 8.2l-3.5 2.7 3.5 2.7 4.9-3.8-4.9-1.6z" fill="#0065A9" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M8 2a4 4 0 000 8h4V2H8z" fill="#F24E1E" />
      <path d="M12 2h4a4 4 0 010 8h-4V2z" fill="#FF7262" />
      <path d="M12 10H8a4 4 0 104 4v-4z" fill="#0ACF83" />
      <path d="M8 18a4 4 0 004 4v-4H8z" fill="#1ABCFE" />
      <path d="M12 10h4a4 4 0 010 8h-4v-8z" fill="#A259FF" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M12 6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-3.2 8.3c-.6.3-1 .9-1 1.6v.6h8.4v-.6c0-.7-.4-1.3-1-1.6l-3.2-1.6-3.2 1.6z" fill="#FFFFFF" />
      <path d="M7 11.5l2-1.5M17 11.5l-2-1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function DockerIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      {/* Containers */}
      <rect x="5.5" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="8.3" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="11.1" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="8.3" y="5.5" width="2.2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="11.1" y="5.5" width="2.2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="13.9" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
      {/* Whale body */}
      <path d="M22.5 11.5c-.5-.3-1.8-.4-2.7.2-.3-.8-1-1.4-1.9-1.6-.2 0-.4 0-.6.1-.1-1.2-.8-1.7-.8-1.7s-1 .5-1.3 1.8h-9c-.3 0-.6.1-.8.2C4.1 11 3.5 12 3 13.5c-.3 1-.3 2.1.2 3.1 1 2 3.2 3.4 5.8 3.4 5 0 9.2-2.8 10.8-6.8 1.4-.2 2.6-.9 2.7-1.7z" fill="#2496ED" />
      <circle cx="6.5" cy="15" r="0.6" fill="#FFFFFF" />
    </svg>
  );
}

export function JavaIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M8.5 18.5c2.5.3 5.5.3 7 0 .5-.1.8.2.7.5-.3.7-2.6 1.2-5 1.2-3 0-5.5-.5-5.3-1.2.1-.3.5-.6 2.6-.5z" fill="#E76F00" />
      <path d="M7 16c2.5.2 6 .2 7.7-.1.4-.1.8.2.6.5-.5.7-3.1 1.2-5.7 1.2-3.1 0-5.4-.5-5.2-1.1.1-.3.8-.6 2.6-.5z" fill="#5382A1" />
      <path d="M11 11.5c1.5-1.5 2-2.5 1-4.5-.5-1-1.5-2-.5-3.5.5 1 1 2 .5 3s-.5 2 1.5 3.5c-1 .5-2 1-2.5 1.5z" fill="#E76F00" />
      <path d="M14 11c1-1 1.5-2 .5-3.5-.5-1-1-1.5-.5-2.5.5.8.8 1.5.5 2.2s-.5 1.5 1 2.8c-.7.3-1.2.6-1.5 1z" fill="#5382A1" />
    </svg>
  );
}

// ── Spec 2: IoT & Embedded Systems Specialized Icons ──
export function SensorsIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3" fill="#06B6D4" />
      <path d="M8.5 8.5a5 5 0 000 7M15.5 8.5a5 5 0 010 7" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.5 5.5a9 9 0 000 13M18.5 5.5a9 9 0 010 13" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export function ServoIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="5" y="8" width="14" height="12" rx="2" fill="#F59E0B" />
      <circle cx="12" cy="7" r="3" fill="#D97706" />
      <path d="M12 4v3M15 7h-3M9 14h6M9 16h4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export function EmbeddedSystemsIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2.5" fill="#10B981" />
      <rect x="8" y="8" width="8" height="8" rx="1.5" fill="#064E3B" />
      <circle cx="10" cy="10" r="1" fill="#34D399" />
      {/* IC Pins */}
      <path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IoTCommunicationIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="18" r="2.5" fill="#8B5CF6" />
      <path d="M12 18V8M9 5l3-3 3 3" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11a10 10 0 0114 0" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M7.5 13.5a6.5 6.5 0 019 0" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ── Spec 3: AI & Computer Vision Specialized Icons ──
export function OCRIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M4 8V5a1 1 0 011-1h3M20 8V5a1 1 0 00-1-1h-3M4 16v3a1 1 0 001 1h3M20 16v3a1 1 0 01-1 1h-3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12h8M12 8v8" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="7.5" y="7.5" width="9" height="9" rx="1.5" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

export function TesseractIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z" stroke="#6366F1" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 7l4 2.25v5.5L12 17l-4-2.25v-5.5L12 7z" fill="#6366F1" fillOpacity="0.25" stroke="#818CF8" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 2v5M20 6.5l-4 2.75M20 17.5l-4-2.75M12 22v-5M4 17.5l4-2.75M4 6.5l4 2.75" stroke="#6366F1" strokeWidth="1.3" />
    </svg>
  );
}

export function ComputerVisionIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="#EC4899" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="#EC4899" />
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#F472B6" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ImageProcessingIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#14B8A6" strokeWidth="1.8" />
      <circle cx="8.5" cy="8.5" r="2" fill="#14B8A6" />
      <path d="M21 15l-5-5-8 8" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14l3-3 4 4" stroke="#2DD4BF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Spec 4: UI/UX Design Specialized Icons ──
export function WireframingIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#64748B" strokeWidth="1.8" />
      <line x1="3" y1="8" x2="21" y2="8" stroke="#64748B" strokeWidth="1.5" />
      <line x1="9" y1="8" x2="9" y2="21" stroke="#64748B" strokeWidth="1.5" />
      <rect x="12" y="11" width="6" height="3" fill="#64748B" fillOpacity="0.4" />
      <rect x="12" y="16" width="6" height="2" fill="#64748B" fillOpacity="0.25" />
    </svg>
  );
}

export function PrototypingIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="#8B5CF6" strokeWidth="1.8" />
      <line x1="10" y1="5" x2="14" y2="5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1.2" fill="#8B5CF6" />
      <path d="M12 9l3 3-1.5.5 1.5 2-1 .8-1.5-2L11 14V9z" fill="#A78BFA" />
    </svg>
  );
}

export function UserFlowIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="5" cy="6" r="3" fill="#F97316" />
      <circle cx="19" cy="6" r="3" fill="#F97316" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" fill="#EA580C" />
      <path d="M8 6h8M5 9v3a3 3 0 003 3h1M19 9v3a3 3 0 01-3 3h-1" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function UIDesignIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M12 2l7 7-9.5 9.5a2.5 2.5 0 01-1.8.7H4v-3.7a2.5 2.5 0 01.7-1.8L12 2z" stroke="#EC4899" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="17.5" cy="5.5" r="1.5" fill="#F472B6" />
      <path d="M9 7l5 5M4 21h16" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function UXDesignIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="4" stroke="#06B6D4" strokeWidth="1.8" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 8h4M12 6v4" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19" cy="5" r="2" fill="#06B6D4" />
    </svg>
  );
}

export function DesignSystemIcon({ className = "w-6 h-6", size = 24, ...props }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#A855F7" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#A855F7" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#A855F7" strokeWidth="1.8" />
      <circle cx="17.5" cy="17.5" r="3.5" fill="#C084FC" />
    </svg>
  );
}

// Icon dictionary lookup helper
export const TechIconMap: Record<string, React.FC<TechIconProps>> = {
  HTML5: HTML5Icon,
  HTML: HTML5Icon,
  CSS3: CSS3Icon,
  CSS: CSS3Icon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
  "Next.js": NextjsIcon,
  NextJS: NextjsIcon,
  Laravel: LaravelIcon,
  PHP: PHPIcon,
  "Node.js": NodejsIcon,
  NodeJS: NodejsIcon,
  Bootstrap: BootstrapIcon,
  "Tailwind CSS": TailwindIcon,
  Tailwind: TailwindIcon,
  MySQL: MySQLIcon,
  MongoDB: MongoDBIcon,
  "REST API": RestApiIcon,
  RESTful: RestApiIcon,
  PostgreSQL: PostgreSQLIcon,
  Arduino: ArduinoIcon,
  ESP32: ESP32Icon,
  Blynk: BlynkIcon,
  Python: PythonIcon,
  OpenCV: OpenCVIcon,
  TensorFlow: TensorFlowIcon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  "VS Code": VSCodeIcon,
  Figma: FigmaIcon,
  Postman: PostmanIcon,
  Docker: DockerIcon,
  Java: JavaIcon,
  // Spec 2: IoT & Embedded
  Sensors: SensorsIcon,
  Sensor: SensorsIcon,
  Servo: ServoIcon,
  "Embedded Systems": EmbeddedSystemsIcon,
  "IoT Communication": IoTCommunicationIcon,
  // Spec 3: AI & Computer Vision
  OCR: OCRIcon,
  Tesseract: TesseractIcon,
  "Computer Vision": ComputerVisionIcon,
  "Image Processing": ImageProcessingIcon,
  // Spec 4: UI/UX Design
  Wireframing: WireframingIcon,
  Prototyping: PrototypingIcon,
  "User Flow": UserFlowIcon,
  "UI Design": UIDesignIcon,
  "UX Design": UXDesignIcon,
  "Design System": DesignSystemIcon,
};

export function TechIcon({
  name,
  className = "w-6 h-6",
  size = 24,
  ...props
}: { name: string } & TechIconProps) {
  const Component = TechIconMap[name];
  if (!Component) {
    // Graceful fallback: render clean code symbol
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  return <Component className={className} size={size} {...props} />;
}
