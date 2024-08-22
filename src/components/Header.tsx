import React from "react";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-amber-700 text-white">
      <Container className="flex items-center justify-between">
        <div>TodoApp</div>
        <div>
          {" "}
          <ul className="flex items-center gap-x-10 text-slate-300">
            <Link href={"/view"}>
              <li className="hover:text-white duration-200 cursor-pointer">
                View
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-white duration-200 cursor-pointer">
                About
              </li>
            </Link>
            <Link href={"/settings"}>
              <li className="hover:text-white duration-200 cursor-pointer">
                Settings
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-white duration-200 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
