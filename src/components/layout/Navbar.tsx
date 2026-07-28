import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 border-b bg-white">

      <Container>

        <div className="flex h-16 items-center justify-between">

          <Logo />


          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>


          <div className="flex items-center gap-4">

            <NavActions />


            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >

              {open ? (
                <X size={24}/>
              ) : (
                <Menu size={24}/>
              )}

            </button>

          </div>

        </div>


        <MobileMenu open={open}/>


      </Container>

    </header>

  );
}