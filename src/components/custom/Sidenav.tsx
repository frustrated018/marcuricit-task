import React from "react";
import SidenavLinks from "./SidenavLinks";

const Sidenav = () => {
  return (
    <nav className="w-[200px] border-r h-dvh">
      <section className="p-1.5 space-y-5">
        <h4 className="font-semibold text-center text-xl mt-3">MarcuricIt</h4>

        <SidenavLinks />
      </section>
    </nav>
  );
};

export default Sidenav;
