import Image, { StaticImageData } from "next/image";

import JDGLogoJpg from "@/assets/images/JDG.jpeg";
import meJgp from '@/assets/images/me.jpg';
import { ExperienceCard } from "@/components/ExperienceCard";
import { FeedbackCounter } from "@/components/FeedbackCounter";
import { ProjectCard } from "@/components/ProjectCard";
import { Graph } from "@phosphor-icons/react/dist/ssr";
import { CodeBlock } from "@phosphor-icons/react/dist/ssr/CodeBlock";
import { Layout } from "@phosphor-icons/react/dist/ssr/Layout";
import Link from "next/link";

import MedicalRegistrationJpg from '@/assets/images/MedicalRegistration.jpg';

interface Project {
  image: StaticImageData | string;
  title: string;
  href: string | URL;
}

const projects: Project[] = [
  {
    image: MedicalRegistrationJpg,
    title: 'Medical Registration',
    href: ''
  },
  {
    image: MedicalRegistrationJpg,
    title: 'Medical Registration',
    href: ''
  }
]

interface Tech {
  title: string;
  icon: React.ReactNode;
  background: string;
  color?: string;
}

interface Experience {
    title: string;
    image: StaticImageData | string;
    period: string;
    position: string;
    description: string;
    techs: Tech[];
    responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: 'JDG',
    image: JDGLogoJpg,
    period: '05/2023 - Agora',
    position: 'Co-Fundador e COO',
    description: 'Tem como missão ajudar no crescimento dos membros, com projetos e palestras relevantes. A organização também oferece um ambiente profissional, com hierarquias, responsábilidades distintas.',
    techs: [
      {
        background: '#E535AB',
        icon: <Graph />,
        title: 'GraphQl',
      }
    ],
    responsibilities: [
      'Desenvolver sites de acordo com um design',
      'Manter sites existentes',
      'Correções no Front-End e Back-End'
    ]
  },
  {
    title: 'JDG',
    image: JDGLogoJpg,
    period: '05/2023 - Agora',
    position: 'Co-Fundador e COO',
    description: 'Tem como missão ajudar no crescimento dos membros, com projetos e palestras relevantes. A organização também oferece um ambiente profissional, com hierarquias, responsábilidades distintas.',
    techs: [
      {
        background: '#E535AB',
        icon: <Graph />,
        title: 'GraphQl',
      }
    ],
    responsibilities: [
      'Desenvolver sites de acordo com um design',
      'Manter sites existentes',
      'Correções no Front-End e Back-End'
    ]
  },
]

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-12 py-10 gap-y-12 overflow-x-hidden md:px-32 md:py-16 md:gap-y-32">
      <section className="flex flex-col md:flex-row md:items-center max-w-content w-full">
        <section className="flex flex-col items-center gap-y-3 md:flex-row gap-x-6 mb-12 md:mb-0">
          <h1 className="heading-1 md:hidden">Opa,</h1>

          <Image src={meJgp} width={800} height={800} alt="A photo of Juan Garcia" className="w-[14rem] h-[14rem] rounded-full border-2 border-secondary-400" />

          <div className="flex flex-col gap-y-4">
            <h2 className="hidden heading-1 md:block">Opa,</h2>
            <h2 className="heading-2 md:heading-3">Me chamo Juan</h2>
          </div>
        </section>

        <section className="flex flex-col items-center md:flex-1 md:flex-row md:justify-center gap-x-12">
          <h3 className="heading-3 md:heading-2">Sou Dev</h3>
          
          <div className="relative overflow-y-hidden">
            <div className="flex flex-col items-center relative animate-[stack-switch_4s_infinite_cubic-bezier(.35,0,.65,1.45)_alternate]">
              <div className="flex gap-x-2 items-center text-quaternary-400 md:gap-x-4">
                <span className="highlight-3 underline underline-offset-[3px] md:highlight-1">Front-End</span>

                <Layout className="w-9 h-9" weight="bold" />
              </div>

              <div className="absolute bottom-0 translate-y-full flex gap-x-2 items-center text-tertiary-400 md:gap-x-4">
                <span className="highlight-3 underline underline-offset-[3px] md:highlight-1">Back-End</span>

                <CodeBlock className="w-9 h-9" weight="bold" />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-col items-center max-w-content w-full">
        <h3 className="heading-3 text-center mb-8 md:heading-2">Tenho como experiência:</h3>


        <section className="flex flex-col gap-y-5 flex-wrap md:flex-row md:justify-center md:gap-x-24">
          {
            experiences.map(experience => (
              <ExperienceCard {...experience} key={experience.title} />
            ))
          }
        </section>
      </section>

      <section className="flex flex-col items-center w-full max-w-content">
        <h3 className="heading-3 text-center mb-8 md:heading-2">Veja o que sou capaz de fazer!</h3>

        <section className="flex flex-col flex-wrap gap-y-5 md:flex-row md:justify-center md:gap-x-24">
          {
            projects.map(project => (
              <ProjectCard {...project} key={project.title} />
            ))
          }
        </section>

        <Link className="heading-4 border-b border-b-tertiary-400 mt-5 md:mt-8" href='/projects'>Mais Projetos...</Link>
      </section>

      <section className="flex flex-col items-center w-full md:heading-2 max-w-content">
        <h3 className="heading-3 text-center mb-8 md:heading-2">Feedback</h3>

        <FeedbackCounter />
      </section>
    </main>
  )
}