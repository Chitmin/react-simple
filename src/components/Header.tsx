import MainNav from "./MainNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Hightlight from "./Hightlight";

const Header = ({ ...props }) => {
  return (
    <header {...props}>
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <div className="text-secondary font-bold">LOGO</div>
        <div className="flex">
          <MainNav />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>Authed</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Hightlight />
    </header>
  );
};

export default Header;
