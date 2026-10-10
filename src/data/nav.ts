import type { NavLink } from '../components/SiteHeader.astro';

/** Main navigation, shared by every page. Pass the current path to mark the active link. */
export function mainNav(currentPath: string): NavLink[] {
  const links = [
    { href: '/#menu', label: 'Menu' },
    { href: '/#bumbu', label: 'Bumbu' },
    { href: '/#lokasi', label: 'Lokasi' },
    { href: '/tentang-kami/', label: 'Tentang Kami' },
  ];
  return links.map((link) => ({ ...link, current: link.href === currentPath }));
}
