"use client";

import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    href: string;
    label: string;
}

const NavLink = ({href, label}: Props) => {
  // Next.js nav hook that lets you read the current URL's pathname
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
}

export default NavLink