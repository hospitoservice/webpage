import { ComponentType, SVGProps } from 'react';

declare module 'react-icons/fa' {
  export type IconType = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;
  
  export const FaMapMarkerAlt: IconType;
  export const FaEnvelope: IconType;
  export const FaPhone: IconType;
  export const FaInstagram: IconType;
  export const FaLinkedin: IconType;
  export const FaWhatsapp: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaHospital: IconType;
  export const FaUserMd: IconType;
  export const FaCalendarAlt: IconType;
  export const FaFileMedical: IconType;
  export const FaMoneyBillWave: IconType;
  export const FaMobileAlt: IconType;
}
