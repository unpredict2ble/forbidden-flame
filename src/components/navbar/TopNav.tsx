import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import React from "react";
import { FaFire } from "react-icons/fa";
import NavLink from "./NavLink";

const TopNav = () => {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      // this allow us to add styling to NavbarItems
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:border-b-2 pb-1 border-b-purple-200",
        ],
      }}
    >
      {/* logo */}
      <NavbarBrand as={Link} href="/">
        {/* we can change icons using color prop or className */}
        <FaFire size={40} color="#7e22ce" />
        <div className="font-bold text-3xl flex">
          <span className="text-purple-200">Forbidden</span>
          <span className="text-purple-700">Flame</span>
        </div>
      </NavbarBrand>

      {/* navbar center links */}
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
        {/* <NavbarItem isActive as={Link} href="/members">
          Matches
        </NavbarItem>
        <NavbarItem as={Link} href="/lists">
          Lists
        </NavbarItem>
        <NavbarItem as={Link} href="/messages">
          Messages
        </NavbarItem> */}
      </NavbarContent>

      {/* Login and Register buttons */}
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="/login"
          variant="bordered"
          className="text-white"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="bordered"
          className="text-white"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;
