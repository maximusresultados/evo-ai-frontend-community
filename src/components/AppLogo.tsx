import type { CSSProperties } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import logoDark from '../assets/EVO_CRM.svg';
import logoLight from '../assets/EVO_CRM_light.svg';

const BRAND_LOGO_URL = import.meta.env.VITE_BRAND_LOGO_URL as string | undefined;

interface AppLogoProps {
  className?: string;
  alt?: string;
  style?: CSSProperties;
  forceTheme?: 'dark' | 'light';
}

export function AppLogo({ className, alt = 'ChatMax', style, forceTheme }: AppLogoProps) {
  const { theme } = useDarkMode();
  const effectiveTheme = forceTheme ?? theme;

  if (BRAND_LOGO_URL) {
    return <img src={BRAND_LOGO_URL} alt={alt} className={className} style={style} />;
  }

  const src = effectiveTheme === 'dark' ? logoDark : logoLight;
  return <img src={src} alt={alt} className={className} style={style} />;
}
