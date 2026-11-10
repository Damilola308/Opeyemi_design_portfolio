import { Mail, ArrowUpRight, Phone, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Contact() {
  return (
    <div className="inner-page contact-page">
      <span className="section-index">05 / CONTACT</span>
      <h1 className="page-title">Have a good<br/><em>problem?</em></h1>
      <p className="lead narrow">I'm open to thoughtful collaborations, interesting product challenges and conversations about AI and technology.</p>
      <div className="contact-methods">
        <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18}/><span>{profile.email}</span><ArrowUpRight size={16}/></a>
        <a className="contact-email" href={`tel:${profile.phoneLink}`}><Phone size={18}/><span>{profile.phone}</span><ArrowUpRight size={16}/></a>
        <a className="contact-email" href={profile.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/><span>Connect with me on LinkedIn</span><ArrowUpRight size={16}/></a>
      </div>
    </div>
  );
}
