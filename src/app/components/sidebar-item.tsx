import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <Link href={pathname} className="flex items-center h-9 mx-1 gap-3.5">
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
