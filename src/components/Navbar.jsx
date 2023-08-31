import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-between p-4 border-b border-slate-400 max-w-screen-2xl mx-auto font-bold">
      <div className="flex items-center justify-start gap-4">
        <ul className="flex items-center justify-start gap-4">
          {!isOpen ? (
            <li onClick={() => setIsOpen(true)} className="lg:hidden">
              <button>
                <AiOutlineMenu />
              </button>
            </li>
          ) : undefined}
          {isOpen ? (
            <li onClick={() => setIsOpen(false)} className="lg:hidden close">
              <button>
                <AiOutlineClose className="fixed" />
              </button>
            </li>
          ) : undefined}
          <li>
            <img src={logo} className="w-16 mr-20" />
          </li>
        </ul>
        <nav className={isOpen ? "open" : undefined}>
          <ul className="lg:gap-20">
            <li className="hover:text-orange-500">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link
                to="vehicle"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Vehicle Models
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link
                to="ourteams"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Our Teams
              </Link>
            </li>
            <li className="hover:text-orange-500">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center justify-center gap-4 px-4 mt-5 w-full lg:mt-0">
          Sing In
        </button>
        <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white rounded-lg shadow-gray-400 shadow-md mt-5 w-full lg:mt-0 hover:bg-orange-700 transition-all duration-200">
          Register
        </button>
      </div>
    </header>
  );
}
