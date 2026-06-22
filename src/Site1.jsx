import ProjectPage from './components/ProjectPage';
import { ASSETS } from './assets';

export default function Site1() {
  return (
    <ProjectPage
      site="site1"
      heroImg={ASSETS.featured3}
      tag="Residential Interior"
      title="Residence"
      loc="Dum Dum, Kolkata"
      meta={[
        { label: 'Project Type', value: 'Full Home Interior' },
        { label: 'Location', value: 'Dum Dum, Kolkata' },
        { label: 'Year', value: '2025' },
        { label: 'Scope', value: 'Design + Execution' },
      ]}
      brief="A home that breathes warmth"
      paragraphs={[
        'This Dum Dum residence asked for a space that felt rooted, restful, and unmistakably personal. We layered earthy textures — wood, linen, stone — with soft natural light to create rooms that feel calm at every hour of the day.',
        "Every surface, finish, and fixture was selected to age gracefully. The result is a home that doesn't shout for attention but holds it quietly, the way a thoughtful conversation does.",
      ]}
      imageCount={7}
      largeImageIndex={3}
      videoNames={['vid1', 'vid2', 'vid3', 'vid4', 'vid5', 'vid6']}
      next={{ to: '/site-2', title: 'Residence — Dum Dum' }}
      alt={{ to: '/site-3', title: 'Studio Apartment — Naktala' }}
    />
  );
}
