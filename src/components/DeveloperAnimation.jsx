export default function DeveloperAnimation() {
  return (
    <div className="w-full max-w-lg">
      <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffd6b3" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Background panel */}
        <rect x="10" y="10" rx="20" ry="20" width="380" height="240" fill="url(#g1)" stroke="#f0c2a0" strokeOpacity="0.15" />
        
        {/* Laptop base */}
        <g transform="translate(60,60)">
          <rect x="0" y="0" rx="8" ry="8" width="280" height="160" fill="#0f1724" />
          <rect x="12" y="12" rx="4" ry="4" width="256" height="96" fill="#071125" />

          {/* code lines */}
          <g fill="#9ae6b4" opacity="0.95">
            <rect x="24" y="26" width="200" height="8" rx="4">
              <animate attributeName="width" values="40;200;40" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="24" y="44" width="160" height="8" rx="4">
              <animate attributeName="width" values="160;80;160" dur="3.5s" repeatCount="indefinite" />
            </rect>
            <rect x="24" y="62" width="180" height="8" rx="4">
              <animate attributeName="width" values="100;180;100" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* cursor blinking */}
          <rect x="230" y="26" width="6" height="8" fill="#9ae6b4">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>

          {/* keyboard */}
          <rect x="20" y="120" width="240" height="18" rx="6" fill="#0b1220" />
        </g>

        {/* little shine circle */}
        <circle cx="320" cy="50" r="10" fill="#ff8a4c" opacity="0.12">
          <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
