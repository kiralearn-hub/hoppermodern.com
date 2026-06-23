import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <div className="App kf-grain">
      <Navbar />
      <main className="pt-[96px]">{children}</main>
      <Footer />
    </div>
  );
}
