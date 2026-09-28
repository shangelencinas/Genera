const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. GENERA LOGO (Exact reproduction of uploaded LOGO GENERA - AUTOMOTRIZ.png)
async function generateGeneraLogo() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 540" width="1600" height="540">
    <defs>
      <linearGradient id="treadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#CBD5E1"/>
        <stop offset="50%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#64748B"/>
      </linearGradient>
      <linearGradient id="treadInner" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#64748B"/>
      </linearGradient>
    </defs>

    <!-- MONOGRAM G ON THE LEFT -->
    <g transform="translate(60, 40)">
      <!-- Outer Dark Slate Ring of G -->
      <path d="M 230 70 A 170 170 0 1 0 350 250 L 210 250"
            fill="none" stroke="#4A4E57" stroke-width="38" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Inner lower circuit arm -->
      <path d="M 210 250 L 210 320 A 100 100 0 0 1 120 230 L 175 230"
            fill="none" stroke="#4A4E57" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Upper diagonal circuit connector -->
      <path d="M 140 160 L 250 80"
            fill="none" stroke="#4A4E57" stroke-width="26" stroke-linecap="round"/>

      <!-- Node 1: Top Left Inner -->
      <circle cx="140" cy="160" r="32" fill="#FFFFFF" stroke="#4A4E57" stroke-width="12"/>
      <circle cx="140" cy="160" r="18" fill="#104EA6"/>

      <!-- Node 2: Center Lower -->
      <circle cx="210" cy="250" r="28" fill="#FFFFFF" stroke="#4A4E57" stroke-width="12"/>
      <circle cx="210" cy="250" r="15" fill="#104EA6"/>

      <!-- Node 3: Bottom Left Terminal -->
      <circle cx="85" cy="310" r="24" fill="#FFFFFF" stroke="#4A4E57" stroke-width="10"/>
      <circle cx="85" cy="310" r="12" fill="#104EA6"/>

      <!-- Terminal dot on inner arm -->
      <circle cx="270" cy="340" r="16" fill="#4A4E57"/>
    </g>

    <!-- WORDMARK: E N E R A -->
    <g font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="210" letter-spacing="8">
      <!-- Letter E -->
      <text x="410" y="345" fill="#36393E">E</text>

      <!-- Letter N -->
      <text x="605" y="345" fill="#36393E">N</text>

      <!-- Letter E made of 3 Horizontal Blue Bars (signature logo feature) -->
      <g transform="translate(830, 185)">
        <rect x="0" y="0" width="125" height="34" rx="4" fill="#104EA6"/>
        <rect x="0" y="62" width="105" height="34" rx="4" fill="#104EA6"/>
        <rect x="0" y="124" width="125" height="34" rx="4" fill="#104EA6"/>
      </g>

      <!-- Letter R -->
      <text x="1015" y="345" fill="#36393E">R</text>

      <!-- Letter A -->
      <text x="1230" y="345" fill="#36393E">A</text>
    </g>

    <!-- SUBTITLE: A U T O M O T R I Z -->
    <g font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="46" letter-spacing="18" fill="#36393E">
      <text x="415" y="425">AUTOMOTRIZ</text>
    </g>

    <!-- 3 SLANTED SPEED HASH MARKS IN BLUE -->
    <g transform="translate(1085, 392)">
      <polygon points="12,0 36,0 24,32 0,32" fill="#93B4D7"/>
      <polygon points="46,0 70,0 58,32 34,32" fill="#93B4D7"/>
      <polygon points="80,0 104,0 92,32 68,32" fill="#93B4D7"/>
    </g>

    <!-- DYNAMIC AUTOMOTIVE TIRE TREAD ARCH ON THE RIGHT -->
    <g transform="translate(1250, 20)">
      <!-- Smooth Outer Arc -->
      <path d="M 70 80 A 240 240 0 0 1 200 460"
            fill="none" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round"/>
      
      <!-- Inner Arch Track -->
      <path d="M 120 70 A 250 250 0 0 1 270 420"
            fill="none" stroke="#94A3B8" stroke-width="12" stroke-linecap="round"/>

      <!-- Diagonal Tire Tread Cleats / Lug Blocks -->
      <g stroke="#94A3B8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M 135 110 L 175 145 L 210 120"/>
        <path d="M 155 160 L 195 195 L 230 170"/>
        <path d="M 175 210 L 215 245 L 250 220"/>
        <path d="M 195 260 L 235 295 L 270 270"/>
        <path d="M 215 310 L 255 345 L 290 320"/>
        <path d="M 235 360 L 275 395 L 310 370"/>
      </g>
    </g>
  </svg>
  `;

  // White variant for dark backgrounds as primary genera-logo.png
  const svgWhite = svg
    .replace(/#36393E/g, '#FFFFFF')
    .replace(/#4A4E57/g, '#E2E8F0')
    .replace(/#104EA6/g, '#38BDF8')
    .replace(/#93B4D7/g, '#38BDF8');

  // Primary logo asset for the corporate dark theme
  await sharp(Buffer.from(svgWhite))
    .png()
    .toFile(path.join(outputDir, 'genera-logo.png'));

  await sharp(Buffer.from(svgWhite))
    .png()
    .toFile(path.join(outputDir, 'genera-logo-white.png'));

  // Dark text variant in case needed for pure white backgrounds
  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outputDir, 'genera-logo-dark.png'));

  console.log('✓ genera-logo.png, genera-logo-white.png, and genera-logo-dark.png generated');
}

// 2. PEISA LOGO (Official Commercial Alliance)
async function generatePeisaLogo() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180" width="640" height="180">
    <rect width="640" height="180" rx="16" fill="#FFFFFF"/>
    
    <!-- Hexagonal Gear/Nut with inner chevron -->
    <g transform="translate(30, 20)">
      <path d="M 55 10 L 95 32 L 95 98 L 55 120 L 15 98 L 15 32 Z"
            fill="#334155" />
      <circle cx="55" cy="65" r="28" fill="#FFFFFF"/>
      <path d="M 40 76 L 55 50 L 70 76 L 61 76 L 55 64 L 49 76 Z"
            fill="#164B9B"/>
    </g>

    <!-- PEISA Wordmark -->
    <text x="155" y="92" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="78" fill="#164B9B" letter-spacing="4">
      PEISA
    </text>

    <!-- Subtitle -->
    <text x="157" y="125" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="16" fill="#0F172A" letter-spacing="2">
      DISTRIBUCIÓN DE PARTES Y EQUIPOS
    </text>

    <!-- Speed stripes -->
    <g transform="translate(560, 40)">
      <polygon points="16,0 0,80 16,80 32,0" fill="#164B9B"/>
      <polygon points="40,0 24,80 40,80 56,0" fill="#1769E0"/>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outputDir, 'peisa-logo.png'));

  console.log('✓ peisa-logo.png generated');
}

// 3. GENERA HERO TALLER (Pristine service workshop bay)
async function generateHeroTaller() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#040913"/>
        <stop offset="50%" stop-color="#081426"/>
        <stop offset="100%" stop-color="#060E1C"/>
      </linearGradient>
      <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1A2740"/>
        <stop offset="40%" stop-color="#121D30"/>
        <stop offset="100%" stop-color="#060C18"/>
      </linearGradient>
      <linearGradient id="liftGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#164B9B"/>
        <stop offset="50%" stop-color="#1769E0"/>
        <stop offset="100%" stop-color="#1E3A8A"/>
      </linearGradient>
      <linearGradient id="carPaint" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#475569"/>
        <stop offset="25%" stop-color="#94A3B8"/>
        <stop offset="60%" stop-color="#64748B"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
      <radialGradient id="headlightBeam" cx="0%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Workshop Back Wall -->
    <rect width="1920" height="740" fill="url(#bgGrad)"/>
    
    <!-- Architectural Tool Chests and Equipment Bays in background -->
    <rect x="80" y="480" width="300" height="260" fill="#0A1526" stroke="#1E293B" stroke-width="2"/>
    <line x1="80" y1="540" x2="380" y2="540" stroke="#1E293B" stroke-width="2"/>
    <line x1="80" y1="600" x2="380" y2="600" stroke="#1E293B" stroke-width="2"/>
    <line x1="80" y1="660" x2="380" y2="660" stroke="#1E293B" stroke-width="2"/>

    <rect x="1540" y="480" width="300" height="260" fill="#0A1526" stroke="#1E293B" stroke-width="2"/>
    <line x1="1540" y1="540" x2="1840" y2="540" stroke="#1E293B" stroke-width="2"/>
    <line x1="1540" y1="600" x2="1840" y2="600" stroke="#1E293B" stroke-width="2"/>
    <line x1="1540" y1="660" x2="1840" y2="660" stroke="#1E293B" stroke-width="2"/>

    <!-- Ceiling Studio Linear LED Lighting Strips -->
    <g filter="url(#glow)">
      <line x1="200" y1="60" x2="700" y2="60" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
      <line x1="800" y1="60" x2="1300" y2="60" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
      <line x1="1400" y1="60" x2="1800" y2="60" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
    </g>

    <!-- Glossy Epoxy Workshop Floor -->
    <polygon points="0,740 1920,740 1920,1080 0,1080" fill="url(#floorGrad)"/>
    <line x1="0" y1="740" x2="1920" y2="740" stroke="#334155" stroke-width="3"/>

    <!-- Floor Mirror Light Reflections -->
    <g opacity="0.25" filter="url(#glow)">
      <line x1="250" y1="840" x2="650" y2="840" stroke="#38BDF8" stroke-width="8"/>
      <line x1="850" y1="840" x2="1250" y2="840" stroke="#38BDF8" stroke-width="8"/>
      <line x1="1450" y1="840" x2="1750" y2="840" stroke="#38BDF8" stroke-width="8"/>
    </g>

    <!-- Heavy-Duty Hydraulic Lift Columns in Genera Blue -->
    <!-- Left Column -->
    <rect x="520" y="160" width="70" height="600" fill="url(#liftGrad)" rx="8" stroke="#1E40AF" stroke-width="3"/>
    <rect x="490" y="740" width="130" height="30" fill="#0A1628" rx="4" stroke="#1E293B" stroke-width="2"/>
    <!-- Right Column -->
    <rect x="1330" y="160" width="70" height="600" fill="url(#liftGrad)" rx="8" stroke="#1E40AF" stroke-width="3"/>
    <rect x="1300" y="740" width="130" height="30" fill="#0A1628" rx="4" stroke="#1E293B" stroke-width="2"/>

    <!-- Hydraulic Telescopic Arms -->
    <line x1="560" y1="440" x2="840" y2="440" stroke="#1769E0" stroke-width="24" stroke-linecap="round"/>
    <line x1="1360" y1="440" x2="1080" y2="440" stroke="#1769E0" stroke-width="24" stroke-linecap="round"/>

    <!-- Modern SUV Elevated on Lift -->
    <g transform="translate(560, 220)">
      <!-- Car Shadow -->
      <ellipse cx="400" cy="270" rx="360" ry="24" fill="#000000" opacity="0.65" filter="blur(16px)"/>

      <!-- Body / Chassis -->
      <path d="M 60 170 C 130 160 220 120 320 85 C 440 50 560 50 610 95 L 680 165 L 750 175 C 775 180 785 200 770 220 L 740 240 L 10 240 C 0 220 10 185 60 170 Z"
            fill="url(#carPaint)" stroke="#94A3B8" stroke-width="2.5"/>

      <!-- Gloss Roof and Hood Reflections -->
      <path d="M 320 88 C 440 54 555 54 605 97" stroke="#FFFFFF" stroke-width="5" fill="none" opacity="0.85"/>
      <path d="M 60 172 C 130 162 210 125 305 92" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.6"/>

      <!-- Tinted Glass Windows -->
      <path d="M 280 110 C 340 80 460 70 560 98 L 590 155 L 245 155 Z"
            fill="#060C16" stroke="#334155" stroke-width="2"/>
      <polygon points="320,95 410,85 430,150 340,150" fill="#FFFFFF" opacity="0.15"/>

      <!-- Alloy Wheels & Brakes -->
      <circle cx="150" cy="240" r="62" fill="#090F1B" stroke="#475569" stroke-width="12"/>
      <circle cx="150" cy="240" r="32" fill="#1E293B" stroke="#1769E0" stroke-width="5"/>
      <circle cx="150" cy="240" r="20" fill="#38BDF8" opacity="0.85" filter="blur(2px)"/>

      <circle cx="650" cy="240" r="62" fill="#090F1B" stroke="#475569" stroke-width="12"/>
      <circle cx="650" cy="240" r="32" fill="#1E293B" stroke="#1769E0" stroke-width="5"/>
      <circle cx="650" cy="240" r="20" fill="#38BDF8" opacity="0.85" filter="blur(2px)"/>

      <!-- Headlight Beam -->
      <polygon points="10,195 0,215 -250,290 -240,250" fill="url(#headlightBeam)"/>
      <circle cx="10" cy="205" r="7" fill="#FFFFFF" filter="url(#glow)"/>
    </g>

    <!-- Certified Technician with Diagnostic Tablet in Service Bay -->
    <g transform="translate(860, 480)">
      <!-- Head and Safety Cap -->
      <circle cx="80" cy="65" r="30" fill="#091322" stroke="#1E293B" stroke-width="2"/>
      <!-- Uniform in Genera Navy -->
      <path d="M 40 100 L 120 100 L 105 250 L 55 250 Z" fill="#164B9B"/>
      <line x1="40" y1="115" x2="120" y2="115" stroke="#38BDF8" stroke-width="4"/>
      <!-- Tablet Scanner -->
      <rect x="-10" y="165" width="55" height="38" rx="6" fill="#0284C7" stroke="#38BDF8" stroke-width="3" filter="url(#glow)"/>
      <line x1="0" y1="184" x2="35" y2="184" stroke="#FFFFFF" stroke-width="3"/>
      <!-- Safety Boots -->
      <rect x="55" y="250" width="20" height="75" fill="#050C17"/>
      <rect x="85" y="250" width="20" height="75" fill="#050C17"/>
    </g>

    <!-- Telemetry HUD Overlay -->
    <g opacity="0.4" stroke="#38BDF8" stroke-width="2" stroke-dasharray="8 8">
      <line x1="100" y1="700" x2="1820" y2="700"/>
      <line x1="500" y1="360" x2="900" y2="360"/>
    </g>
    <circle cx="500" cy="360" r="8" fill="#38BDF8" filter="url(#glow)"/>
    <circle cx="900" cy="360" r="8" fill="#38BDF8" filter="url(#glow)"/>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 92 })
    .toFile(path.join(outputDir, 'genera-hero-taller.jpg'));

  console.log('✓ genera-hero-taller.jpg generated');
}

// 4. GENERA MECANICO
async function generateMecanico() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgMec" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#040914"/>
        <stop offset="60%" stop-color="#0A182F"/>
        <stop offset="100%" stop-color="#06101F"/>
      </linearGradient>
      <linearGradient id="uniformGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#164B9B"/>
        <stop offset="100%" stop-color="#1769E0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgMec)"/>
    
    <!-- Open Car Engine Bay on the right -->
    <path d="M 600 250 L 1200 150 L 1200 700 L 600 700 Z" fill="#0C1A30" stroke="#1E293B" stroke-width="3"/>
    <rect x="750" y="320" width="380" height="260" rx="12" fill="#1E293B" stroke="#475569" stroke-width="4"/>
    <circle cx="850" cy="420" r="50" fill="#334155" stroke="#1769E0" stroke-width="6"/>
    <circle cx="1030" cy="420" r="40" fill="#334155" stroke="#38BDF8" stroke-width="4"/>

    <!-- Certified Mechanic -->
    <g transform="translate(300, 180)">
      <!-- Head with technical headset and safety glasses -->
      <circle cx="150" cy="120" r="55" fill="#0E1E38" stroke="#1E3A8A" stroke-width="4"/>
      <rect x="110" y="105" width="80" height="22" rx="6" fill="#38BDF8" opacity="0.8"/>
      
      <!-- Uniform Body -->
      <path d="M 80 180 L 220 180 L 200 480 L 100 480 Z" fill="url(#uniformGrad)"/>
      <text x="110" y="225" font-family="sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" letter-spacing="2">GENERA</text>
      
      <!-- Torque Wrench Tool -->
      <g transform="translate(190, 240) rotate(25)">
        <rect x="0" y="0" width="220" height="18" rx="6" fill="#CBD5E1" stroke="#475569" stroke-width="3"/>
        <circle cx="0" cy="9" r="26" fill="#334155" stroke="#1769E0" stroke-width="5"/>
        <circle cx="0" cy="9" r="10" fill="#38BDF8"/>
      </g>
    </g>

    <!-- Inspection Tag Badge -->
    <g transform="translate(80, 80)">
      <rect width="280" height="60" rx="12" fill="#0B1628" stroke="#1769E0" stroke-width="2"/>
      <text x="25" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#38BDF8" letter-spacing="2">TÉCNICOS CERTIFICADOS</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-mecanico.jpg'));

  console.log('✓ genera-mecanico.jpg generated');
}

// 5. GENERA DIAGNOSTICO
async function generateDiagnostico() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgDiag" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#030812"/>
        <stop offset="100%" stop-color="#081426"/>
      </linearGradient>
      <linearGradient id="screenWave" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#164B9B"/>
        <stop offset="50%" stop-color="#1769E0"/>
        <stop offset="100%" stop-color="#38BDF8"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgDiag)"/>

    <!-- Rugged Diagnostic Scanner Tablet Frame -->
    <g transform="translate(150, 100)">
      <rect width="900" height="600" rx="36" fill="#0A111E" stroke="#1E293B" stroke-width="12"/>
      
      <!-- Rugged Rubberized Shockproof Corners -->
      <path d="M 0 60 L 0 0 L 60 0" fill="none" stroke="#1769E0" stroke-width="24" stroke-linecap="round"/>
      <path d="M 900 60 L 900 0 L 840 0" fill="none" stroke="#1769E0" stroke-width="24" stroke-linecap="round"/>
      <path d="M 0 540 L 0 600 L 60 600" fill="none" stroke="#1769E0" stroke-width="24" stroke-linecap="round"/>
      <path d="M 900 540 L 900 600 L 840 600" fill="none" stroke="#1769E0" stroke-width="24" stroke-linecap="round"/>

      <!-- High Tech Screen View -->
      <rect x="40" y="50" width="820" height="500" rx="16" fill="#050C17" stroke="#334155" stroke-width="3"/>
      
      <!-- Top Status Bar -->
      <rect x="40" y="50" width="820" height="50" fill="#0F1F38"/>
      <text x="70" y="82" font-family="monospace" font-weight="900" font-size="18" fill="#38BDF8">GENERA DIAG PRO // V8.4 - OBD-II SCANNER</text>
      <circle cx="820" cy="75" r="8" fill="#10B981"/>

      <!-- Oscilloscope Graphs -->
      <line x1="70" y1="200" x2="830" y2="200" stroke="#1E293B" stroke-width="2"/>
      <line x1="70" y1="280" x2="830" y2="280" stroke="#1E293B" stroke-width="2"/>
      <line x1="70" y1="360" x2="830" y2="360" stroke="#1E293B" stroke-width="2"/>

      <path d="M 70 280 Q 150 120 230 280 T 390 280 T 550 200 T 630 360 T 710 280 T 830 280"
            fill="none" stroke="url(#screenWave)" stroke-width="6" stroke-linecap="round"/>

      <!-- Real-time Telemetry Data Cards -->
      <g transform="translate(70, 400)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#0B1728" stroke="#1E3A8A" stroke-width="2"/>
        <text x="20" y="35" font-family="monospace" font-size="14" fill="#94A3B8">RPM SENSOR</text>
        <text x="20" y="85" font-family="monospace" font-weight="900" font-size="36" fill="#FFFFFF">780 <tspan font-size="16" fill="#64748B">idle</tspan></text>

        <rect x="260" y="0" width="220" height="110" rx="12" fill="#0B1728" stroke="#1E3A8A" stroke-width="2"/>
        <text x="280" y="35" font-family="monospace" font-size="14" fill="#94A3B8">BATTERY VOLT</text>
        <text x="280" y="85" font-family="monospace" font-weight="900" font-size="36" fill="#10B981">14.2 <tspan font-size="16" fill="#64748B">V</tspan></text>

        <rect x="520" y="0" width="220" height="110" rx="12" fill="#0B1728" stroke="#1E3A8A" stroke-width="2"/>
        <text x="540" y="35" font-family="monospace" font-size="14" fill="#94A3B8">FUEL PRESSURE</text>
        <text x="540" y="85" font-family="monospace" font-weight="900" font-size="36" fill="#38BDF8">43.5 <tspan font-size="16" fill="#64748B">psi</tspan></text>
      </g>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-diagnostico.jpg'));

  console.log('✓ genera-diagnostico.jpg generated');
}

// 6. GENERA FRENOS
async function generateFrenos() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgFrenos" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#040914"/>
        <stop offset="100%" stop-color="#071224"/>
      </linearGradient>
      <radialGradient id="discMetal" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="45%" stop-color="#334155"/>
        <stop offset="85%" stop-color="#64748B"/>
        <stop offset="100%" stop-color="#1E293B"/>
      </radialGradient>
      <linearGradient id="caliperBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1E3A8A"/>
        <stop offset="40%" stop-color="#1769E0"/>
        <stop offset="100%" stop-color="#1D4ED8"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgFrenos)"/>

    <!-- High Performance Ventilated Rotor Disc -->
    <g transform="translate(680, 400)">
      <circle cx="0" cy="0" r="320" fill="url(#discMetal)" stroke="#94A3B8" stroke-width="8"/>
      <circle cx="0" cy="0" r="290" fill="none" stroke="#475569" stroke-width="3" stroke-dasharray="6 6"/>
      <circle cx="0" cy="0" r="220" fill="none" stroke="#334155" stroke-width="3"/>
      
      <!-- Cross Drilled Holes -->
      ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `
        <circle cx="${240 * Math.cos(a * Math.PI / 180)}" cy="${240 * Math.sin(a * Math.PI / 180)}" r="8" fill="#070E1B"/>
        <circle cx="${180 * Math.cos(a * Math.PI / 180)}" cy="${180 * Math.sin(a * Math.PI / 180)}" r="7" fill="#070E1B"/>
      `).join('')}

      <!-- Center Hub -->
      <circle cx="0" cy="0" r="120" fill="#091222" stroke="#1769E0" stroke-width="6"/>
      <circle cx="0" cy="0" r="45" fill="#1E293B"/>
      
      <!-- Studs -->
      ${[0, 72, 144, 216, 288].map(deg => `
        <circle cx="${85 * Math.cos(deg * Math.PI / 180)}" cy="${85 * Math.sin(deg * Math.PI / 180)}" r="14" fill="#CBD5E1" stroke="#475569" stroke-width="3"/>
      `).join('')}
    </g>

    <!-- 6-Piston Caliper in Genera Electric Blue -->
    <g transform="translate(320, 140)">
      <path d="M 0 100 C 80 50 250 50 350 100 L 400 200 C 420 280 420 400 400 480 L 350 580 C 250 630 80 630 0 580 L 30 340 Z"
            fill="url(#caliperBlue)" stroke="#38BDF8" stroke-width="6"/>
      <text x="140" y="380" font-family="sans-serif" font-weight="900" font-size="42" fill="#FFFFFF" letter-spacing="6" transform="rotate(-90 140 380)">
        GENERA
      </text>
    </g>

    <!-- Spec Badge -->
    <g transform="translate(80, 80)">
      <rect width="280" height="60" rx="12" fill="#0B1628" stroke="#1769E0" stroke-width="2"/>
      <text x="35" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#38BDF8" letter-spacing="2">FRENOS Y SEGURIDAD</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-frenos.jpg'));

  console.log('✓ genera-frenos.jpg generated');
}

// 7. GENERA MOTOR
async function generateMotor() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgMotor" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#040914"/>
        <stop offset="100%" stop-color="#0B172C"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgMotor)"/>

    <!-- Engine Block Artwork -->
    <g transform="translate(300, 150)">
      <rect x="100" y="100" width="460" height="380" rx="24" fill="#1E293B" stroke="#475569" stroke-width="6"/>
      <path d="M 120 100 L 170 30 L 490 30 L 540 100 Z" fill="#0F172A" stroke="#475569" stroke-width="6"/>
      <rect x="180" y="45" width="300" height="40" rx="8" fill="#0A1424" stroke="#1769E0" stroke-width="3"/>
      <text x="210" y="72" font-family="sans-serif" font-weight="900" font-size="22" fill="#38BDF8" letter-spacing="3">GENERA MOTOR TECH</text>

      <!-- Pulleys & Belt -->
      <circle cx="50" cy="180" r="55" fill="#334155" stroke="#94A3B8" stroke-width="6"/>
      <circle cx="50" cy="180" r="22" fill="#0F172A" stroke="#1769E0" stroke-width="4"/>

      <circle cx="50" cy="340" r="70" fill="#334155" stroke="#94A3B8" stroke-width="6"/>
      <circle cx="50" cy="340" r="28" fill="#0F172A" stroke="#1769E0" stroke-width="4"/>

      <!-- Drive Belt in Electric Blue -->
      <path d="M 50 125 C 130 130 130 240 50 410 C -10 320 -10 210 50 125 Z"
            fill="none" stroke="#1769E0" stroke-width="12" stroke-linecap="round"/>

      <!-- Filter -->
      <rect x="540" y="320" width="80" height="110" rx="8" fill="#164B9B" stroke="#38BDF8" stroke-width="4"/>
      <text x="555" y="380" font-family="sans-serif" font-weight="bold" font-size="18" fill="#FFFFFF">OEM</text>
    </g>

    <!-- Badge -->
    <g transform="translate(80, 80)">
      <rect width="280" height="60" rx="12" fill="#0B1628" stroke="#1769E0" stroke-width="2"/>
      <text x="35" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#38BDF8" letter-spacing="2">MECÁNICA GENERAL</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-motor.jpg'));

  console.log('✓ genera-motor.jpg generated');
}

// 8. GENERA SUSPENSION
async function generateSuspension() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgSusp" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#040914"/>
        <stop offset="100%" stop-color="#081426"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgSusp)"/>

    <!-- High Performance Coilover Shock Absorber Strut -->
    <g transform="translate(540, 100)">
      <!-- Central Piston Shaft -->
      <rect x="40" y="40" width="40" height="520" rx="8" fill="#334155" stroke="#94A3B8" stroke-width="4"/>
      <!-- Top Mount -->
      <rect x="-20" y="20" width="160" height="35" rx="8" fill="#1E293B" stroke="#475569" stroke-width="4"/>
      
      <!-- Electric Blue Progressive Coil Spring -->
      <path d="M 0 120 Q 60 90 120 120 Q 60 150 0 180 Q 60 150 120 210 Q 60 210 0 270 Q 60 270 120 330 Q 60 330 0 390 Q 60 390 120 450 Q 60 450 0 510"
            fill="none" stroke="#1769E0" stroke-width="26" stroke-linecap="round"/>
      
      <!-- Lower Threaded Body Collar -->
      <rect x="10" y="520" width="100" height="70" rx="6" fill="#164B9B" stroke="#38BDF8" stroke-width="3"/>
    </g>

    <!-- Badge -->
    <g transform="translate(80, 80)">
      <rect width="300" height="60" rx="12" fill="#0B1628" stroke="#1769E0" stroke-width="2"/>
      <text x="35" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#38BDF8" letter-spacing="2">SUSPENSIÓN Y DIRECCIÓN</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-suspension.jpg'));

  console.log('✓ genera-suspension.jpg generated');
}

// 9. GENERA LLANTAS
async function generateLlantas() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgLlantas" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#040914"/>
        <stop offset="100%" stop-color="#0A182F"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgLlantas)"/>

    <!-- Alloy Wheel & Tire -->
    <g transform="translate(600, 400)">
      <!-- Outer Rubber Tire Tread -->
      <circle cx="0" cy="0" r="320" fill="#090F1B" stroke="#1E293B" stroke-width="24"/>
      
      <!-- Siped Tread Pattern -->
      ${[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map(a => `
        <line x1="${300 * Math.cos(a * Math.PI / 180)}" y1="${300 * Math.sin(a * Math.PI / 180)}"
              x2="${328 * Math.cos(a * Math.PI / 180)}" y2="${328 * Math.sin(a * Math.PI / 180)}"
              stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/>
      `).join('')}

      <!-- Rim -->
      <circle cx="0" cy="0" r="230" fill="#1E293B" stroke="#64748B" stroke-width="14"/>
      <circle cx="0" cy="0" r="200" fill="#0F172A"/>

      <!-- 5-Spoke Sport Design -->
      ${[0, 72, 144, 216, 288].map(deg => `
        <line x1="0" y1="0" x2="${180 * Math.cos(deg * Math.PI / 180)}" y2="${180 * Math.sin(deg * Math.PI / 180)}"
              stroke="#64748B" stroke-width="32" stroke-linecap="round"/>
      `).join('')}

      <circle cx="0" cy="0" r="60" fill="#090F1B" stroke="#1769E0" stroke-width="6"/>
      <circle cx="0" cy="0" r="25" fill="#38BDF8"/>
    </g>

    <!-- Badge -->
    <g transform="translate(80, 80)">
      <rect width="280" height="60" rx="12" fill="#0B1628" stroke="#1769E0" stroke-width="2"/>
      <text x="35" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#38BDF8" letter-spacing="2">LLANTAS Y ALINEACIÓN</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-llantas.jpg'));

  console.log('✓ genera-llantas.jpg generated');
}

// 10. GENERA ELECTRICO
async function generateElectrico() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bgElec" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#040914"/>
        <stop offset="100%" stop-color="#061226"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgElec)"/>

    <!-- Electrical Schematic & Multimeter Artwork -->
    <g transform="translate(350, 180)">
      <rect width="500" height="440" rx="24" fill="#0A1526" stroke="#1769E0" stroke-width="6"/>
      
      <!-- Digital Multimeter LCD Display -->
      <rect x="60" y="40" width="380" height="120" rx="12" fill="#0284C7" stroke="#38BDF8" stroke-width="3"/>
      <text x="100" y="125" font-family="monospace" font-weight="900" font-size="72" fill="#FFFFFF">14.28 <tspan font-size="32" fill="#BAE6FD">V DC</tspan></text>

      <!-- Battery & Fuse Connectors -->
      <g transform="translate(80, 220)">
        <rect x="0" y="0" width="140" height="140" rx="16" fill="#1E293B" stroke="#38BDF8" stroke-width="4"/>
        <text x="35" y="80" font-family="sans-serif" font-weight="900" font-size="54" fill="#EF4444">+</text>
        <text x="85" y="80" font-family="sans-serif" font-weight="900" font-size="54" fill="#38BDF8">-</text>
      </g>

      <!-- Alternator Wave Circuit -->
      <g transform="translate(260, 220)">
        <rect x="0" y="0" width="180" height="140" rx="16" fill="#1E293B" stroke="#10B981" stroke-width="4"/>
        <path d="M 20 70 Q 55 20 90 70 T 160 70" fill="none" stroke="#10B981" stroke-width="6" stroke-linecap="round"/>
      </g>
    </g>

    <!-- Badge -->
    <g transform="translate(80, 80)">
      <rect width="280" height="60" rx="12" fill="#0B1628" stroke="#1769E0" stroke-width="2"/>
      <text x="35" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#38BDF8" letter-spacing="2">SISTEMA ELÉCTRICO</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'genera-electrico.jpg'));

  console.log('✓ genera-electrico.jpg generated');
}

async function run() {
  await generateGeneraLogo();
  await generatePeisaLogo();
  await generateHeroTaller();
  await generateMecanico();
  await generateDiagnostico();
  await generateFrenos();
  await generateMotor();
  await generateSuspension();
  await generateLlantas();
  await generateElectrico();
  console.log('All 10 asset files generated successfully in public/images/');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
