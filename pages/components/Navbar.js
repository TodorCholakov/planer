import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MdLanguage } from "react-icons/md";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function NavbarMenuA() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="text-slate-600">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              alt="logo image"
              src="/logo.png"
              width="80"
              height="50"
              className="hover:opacity-60 ease-in-out duration-200"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/website_development" aria-current="page">
            Website crafting
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/calendars">
            Calendars design
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Planner refils
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem className="flex items-center">
          <MdLanguage className="text-3xl mr-1"/>
          <select className="select select-bordered select-xs w-full max-w-xs">
            <option>BG</option>
            <option>EN</option>
          </select>
        </NavbarItem>
        </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="adf" size="lg">
            sadf
          </Link>
        </NavbarMenuItem>
    
      </NavbarMenu>
    </Navbar>
  );
}
