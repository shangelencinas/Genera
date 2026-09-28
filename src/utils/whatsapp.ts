import { SERVICES_DATA } from '../data/services';

export const WHATSAPP_PHONE = '526624330056';

export const getWhatsAppUrl = (serviceNameOrId?: string): string => {
  if (!serviceNameOrId) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      'Hola Genera Automotriz, quisiera agendar una cita para mi auto.'
    )}`;
  }

  const service = SERVICES_DATA.find(
    (s) => s.id === serviceNameOrId || s.title.toLowerCase() === serviceNameOrId.toLowerCase()
  );

  const title = service ? service.title : serviceNameOrId;

  const text = `Hola Genera Automotriz, me gustaría agendar una cita para el servicio de ${title}.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};
