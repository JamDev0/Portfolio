import hexToRgb from 'hex-to-rgba';


interface TechBadgeProps {
  tech: string;
  icon: React.ReactNode
  background: string
  color?: string
}

function defineHighContrastColor(color: string) {
  const rgbColor = color.includes('#') ? hexToRgb(color) : color

  const rgbArray = rgbColor.replace('rgba', '').replace(' ', '').replace('(', '').replace(')', '').split(',').map(val => Number(val))

  const luminance = (0.299 * rgbArray[0] + 0.587 * rgbArray[1] + 0.114 * rgbArray[2])/255

  return luminance > 0.5 ? 'black' : 'white'
}

export function TechBadge({ color, background, icon, tech }: TechBadgeProps) {
  const textColor = color || defineHighContrastColor(background);

  return (
    <div className='flex gap-x-2 items-center px-2 py-1 w-fit rounded-lg h-fit' style={{backgroundColor: background, color: textColor}}>
      <div className='[&>*]:w-[1.375rem] [&>*]:h-[1.375rem] [&>*]:md:w-[1.375rem] [&>*]:md:h-[1.375rem] '>
        {icon}
      </div>

      <span className="tech-3  md:tech-2">{tech}</span>
    </div>
  )
}