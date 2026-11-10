import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

function Orb() {
  return <div className="orb-stage" aria-label="Abstract colourful 3D-inspired portfolio sculpture">
    <div className="orb-glow"/>
    <div className="orb"><span>THE</span><span>CURIOUS</span><span>LAB</span><span>✳</span><span>✦</span><span>✳</span></div>
    <div className="orb-shadow"/>
    <div className="orb-caption">A LITTLE CURIOSITY GOES A LONG WAY <span>↗</span></div>
  </div>;
}

export default function Home() {
  return <>
    <header className="topbar"><div className="top-kicker">AI PRODUCT DESIGNER <b>•</b> VIBEBUILDER <b>•</b> CURIOUS MIND</div><nav><Link href="/about">ABOUT</Link><Link href="/work">WORK</Link><Link href="/experiments">EXPERIMENTS</Link><Link href="/contact">CONTACT</Link></nav><Link className="studio-button" href="/contact">OPEN STUDIO <span>↗</span></Link></header>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span>01</span> A CREATIVE TECHNOLOGY PRACTICE</div>
        <h1>Hi, I am<br/><em>Opeyemi.</em><br/>An AI Product Designer.<br/>I am a <mark>vibebuilder</mark><br/>with a <i>curious</i> mind.<br/>I love to build products<br/>that <strong>users love.</strong></h1>
        <p className="hero-description">{profile.supporting}</p>
        <div className="hero-actions"><Link className="button-dark" href="/work">EXPLORE MY WORK <ArrowUpRight size={16}/></Link><Link className="text-link" href="/about">ABOUT ME <ArrowRight size={15}/></Link></div>
        <div className="hero-footnote"><span>✳</span> THINK DEEPLY. BUILD CURIOUSLY. SHIP THOUGHTFULLY.</div>
      </div>
      <div className="hero-visual"><Orb/><div className="floating-note note-one"><small>NOW EXPLORING</small><b>AI × PRODUCT</b><span>Ideas in motion ↗</span></div><div className="floating-note note-two"><small>TOOLS I USE</small><b>Figma · Claude · Next.js</b><span>+ a healthy dose of curiosity</span></div></div>
    </section>
    <section className="work-section" id="work">
      <div className="section-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>A few things I <em>design</em><br/>& bring to life.</h2></div><Link href="/work" className="view-all">VIEW ALL PROJECTS <ArrowUpRight size={15}/></Link></div>
      <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project}/>)}
        <div className="more-card"><span>MORE IN THE LAB</span><Sparkles size={27}/><p>More projects and explorations are being added to the collection.</p><Link href="/work">EXPLORE THE WORK <ArrowUpRight size={15}/></Link></div>
      </div>
    </section>
    <section className="about-strip"><div className="about-label">03 / A LITTLE ABOUT ME</div><div><h2>Designer by <em>curiosity.</em><br/>Builder by <i>choice.</i></h2><p>I enjoy the full journey: understanding a problem, shaping an experience, designing the system and bringing useful products to life.</p><Link href="/about" className="under-link">GET TO KNOW ME <ArrowUpRight size={15}/></Link></div><div className="about-stamp">CURIOUS<br/>BY NATURE<br/><span>✳</span></div></section>
    <section className="lab-section"><div><span className="section-index">04 / THE EXPERIMENTAL SIDE</span><h2>Exploring ideas.<br/><em>Building tomorrow.</em></h2><p>A space for AI experiments, prototypes, new tools and unconventional ideas.</p><Link href="/experiments" className="button-outline">ENTER THE LAB <ArrowUpRight size={15}/></Link></div><div className="lab-graphic"><div className="flask flask-a">✳</div><div className="flask flask-b">◎</div><div className="flask flask-c">✦</div><span>TEST / LEARN / ITERATE</span></div></section>
    <section className="contact-banner"><div><span className="section-index">05 / HAVE SOMETHING IN MIND?</span><h2>Let's build something <em>meaningful.</em></h2><p>I'm interested in thoughtful products, ambitious ideas and interesting problems.</p></div><Link href="/contact" className="button-dark">SAY HELLO <ArrowUpRight size={16}/></Link></section>
    <footer className="footer"><span>THE CURIOUS LAB © {new Date().getFullYear()} OPEYEMI OGUNBONA</span><span>BUILT WITH CURIOSITY <b>✳</b></span><Link href="#top">BACK TO TOP ↑</Link></footer>
  </>;
}
