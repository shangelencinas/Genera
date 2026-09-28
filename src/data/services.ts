import { ServiceItem } from '../types';
import { getAssetPath } from '../utils/assets';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mecanica-general',
    number: '01',
    title: 'Mecánica General',
    description: 'Mantenimiento preventivo y correctivo para mantener el funcionamiento óptimo de tu vehículo.',
    details: [
      'Inspección integral de motor y componentes móviles',
      'Mantenimiento preventivo programado y correctivo',
      'Diagnóstico y sustitución de bandas y mangueras',
      'Revisión y ajuste del sistema de enfriamiento',
      'Reparación de fugas y componentes auxiliares'
    ],
    icon: 'wrench',
    image: getAssetPath('/images/mecanico03.jpg'),
    category: 'mecanica'
  },
  {
    id: 'frenos-suspension',
    number: '02',
    title: 'Frenos y Suspensión',
    description: 'Seguridad y desempeño en cada camino.',
    details: [
      'Revisión y reemplazo de pastillas (balatas) y rotores',
      'Rectificación de discos y purga de líquido de frenos',
      'Diagnóstico de amortiguadores, bases y resortes',
      'Inspección de terminales, rótulas y bieletas',
      'Optimización de estabilidad y control de marcha'
    ],
    icon: 'disc',
    image: getAssetPath('/images/genera-frenos.jpg'),
    category: 'seguridad'
  },
  {
    id: 'diagnostico-computarizado',
    number: '03',
    title: 'Diagnóstico Computarizado',
    description: 'Tecnología avanzada para detectar fallas con precisión.',
    details: [
      'Lectura e interpretación de códigos de error OBD-II',
      'Monitoreo de parámetros en tiempo real del motor',
      'Calibración y reseteo de módulos electrónicos',
      'Detección de averías intermitentes en sensores',
      'Reporte técnico claro y honesto sobre el estado del auto'
    ],
    icon: 'cpu',
    image: getAssetPath('/images/genera-diagnostico.jpg'),
    category: 'electronica'
  },
  {
    id: 'sistema-electrico',
    number: '04',
    title: 'Sistema Eléctrico',
    description: 'Diagnóstico y reparación de sistemas eléctricos y electrónicos.',
    details: [
      'Pruebas de rendimiento de batería y sistema de carga',
      'Diagnóstico y servicio de alternador y marcha',
      'Reparación de cableados, fusibles y relevadores',
      'Sistemas de iluminación frontal y señalización',
      'Revisión de módulos de confort y encendido'
    ],
    icon: 'battery-charging',
    image: getAssetPath('/images/genera-electrico.jpg'),
    category: 'electronica'
  },
  {
    id: 'cambio-aceite',
    number: '05',
    title: 'Cambio de Aceite',
    description: 'Mantenimiento esencial para proteger el motor.',
    details: [
      'Drenado y sustitución con aceites sintéticos o multigrado certificados',
      'Reemplazo de filtro de aceite de alta retención',
      'Revisión y nivelación de 5 fluidos esenciales',
      'Inspección visual de puntos de seguridad',
      'Reinicio del contador de servicio del tablero'
    ],
    icon: 'droplet',
    image: getAssetPath('/images/genera-mecanico.jpg'),
    category: 'mantenimiento'
  },
  {
    id: 'afinacion',
    number: '06',
    title: 'Afinación Mayor y Menor',
    description: 'Servicio especializado para mantener el rendimiento y eficiencia.',
    details: [
      'Reemplazo de bujías (platino, iridio o convencionales)',
      'Cambio de filtro de aire de motor y filtro de gasolina',
      'Limpieza profunda del cuerpo de aceleración',
      'Lavado y balanceo de inyectores por ultrasonido o presurizado',
      'Ajuste para optimización del consumo de combustible'
    ],
    icon: 'gauge',
    image: getAssetPath('/images/mecanico02.jpg'),
    category: 'mantenimiento'
  },
  {
    id: 'scanner-automotriz',
    number: '07',
    title: 'Scanner Automotriz',
    description: 'Diagnóstico electrónico mediante tecnología especializada.',
    details: [
      'Escaneo multimarca con software de grado profesional',
      'Análisis de datos congelados (Freeze Frame)',
      'Pruebas activas de actuadores mecánicos y eléctricos',
      'Identificación de fallas en transmisión y ABS/Airbags',
      'Borrado de testigos y verificación post-reparación'
    ],
    icon: 'scan',
    image: getAssetPath('/images/genera-diagnostico.jpg'),
    category: 'electronica'
  },
  {
    id: 'llantas',
    number: '08',
    title: 'Alineación y Balanceo',
    description: 'Alineación por computadora y balanceo dinámico para máxima estabilidad y seguridad.',
    details: [
      'Alineación computarizada delantera y trasera con especificaciones OEM',
      'Balanceo dinámico y de precisión en las 4 ruedas',
      'Inspección de desgaste irregular y profundidad de piso',
      'Rotación preventiva según especificaciones del fabricante',
      'Calibración y revisión de sensores de presión TPMS'
    ],
    icon: 'circle-dot',
    image: getAssetPath('/images/suspencion.jpg'),
    category: 'seguridad'
  }
];
