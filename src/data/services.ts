import { ServiceItem } from '../types';
import { getAssetPath } from '../utils/assets';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'diagnostico',
    number: '01',
    title: 'Diagnóstico Computarizado',
    description: 'Escáner automotriz multimarca para identificar la falla exacta antes de tocar cualquier pieza.',
    details: [
      'Lectura e interpretación precisa de códigos de error OBD-II en tiempo real',
      'Monitoreo de parámetros de sensores de motor, transmisión y frenos',
      'Detección de causas raíz sin adivinar ni cambiar piezas al azar',
      'Reporte técnico claro con explicación transparente para el cliente',
      'Pruebas dinámicas de actuadores y reseteo de testigos de tablero'
    ],
    icon: 'cpu',
    image: getAssetPath('/images/genera-diagnostico.jpg'),
    badge: 'Especialidad',
    category: 'electronica'
  },
  {
    id: 'mecanica-general',
    number: '02',
    title: 'Mecánica General',
    description: 'Mantenimiento preventivo y correctivo con refacciones certificadas para alargar la vida de tu motor.',
    details: [
      'Afinación mayor y menor con lavado de inyectores por ultrasonido',
      'Cambio de aceite sintético o multigrado de alta gama y filtros nuevos',
      'Inspección y reemplazo preventivo de bandas, mangueras y termostatos',
      'Detección y corrección de fugas de fluidos y sistema de enfriamiento',
      'Servicio integral a motor y componentes de tracción'
    ],
    icon: 'wrench',
    image: getAssetPath('/images/Mecanica General.jpg'),
    category: 'mecanica'
  },
  {
    id: 'frenos',
    number: '03',
    title: 'Frenos',
    description: 'Inspección de alta seguridad, cambio de balatas y rectificación para una frenada firme e inmediata.',
    details: [
      'Diagnóstico de vida útil de balatas (pastillas) y rotores',
      'Rectificación milimétrica de discos y tambores con equipo de precisión',
      'Purga y renovación de líquido de frenos de especificación OEM',
      'Mantenimiento y lubricación de calipers, pernos y cilindros de rueda',
      'Prueba de frenado y ajuste de freno de estacionamiento'
    ],
    icon: 'disc',
    image: getAssetPath('/images/balatas.jpg'),
    category: 'seguridad'
  },
  {
    id: 'suspension',
    number: '04',
    title: 'Suspensión',
    description: 'Amortiguadores, rótulas y terminales para eliminar ruidos molestos, brincos y recuperar la estabilidad.',
    details: [
      'Diagnóstico y cambio de amortiguadores, bases y resortes',
      'Inspección de terminales de dirección, rótulas y bieletas estabilizadoras',
      'Reemplazo de bujes de horquilla dañados para absorber baches',
      'Recuperación de la firmeza, suavidad y control en carretera y ciudad',
      'Eliminación de ruidos secos, rechinidos y holguras al volante'
    ],
    icon: 'gauge',
    image: getAssetPath('/images/suspencion.jpg'),
    category: 'seguridad'
  },
  {
    id: 'alineacion-balanceo',
    number: '05',
    title: 'Alineación y Balanceo',
    description: 'Alineación 3D computarizada y balanceo para eliminar vibraciones en el volante y evitar desgaste disparejo.',
    details: [
      'Alineación computarizada de alta precisión de ejes delantero y trasero',
      'Balanceo dinámico de ruedas por computadora para eliminar vibraciones',
      'Prevención activa de desgaste prematuro e irregular de tus neumáticos',
      'Dirección centrada, suave y con respuesta inmediata al conducir',
      'Ajuste de convergencia, cámber y cáster según especificaciones de fábrica'
    ],
    icon: 'scan',
    image: getAssetPath('/images/genera-mecanico.jpg'),
    category: 'mantenimiento'
  },
  {
    id: 'llantas',
    number: '06',
    title: 'Llantas',
    description: 'Venta, montaje, rotación y parchado profesional para maximizar el agarre y la vida de tus neumáticos.',
    details: [
      'Venta de llantas nuevas de marcas líderes y en medidas exactas',
      'Montaje y desmontaje profesional cuidando tus rines de aluminio',
      'Rotación programada para desgaste parejo y mayor kilometraje',
      'Reparación profesional de ponchaduras con parche vulcanizado interno',
      'Inspección de presión y válvulas de inflado de alta durabilidad'
    ],
    icon: 'circle-dot',
    image: getAssetPath('/images/genera-llantas.jpg'),
    category: 'mantenimiento'
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'todos', label: 'Todos los Servicios' },
  { id: 'mecanica', label: 'Mecánica General' },
  { id: 'seguridad', label: 'Frenos y Suspensión' },
  { id: 'mantenimiento', label: 'Llantas, Alineación y Balanceo' },
  { id: 'electronica', label: 'Diagnóstico' }
];
