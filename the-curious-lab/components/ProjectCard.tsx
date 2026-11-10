import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return <Link href={`/projects/${project.slug}`} className={`project-card ${project.accent}`}>
    <div className="project-art image-art"><img src={`/projects/${project.slug}/hero.png`} alt={`${project.name} project overview`} /><span className="art-index">{project.number}</span></div>
    <div className="project-info"><div className="project-meta"><span>{project.type}{project.type === 'DESIGNED' ? ' / CONCEPT' : ' / PRODUCT'}</span><ArrowUpRight size={17}/></div><h3>{project.name}</h3><p>{project.summary}</p><small>{project.tools.slice(0,3).join(' · ')}</small></div>
  </Link>;
}
