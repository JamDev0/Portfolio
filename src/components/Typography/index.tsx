import { VariantProps, cva, cx } from "class-variance-authority";
import { HTMLAttributes } from "react";


const typography = cva('', {
  variants: {
    type: {
      'heading-1': 'font-inter font-semibold text-[2rem]',
      'heading-2': 'font-inter font-semibold text-[1.75rem]',
      'heading-3': 'font-inter font-semibold text-2xl',
      'heading-4': 'font-inter font-semibold text-xl',
      'heading-5': 'font-inter font-semibold text-base',

      'highlight-1': 'font-rubik text-[1.75rem]',  
      'highlight-3': 'font-rubik text-xl',  
      'highlight-4': 'font-rubik text-lg',  

      'tech-1': 'font-chakra text-xl',
      'tech-3': 'font-chakra text-sm',
      'tech-4': 'font-chakra text-xs',
      'tech-5': 'font-chakra text-[0.625rem]',

      'tech-heading-4': 'font-chakra text-2xl',
      
      'text-1': 'font-crimson font-normal text-lg',
      'text-2': 'font-crimson font-normal text-base',
      'text-3': 'font-crimson font-normal text-sm',
      'text-4': 'font-crimson font-normal text-xs',
      'text-5': 'font-crimson font-normal text-[0.625rem]',

      'body-2': 'font-inter font-normal text-base',
      'body-3': 'font-inter font-normal text-sm',
      'body-4': 'font-inter font-normal text-xs',
    },
  },
}) 

type typographyVariants = VariantProps<typeof typography>

interface TypographyProps extends typographyVariants, HTMLAttributes<HTMLElement>{
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export function Typography({ type, children, as: Tag = 'p', className,...props }: TypographyProps) {
  return <Tag {...props} className={cx(typography({ type }), className)}>{children}</Tag>
}