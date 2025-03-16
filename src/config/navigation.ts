export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const companyName = {
  first: 'FRAM',
  last: 'DEV',
};
