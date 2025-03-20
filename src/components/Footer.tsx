import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row text-white md:justify-between md:items-start">
        <div className="md:flex-1 mb-4 p-4">LOGO</div>
        <div className="flex md:justify-around md:flex-3 mb-4">
          <nav className="text-xs mr-8">
            <ul className="flex flex-col">
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 1
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 3
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 4
                </a>
              </li>
            </ul>
          </nav>
          <nav className="text-xs mr-8">
            <ul className="flex flex-col">
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 1
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 3
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 4
                </a>
              </li>
            </ul>
          </nav>
          <nav className="text-xs">
            <ul className="flex flex-col">
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 1
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 3
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-500 p-4">
                  Link 4
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:flex-2 px-4 mb-4">
          <div className="relative flex items-center max-w-64 w-full mb-2">
            <Input type="email" placeholder="Email" className="block" />
            <Send className="absolute h-6 w-6 right-0 top-0 bottom-0 m-auto mr-2" />
          </div>
          <div className="text-xs text-gray-200">
            Lorem ipsum dolor sit amet consectetur elit.
          </div>
        </div>
        <div className="md:flex-1 flex justify-between md:justify-around mb-4 p-4">
          <Button variant="outline" size="icon">
            <Instagram />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter />
          </Button>
          <Button variant="outline" size="icon">
            <Facebook />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
