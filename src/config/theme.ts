/**
 * Theme configuration for the application
 * These values should match Tailwind CSS configuration
 */

// Colors
export const colors = {
  primary: {
    DEFAULT: '#EC003F',
    50: '#FFF3F7',
    100: '#FFE6EE',
    200: '#FFA8C3',
    300: '#FF6998',
    400: '#FF2B6D',
    500: '#EC003F', // Primary color
    600: '#B50033',
    700: '#800023',
    800: '#4C0015',
    900: '#1E0008',
  },
  secondary: {
    DEFAULT: '#111827',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827', // Secondary color
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  background: {
    DEFAULT: '#FFFFFF',
    dark: '#111827',
  },
  text: {
    DEFAULT: '#111827',
    secondary: '#4B5563',
    muted: '#6B7280',
    light: '#FFFFFF',
  },
};

// Typography
export const typography = {
  fontFamily: {
    sans: ['Space Grotesk', 'sans-serif'],
    mono: ['monospace'],
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
};

// Spacing
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Animations
export const animations = {
  durations: {
    fast: '100ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  easings: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transitions: {
    fade: {
      enter: 'transition ease-out duration-300',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'transition ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
    scale: {
      enter: 'transition ease-out duration-300',
      enterFrom: 'opacity-0 scale-95',
      enterTo: 'opacity-100 scale-100',
      leave: 'transition ease-in duration-200',
      leaveFrom: 'opacity-100 scale-100',
      leaveTo: 'opacity-0 scale-95',
    },
    slideInFromTop: {
      enter: 'transition ease-out duration-300',
      enterFrom: 'opacity-0 -translate-y-2',
      enterTo: 'opacity-100 translate-y-0',
      leave: 'transition ease-in duration-200',
      leaveFrom: 'opacity-100 translate-y-0',
      leaveTo: 'opacity-0 -translate-y-2',
    },
    slideInFromRight: {
      enter: 'transition ease-out duration-300',
      enterFrom: 'opacity-0 translate-x-2',
      enterTo: 'opacity-100 translate-x-0',
      leave: 'transition ease-in duration-200',
      leaveFrom: 'opacity-100 translate-x-0',
      leaveTo: 'opacity-0 translate-x-2',
    },
  },
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index
export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
  dropdown: '1000',
  modal: '1300',
  tooltip: '1400',
};

// Combine all theme settings
export const theme = {
  colors,
  typography,
  spacing,
  animations,
  breakpoints,
  zIndex,
};

export default theme; 