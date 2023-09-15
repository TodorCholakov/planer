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
            Web development
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/calendars">
            Calendars
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Planner
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/media/media-main" aria-current="page">
            Media
          </Link>
        </NavbarItem> 
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem className="flex items-center">
      <div>
        <a href="https://www.buymeacoffee.com/tscholakovi" target="_blank">
          <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
          alt="Buy Me A Coffee" 
          className=" w-40" />
          </a>
        </div>
        </NavbarItem>
 
      
        </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
        
          <Link className="w-full" href="/website_development" size="lg">
            Web development
          </Link>
          <Link className="w-full" href="/media/media-main" size="lg">
            Media
          </Link>
        </NavbarMenuItem>
    
      </NavbarMenu>
    </Navbar>
  );
}
