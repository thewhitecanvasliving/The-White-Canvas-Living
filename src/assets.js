// Centralised image/video URLs. Swap GITHUB_BASE with '' once you move assets
// into this project's /public/images folder.
const GITHUB_BASE =
  'https://raw.githubusercontent.com/thewhitecanvasliving/The-White-Canvas-Living/main/public';

export const ASSETS = {
  logo: `${GITHUB_BASE}/wclLogo.png`,
  favicon: `${GITHUB_BASE}/wcl-favicon.png`,
  hero: `${GITHUB_BASE}/images/hero-section-img.jpeg`,
  featured1: `${GITHUB_BASE}/images/featured2.JPG`,
  featured2: `${GITHUB_BASE}/images/featured3-1.png`,
  featured3: `${GITHUB_BASE}/images/featured3.jpeg`,
  aboutMain: `${GITHUB_BASE}/wcl-favicon.png`,
  aboutAccent: `${GITHUB_BASE}/interior1.JPG`,
};

export const siteMedia = (site, kind, name) =>
  `${GITHUB_BASE}/images/${site}/${name}.${kind === 'video' ? 'mp4' : 'jpeg'}`;
