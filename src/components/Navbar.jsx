import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">TodoList</Link>
      <Link href="/add">Add Topic</Link>
    </nav>
  );
};

export default Navbar;
