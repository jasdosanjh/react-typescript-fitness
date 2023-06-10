import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navigationPages = [
    { name: "Home" },
    { name: "Benefits" },
    { name: "Classes" },
    { name: "Contact Us" },
  ];

  return (
    <nav>
      <div className={`${flexBetween}  fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              {/* LINKS */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                {navigationPages.map((page, index) => (
                  <Link
                    key={index}
                    page={page.name}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>

              {/* SIGN IN */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
