export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  image?: string;
  badge?: string;
  category: 'mecanica' | 'electronica' | 'seguridad' | 'mantenimiento';
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  vehicleInfo: string;
  preferredDate: string;
  message: string;
}
