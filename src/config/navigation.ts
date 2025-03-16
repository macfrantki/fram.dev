export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const companyName = {
  first: 'FRAM',
  last: 'DEV',
}; 