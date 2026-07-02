export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export const PHONE_NUMBER = '+916382939779';
export const EMAIL = 'vclixdigital@gmail.com';
export const WHATSAPP_LINK = `https://wa.me/916382939779`;
export const PHONE_LINK = `tel:${PHONE_NUMBER}`;
export const EMAIL_LINK = `mailto:${EMAIL}`;
export const BUSINESS_ADDRESS = 'Dharmapuri, Tamilnadu, India - 636810';
export const BUSINESS_NAME = 'Vclix';
