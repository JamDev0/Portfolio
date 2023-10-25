interface FooterListTitleProps {
  children: React.ReactNode;
}

export function FooterListTitle({ children }: FooterListTitleProps){
  return (
    <h2 className='mb-2 heading-4'>
      {children}
    </h2>
  )
}