import { Typography } from "@/components/Typography";

interface FooterListTitleProps {
  children: React.ReactNode;
}

export function FooterListTitle({ children }: FooterListTitleProps){
  return (
    <Typography as='h2' type='heading-4' className='mb-2'>
      {children}
    </Typography>
  )
}