import { Typography } from "@/components/Typography";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

export function NavItem({ children, href }: NavItemProps) {
  return (
    <Link href={href}>
      <li className="flex justify-center py-3 px-4 list-none border-b-[3px] border-container-900">
          <Typography as="span" type='heading-3' className="px-3 border-b border-primary-400">
            {children}
          </Typography>
      </li>
    </Link>
  )
}