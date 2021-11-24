export interface NavLink {
  url: string;
  title: string;
}

export const ROUTER_LINKS: NavLink[] = [
  {
    url: '/home',
    title: 'home',
  },
  {
    url: '/about',
    title: 'about',
  },
  {
    url: '/projects',
    title: 'projects',
  },
  {
    url: '',
    title: 'home',
  },
];
