import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { title: "Home", url: "#" },
  { title: "Discovery", url: "#" },
  { title: "Photos", url: "#" },
  { title: "Contact", url: "#" },
];

type Props = {
  active: string;
  setActive: (title: string) => void;
};

const DesktopNav = ({ active, setActive }: Props) => {
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

const MobileNav = ({ active, setActive }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Menu
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-8 w-full px-4">
          <ul>
            {links.map((link) => (
              <li key={link.title} className="mb-8">
                <a
                  href="#"
                  onClick={() => {
                    setActive(link.title);
                  }}
                  className={
                    active === link.title ? "text-black" : "text-gray-500"
                  }
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const MainNav = () => {
  const [active, setActive] = useState("Home");
  const isDesktop = useMediaQuery("(min-width: 728px)");

  return isDesktop ? (
    <DesktopNav active={active} setActive={setActive} />
  ) : (
    <MobileNav active={active} setActive={setActive} />
  );
};

export default MainNav;
