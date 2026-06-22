import ProjectPage from './components/ProjectPage';
import { ASSETS } from './assets';

export default function Site3() {
  return (
    <ProjectPage
      site="site3"
      heroImg={ASSETS.featured2}
      tag="Studio Apartment"
      title="Urban Studio"
      loc="Naktala, Kolkata"
      meta={[
        { label: 'Project Type', value: 'Studio Apartment' },
        { label: 'Location', value: 'Naktala, Kolkata' },
        { label: 'Year', value: '2025' },
        { label: 'Scope', value: 'Design + Execution' },
      ]}
      brief="Small footprint, big personality"
      paragraphs={[
        'This compact Naktala studio demanded clever space-planning. We approached it like a tailor — every centimetre was measured, every fixture chosen to do double duty without compromising on warmth or beauty.',
        "Layered textiles, terracotta tones, and bespoke storage transform a tight footprint into a complete sanctuary. It's proof that a small home, designed thoughtfully, can feel just as generous as a much larger one.",
      ]}
      imageCount={9}
      largeImageIndex={2}
      videoNames={['vid1', 'vid2', 'vid3', 'vid4', 'vid5', 'vid6', 'vid7', 'vid8', 'vid9']}
      next={{ to: '/site-1', title: 'Residence — Dum Dum' }}
      alt={{ to: '/site-2', title: 'Residence — Dum Dum' }}
    />
  );
}
