import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  image: StaticImageData | string;
  title: string
}

export function ProjectCard({ image, title }: ProjectCardProps) {
  return (
    <div className="">
      <Image className="w-[16.25rem] h-auto aspect-[2.25/1] rounded md:w-[25rem]" src={image} alt="" />

      <h3 className="body-2 md:body-1 border-b border-secondary-400 w-fit">{title}</h3>
    </div>
  )
}