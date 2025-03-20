import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const links = [
  { title: "Home", url: "#" },
  { title: "Discovery", url: "#" },
  { title: "Photos", url: "#" },
  { title: "Contact", url: "#" },
];

const MainNav = () => {
  const [active, setActive] = useState("Home");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem
            key={link.title}
            onClick={() => setActive(link.title)}
          >
            <NavigationMenuLink
              href={link.url}
              className={
                active === link.title
                  ? "uppercase text-black"
                  : "uppercase text-gray-500"
              }
            >
              {link.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
