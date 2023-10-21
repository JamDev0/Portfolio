import { Typography } from "@/components/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

export function NavItem({ children, href }: NavItemProps) {
  const pathname = usePathname()

  const isCurrentPage = pathname === href

  return (
    <Link href={href} className="md:border-r-2 md:py-2 md:border-container-700 md:last:border-r-0">
      <li className="flex justify-center py-3 px-4 list-none border-b-[3px] border-container-900 md:border-b-0 md:py-0">
          <Typography data-active={isCurrentPage} as="span" type='heading-3' className="px-3 border-b border-primary-400 md:border-b-0 md:data-[active=true]:border-b">
            {children}
          </Typography>
      </li>
    </Link>
  )
}