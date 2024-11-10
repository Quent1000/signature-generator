export interface FormData {
  fullName: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  linkedin: string;
  twitter: string;
  photo: string;
  accentColor: string;
  template: 'modern' | 'classic' | 'minimal';
  font: string;
  disclaimer: string;
  logo: string;
  badges: string[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
}

export const FONTS = [
  'Arial',
  'Helvetica',
  'Montserrat',
  'Open Sans',
  'Roboto',
  'Poppins'
];