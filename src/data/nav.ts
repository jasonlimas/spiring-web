import type { NavLink } from '../components/SiteHeader.astro';
import { site } from './site';

/** Main navigation, shared by every page. Pass the current path to mark the active link. */
export function mainNav(currentPath: string): NavLink[] {
  const links = [
    { href: site.links.maps, label: 'Lokasi' },
    { href: '/about/', label: 'Tentang Kami' },
  ];
  return links.map((link) => ({ ...link, current: link.href === currentPath }));
}
