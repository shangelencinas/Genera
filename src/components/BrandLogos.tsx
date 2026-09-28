import React from 'react';
import { getAssetPath } from '../utils/assets';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
}

/**
 * GENERA AUTOMOTRIZ Official Brand Emblem
 * Uses official white logo asset
 */
export const GeneraLogo: React.FC<LogoProps> = ({
  className = 'h-9',
  imgClassName = 'h-full w-auto max-w-full object-contain',
  imgStyle,
  variant = 'light'
}) => {
  return (
    <div className={`inline-flex items-center select-none max-w-full ${className}`}>
      <img
        src={getAssetPath('/images/LOGO%20GENERA%20-%20AUTOMOTRIZ%20_%20Bco_1.png')}
        alt="Genera Automotriz - Servicio Automotriz Profesional"
        className={imgClassName}
        style={imgStyle}
      />
    </div>
  );
};

/**
 * PEISA Commercial Alliance Logo
 * Uses independent image asset from /images/peisa-logo.png
 */
export const PeisaLogo: React.FC<{ className?: string }> = ({
  className = 'h-12 sm:h-14'
}) => {
  return (
    <div className={`inline-flex items-center justify-center p-1 rounded-xl max-w-full ${className}`}>
      <img
        src={getAssetPath('/images/LogoPeisa_.jpg')}
        alt="PEISA - Distribución de partes y equipos"
        className="h-full w-auto max-w-full object-contain rounded-[9px]"
        style={{ borderRadius: '9px' }}
      />
    </div>
  );
};
