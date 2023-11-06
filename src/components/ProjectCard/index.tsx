import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: StaticImageData | string;
  title: string;
  href: string | URL;
}

export function ProjectCard({ image, title, href }: ProjectCardProps) {
  return (
    <Link href={href} className="max-w-[30rem] relative">
      <Image className="w-[16.25rem] h-auto aspect-[2.25/1] rounded md:w-[25rem] object-cover object-top" src={image} alt="" />

      <h3 className="body-2 md:body-1 border-b border-secondary-400 w-fit">{title}</h3>

      <ArrowSquareOut className="absolute top-2 right-2 text-primary-400 w-5 h-5 md:w-8 md:h-8" weight="bold" />
    </Link>
  )
}