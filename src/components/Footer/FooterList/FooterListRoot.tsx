import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface FooterListRootProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function FooterListRoot({ children , className, ...props }: FooterListRootProps) {
  return (
    <div className={cx('flex-1 flex flex-col items-center', className)} {...props}>
      {children}
    </div>
  )
}