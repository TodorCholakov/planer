import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <Navbar onMenuOpenChange={setIsMenuOpen}  isBordered>
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
              width="130"
              height="55"
              className="hover:opacity-60 ease-in-out duration-200"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/calendars">
            Calendars
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Planner Refill
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Other
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
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
