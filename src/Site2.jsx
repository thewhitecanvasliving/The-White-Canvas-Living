import ProjectPage from './components/ProjectPage';
import { ASSETS } from './assets';

export default function Site2() {
  return (
    <ProjectPage
      site="site2"
      heroImg={ASSETS.featured1}
      tag="Residential Interior · Featured"
      title="Residence"
      loc="Dum Dum, Kolkata"
      meta={[
        { label: 'Project Type', value: 'Full Home Interior' },
        { label: 'Location', value: 'Dum Dum, Kolkata' },
        { label: 'Year', value: '2025' },
        { label: 'Scope', value: 'Design + Execution' },
      ]}
      brief="Effortless living, beautifully detailed"
      paragraphs={[
        'For this Dum Dum family home, we set out to design a space that quietly elevates daily rituals — from morning coffee to late-night conversations. Spatial flow guided every decision, with carefully zoned areas that feel open yet intimate.',
        'A warm, grounded palette of clay tones, brushed wood, and stone-textured surfaces anchors the home. Bespoke joinery and considered lighting bring the architecture to life — making the everyday feel just a little more elevated.',
      ]}
      imageCount={6}
      largeImageIndex={1}
      videoNames={['vid1', 'vid2', 'vid3', 'vid4', 'vid5', 'vid-A']}
      next={{ to: '/site-3', title: 'Studio Apartment — Naktala' }}
      alt={{ to: '/site-1', title: 'Residence — Dum Dum' }}
    />
  );
}
