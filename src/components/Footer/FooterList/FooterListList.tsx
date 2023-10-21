interface FooterListListProps {
  children: React.ReactNode;
}

export function FooterListList({ children }: FooterListListProps) {
  return (
    <ul className='list-none flex flex-col gap-y-2 items-center'>
      {
        children
      }
    </ul>
  )
}