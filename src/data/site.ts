// Business details and outbound links used across the site.
// Edit them here and every page picks up the change.
// An empty string means "not ready yet": those buttons fall back to the
// ordering section on the home page instead of a dead link.

export const site = {
  name: 'Spiring Ayam Bumbu',
  shortName: 'Spiring',
  tagline: 'Ayam goreng unik & lebih sehat.',
  hashtag: '#MakanJadiLebihMudah',
  description:
    'Ayam pejantan goreng khas Jawa Tengah dengan bumbu racikan keluarga. Nasi putih, tahu tempe, dan bumbu Spiring atau Bara. Di Ruko Golden 8, Gading Serpong.',

  address: {
    building: 'Ruko Golden 8',
    unit: 'Blok G No. 08',
    area: 'Gading Serpong',
    city: 'Tangerang',
    region: 'Banten',
    country: 'ID',
  },

  hours: {
    label: '10:00 – 21:00',
    // TODO: confirm the days. The structured data below assumes every day.
    opens: '10:00',
    closes: '21:00',
  },

  links: {
    maps: 'https://maps.google.com/?q=Spiring+Ayam+Bumbu+Ruko+Golden+8+Gading+Serpong',
    // TODO: WhatsApp number in international format, e.g. https://wa.me/6281234567890
    whatsapp: '',
    // TODO: store links on each delivery app.
    grabfood: '',
    gofood: '',
    instagram: 'https://www.instagram.com/spiring.ayambumbu/',
    instagramHandle: '@spiring.ayambumbu',
    threads: 'https://www.threads.net/@spiring.ayambumbu',
  },
} as const;

/** Use the real link when we have one, otherwise send people to the ordering section. */
export function linkOr(url: string, fallback = '/#pesan'): string {
  return url || fallback;
}
